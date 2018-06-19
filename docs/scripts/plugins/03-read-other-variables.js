module.exports = plugin;

const utils = require('./utils');
const fs = require('fs');

let initial_variables = JSON.parse(fs.readFileSync(utils.files.initial_variables));
let derived_variables = JSON.parse(fs.readFileSync(utils.files.derived_variables));

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      // if (file_path.startsWith('utilities')) {
      //   return;
      // }

      const {file_name, lines} = utils.getLines(files, file_path);
      let variables = {
        by_name: {},
        list: [],
        file_path,
      };

      lines.forEach(line => {
        const variable = utils.parseLine(line);

        if (variable != false) {
          const computed_data = utils.getComputedData(variable.name, variable.value, variable.type, initial_variables, derived_variables);

          if (Object.keys(computed_data).length > 0) {
            variable.computed_type = computed_data.computed_type;
            variable.computed_value = computed_data.computed_value;
          }

          variables.by_name[variable.name] = variable;
          variables.list.push(variable.name);
        }
      });

      if (variables.list.length > 0) {
        utils.writeFile(file_path, variables);
      }
    });
  };
}
