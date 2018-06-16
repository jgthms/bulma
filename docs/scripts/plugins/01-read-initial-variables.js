module.exports = plugin;

const utils = require('./utils');

function plugin() {

  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      const {file_name, lines} = utils.getLines(files, file_path);
      let variables = {
        by_name: {},
        list: [],
        file_path,
      };

      lines.forEach(line => {
        const variable = utils.parseLine(line);

        if (variable != false) {
          variables.by_name[variable.name] = variable;
          variables.list.push(variable.name);
        }
      });

      utils.writeFile(file_path, variables);
    });
  };
}
