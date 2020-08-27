module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');
const regexAssign = /--[a-z-]*:/g;
const regexUsage = /var\(--[a-z-]*(\, \#|\))/g;
const LOG_EVERYTHING = false;

function logThis(message) {
  if (LOG_EVERYTHING) {
    console.log(message);
  }
}

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    let hasErrors = false;

    const cssvars = fs.readFileSync(`../sass/themes/default.sass`, "utf8");
    let defaultAssignments = cssvars.match(regexAssign);
    defaultAssignments = defaultAssignments.map(assignment => assignment.replace(':', ''));

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
