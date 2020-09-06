module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');
const regexRegisterColors = /registerCSSVarColors\((\$[a-z]+)\)/g;
const regexAssign = /--[a-z-]*:/g;
const regexUsage = /var\(--[a-z-]*(\, \#|\))/g;
const LOG_EVERYTHING = false;

const COLOR_MAPS = {
  '$colors': ["white", "black", "light", "dark", "primary", "link", "info", "success", "warning", "danger"],
  '$shades': ["black-bis", "black-ter", "grey-darker", "grey-dark", "grey", "grey-light", "grey-lighter", "white-ter", "white-bis"],
}

function logThis(message) {
  if (LOG_EVERYTHING) {
    console.log(message);
  }
}

function getFirstGroup(regexp, str) {
  const array = [...str.matchAll(regexp)];
  return array.map(m => m[1]);
}

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    let hasErrors = false;

    const cssvars = fs.readFileSync(`../sass/themes/basic.sass`, "utf8");

    // Check for --cyan: #{$cyan}
    let defaultAssignments = cssvars.match(regexAssign) || [];
    defaultAssignments = defaultAssignments.map(assignment => assignment.replace(':', ''));

    // Check for +registerCSSVarColors($colors)
    let registerMaps = getFirstGroup(regexRegisterColors, cssvars);

    if (registerMaps) {
      registerMaps.forEach(mapName => {
        if (mapName in COLOR_MAPS) {
          const colors = COLOR_MAPS[mapName].map(colorName => {
            defaultAssignments.push(`--${colorName}`);
            defaultAssignments.push(`--${colorName}-h`);
            defaultAssignments.push(`--${colorName}-s`);
            defaultAssignments.push(`--${colorName}-l`);
            defaultAssignments.push(`--${colorName}-a`);
            defaultAssignments.push(`--${colorName}-invert`);
            defaultAssignments.push(`--${colorName}-light`);
            defaultAssignments.push(`--${colorName}-dark`);
          });
        }
      });
    }

    Object.keys(files).forEach(filePath => {
      const {fileName, lines} = utils.getLines(files, filePath);
      const file = files[filePath];
      const contents = file.contents.toString();
      const assignments = contents.match(regexAssign);
      let fileAssignments = [];
      let allAssignments = [];
      let errorCount = 0;

      if (assignments) {
        // --foobar: ==> --foobar
        fileAssignments = assignments.map(assignment => assignment.replace(':', ''));
        allAssignments = [...defaultAssignments, ...fileAssignments];
      } else {
        logThis(`${filePath} has no CSS var assignments`);
        allAssignments = [...defaultAssignments];
      }

      let usages = contents.match(regexUsage);

      if (!usages) {
        logThis(`${filePath} has no CSS var usages`);
        return;
      }

      // var(--foobar) ==> --foobar
      usages = usages.map(usage => {
        usage = usage.replace('var(', '');
        usage = usage.replace(')', '');
        usage = usage.replace(', #', '');
        return usage;
      });

      usages.forEach(usage => {
        if (!allAssignments.includes(usage)) {
          console.log(`${usage} is not assigned`);
          errorCount++;
        }
      });

      fileAssignments.forEach(assignment => {
        if (!usages.includes(assignment)) {
          console.log(`${assignment} is not used`);
          errorCount++;
        }
      });

      if (errorCount) {
        console.log(`There are some errors in ${filePath}.`);
        hasErrors = true;
      } else {
        logThis(`${filePath} is all good!`);
      }
    });

    if (hasErrors) {
      console.log(`There are some errors.`);
    } else {
      console.log(`All CSS variables are used and assigned correctly!`);
    }
  };
}
