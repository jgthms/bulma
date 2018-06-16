module.exports = plugin;

var utils = require('./utils');

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      const {file_name, lines} = utils.getLines(files, file_path);

      lines.forEach(line => {
        const variable = utils.parseLine(line);

        if (variable != false) {
          console.log('variable', variable);
        }
      });

      metalsmith.variables = variables;
    });
  };
}
