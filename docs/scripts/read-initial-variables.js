module.exports = plugin;

const utils = require('./utils');

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
          variables.by_name[variable.name] = variable;
          variables[file_name].push(variable.name);
        }
      });

      metalsmith.variables = variables;

      utils.writeFile('./output/initial-variables.json', variables);
    });
  };
}
