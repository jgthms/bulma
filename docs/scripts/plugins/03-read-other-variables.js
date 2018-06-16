module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');

let initial_variables = JSON.parse(fs.readFileSync(utils.files.initial_variables));
let derived_variables = JSON.parse(fs.readFileSync(utils.files.derived_variables));

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      if (file_path.startsWith('utilities')) {
        return;
      }

      let variables = {
        by_name: {},
        list: [],
      };
      const {file_name, lines} = utils.getLines(files, file_path);

      lines.forEach(line => {
        const variable = utils.parseLine(line);

        if (variable != false) {
          variable.computed_value = utils.getComputedValue(variable.value, variable.type, initial_variables, derived_variables);
          variables.by_name[variable.name] = variable;
          variables.list.push(variable.name);
        }
      });

      utils.writeFile(file_path, variables);
    });
  };
}
