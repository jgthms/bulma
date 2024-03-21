const fs = require("fs");

const splitLines = (t) => {
  return t.split(/\r\n|\r|\n/);
};

const FILES = [
  "base/animations.scss",
  "base/generic.scss",
  "base/minireset.scss",
  "base/skeleton.scss",
  "components/breadcrumb.scss",
  "components/card.scss",
  "components/dropdown.scss",
  "components/menu.scss",
  "components/message.scss",
  "components/modal.scss",
  "components/navbar.scss",
  "components/pagination.scss",
  "components/panel.scss",
  "components/tabs.scss",
  "elements/block.scss",
  "elements/box.scss",
  "elements/button.scss",
  "elements/content.scss",
  "elements/delete.scss",
  "elements/icon.scss",
  "elements/image.scss",
  "elements/loader.scss",
  "elements/notification.scss",
  "elements/progress.scss",
  "elements/table.scss",
  "elements/tag.scss",
  "elements/title.scss",
  "form/checkbox-radio.scss",
  "form/file.scss",
  "form/input-textarea.scss",
  "form/select.scss",
  "form/shared.scss",
  "form/tools.scss",
  "grid/columns.scss",
  "grid/grid.scss",
  "layout/container.scss",
  "layout/footer.scss",
  "layout/hero.scss",
  "layout/level.scss",
  "layout/media.scss",
  "layout/section.scss",
  "utilities/controls.scss",
  "utilities/derived-variables.scss",
  "utilities/initial-variables.scss",
];
const DATA_PATH = "../_data/variables/";

const parseFile = (path) => {
  let output = {
    "sass-vars": [],
    "css-vars": [],
  };

  fs.readFile(`../../sass/${path}`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // const sassVarRegex = /^\$([a-z0-9-]+):(.+)!default;$/gm;
    const sassVarRegex = /^\$([a-z0-9-]+):([^;]*)!default;/gm;
    const sassMatches = data.matchAll(sassVarRegex);

    for (const match of sassMatches) {
      let name = match[1].trim();
      let value = match[2].trim();

      // const getvarRegex = /^cv\.getVar\("([a-z0-9-]+)"\)/;
      const getvarRegex = /(#{)?(cv\.getVar\(")([a-z0-9-]+)("\))(})?/g;
      const getvarMatch = value.match(getvarRegex);

      if (getvarMatch) {
        const varName = getvarMatch[3];
        value = value.replace(getvarRegex, `var(--bulma-$3)`);
        // console.log(getvarMatch[3]);
        // value = `var(--bulma-${varName})`;
      }

      output["sass-vars"].push({
        name,
        value,
      });
    }

    const registerRegex = /register-vars[^;]*/g;
    const registerVars = data.match(registerRegex);

    if (registerVars) {
      const singleVarRegex = /"([a-z0-9-]+)":(.+)[ ,]?\n/gm;
      const singleVars = registerVars[0].matchAll(singleVarRegex);

      for (const match of singleVars) {
        let name = match[1].trim();
        let value = match[2].trim();

        // #{$breadcrumb-item-color}
        const curlyRegex = /#{\$([a-z0-9-]+)}/;
        const curlyValue = value.match(curlyRegex);

        if (curlyValue) {
          // breadcrumb-item-color
          // Get the actual value from the Sass variable
          const found = output["sass-vars"].find(
            (sassVar) => sassVar["name"] === curlyValue[1],
          );

          if (found) {
            // Add CSS var to Sass variable
            found["css-var"] = name;
            value = found["value"];
          }
        }

        output["css-vars"].push({
          name,
          value,
        });
      }
    }

    const jsonOutput = JSON.stringify(output, null, "  ");
    const jsonPath = DATA_PATH + path.replace(".scss", ".json");

    fs.writeFile(jsonPath, jsonOutput, (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`The file ${jsonPath} was saved!`);
    });
  });
};

parseFile("components/card.scss");

FILES.forEach((file) => {
  parseFile(file);
});
