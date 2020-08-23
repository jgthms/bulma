const fs = require('fs');
const path = require('path');

let utils = {
  parseLine: (line) => {
    if (line.startsWith('$') && line.endsWith('!default')) {
      const colon_index = line.indexOf(':');
      const variable_name = line.substring(0, colon_index).trim();

      const default_index = line.indexOf('!default');
      const variable_value = line.substring(colon_index + 1, default_index).trim();

      return variable = {
        name: variable_name,
        value: variable_value,
        type: utils.getVariableType(variable_name, variable_value),
      };
    }

    return false;
  },

  getLines: (files, file_path) => {
    const file = files[file_path];
    const slash_index = file_path.lastIndexOf('/');
    const dot_index = file_path.lastIndexOf('.');
    const file_name = file_path.substring(slash_index + 1, dot_index);

    return {
      file_name,
      lines: file.contents.toString().split(/(?:\r\n|\r|\n)/g),
    }
  },

  ensureDirectoryExistence: (file_path) => {
    var dirname = path.dirname(file_path);

    if (fs.existsSync(dirname)) {
      return true;
    }

    utils.ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }
}

utils.files = {};

module.exports = utils;
