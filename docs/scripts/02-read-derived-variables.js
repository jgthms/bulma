module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');

let initial_variables = JSON.parse(fs.readFileSync(utils.files.initial_variables));

function plugin() {
  let variables = {
    by_name: {},
  };

  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      const {file_name, lines} = utils.getLines(files, file_path);

      variables[file_name] = [];

      lines.forEach(line => {
        const variable = utils.parseLine(line);

        if (variable != false) {
          variable.computed_value = utils.getComputedValue(variable.value, variable.type, initial_variables);
          variables.by_name[variable.name] = variable;
          variables.list.push(variable.name);
        }
      });
    });

    utils.writeFile(utils.files.derived_variables, variables);
  };
}
