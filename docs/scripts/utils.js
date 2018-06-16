const fs = require('fs');

let utils = {
  getVariableType: (value) => {
    if (value.startsWith('hsl')) {
      return 'color';
    } else if (value.startsWith('$')) {
      return 'variable';
    } else if (value.startsWith('BlinkMacSystemFont') || value == 'monospace') {
      return 'font-family';
    } else if (value == 'true' || value == 'false') {
      return 'boolean';
    } else if (value.includes('+')) {
      return 'computed';
    } else if (value.endsWith('00')) {
      return 'font-weight';
    } else if (value.endsWith('px') || value.endsWith('rem')) {
      return 'size';
    }

    return 'string';
  },

  parseLine: (line) => {
    if (line.startsWith('$') && line.endsWith('!default')) {
      const colon_index = line.indexOf(':');
      const variable_name = line.substring(0, colon_index).trim();

      const default_index = line.indexOf('!default');
      const variable_value = line.substring(colon_index + 1, default_index).trim();

      return variable = {
        name: variable_name,
        value: variable_value,
        type: utils.getVariableType(variable_value),
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

  writeFile: (file_path, data) => {
    const json_data = JSON.stringify(data, null, '  ');

    fs.writeFile(file_path, json_data, err => {
      if (err) {
        return console.log(err);
      }

      console.log('The file was saved!');
    });
  },

  getComputedValue: (value, type, initial_variables) => {
    if (value.startsWith('$') && value in initial_variables.by_name) {
      const second_value = initial_variables.by_name[value].value;
      console.log('second_value', second_value);

      if (second_value.startsWith('$') && second_value in initial_variables) {
        const third_value = initial_variables.by_name[second_value].value;
        console.log('third_value', third_value);

        return third_value;
      }

      return second_value;
    }

    return value;
  }
}

const output_base = './output/';

utils.files = {};
utils.files.initial_variables = `${output_base}initial-variables.json`;
utils.files.derived_variables = `${output_base}derived-variables.json`;

module.exports = utils;
