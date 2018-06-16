const fs = require('fs');
const path = require('path');

const base_path = '../_data/variables/';

let utils = {
  getVariableType: (value) => {
    if (!value) {
      return 'string';
    }

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
    } else if (value.endsWith('px') || value.endsWith('em')) {
      return 'size';
    } else if (value.includes('$')) {
      return 'compound';
    } else if (value.startsWith('findColorInvert')) {
      return 'function';
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
    const json_file_path = base_path + file_path.replace('.sass', '.json');

    utils.ensureDirectoryExistence(json_file_path);

    fs.writeFile(json_file_path, json_data, err => {
      if (err) {
        return console.log(err);
      }

      console.log(`The file ${json_file_path} was saved!`);
    });
  },

  getInitialValue: (value, type, initial_variables) => {
    if (value.startsWith('$') && value in initial_variables.by_name) {
      const second_value = initial_variables.by_name[value].value;

      if (second_value.startsWith('$') && second_value in initial_variables.by_name) {
        const third_value = initial_variables.by_name[second_value].value;
        console.log('third_value', third_value);

        return third_value;
      }

      return second_value;
    }

    return value;
  },

  getComputedData: (value, type, initial_variables, derived_variables) => {
    let computed_value = '';

    if (value.startsWith('$')) {
      let second_value;

      if (value in initial_variables.by_name) {
        second_value = initial_variables.by_name[value].value;
      } else if (value in derived_variables.by_name) {
        second_value = derived_variables.by_name[value].value;
      }

      if (second_value && second_value.startsWith('$')) {
        let third_value;

        if (second_value in initial_variables.by_name) {
          third_value = initial_variables.by_name[second_value].value;
        } else if (second_value in derived_variables.by_name) {
          third_value = derived_variables.by_name[second_value].value;
        }

        computed_value = third_value;
      } else {
        computed_value = second_value;
      }
    }

    if (computed_value != '') {
      const computed_type = utils.getVariableType(computed_value);

      return {
        computed_type,
        computed_value,
      }
    }

    return {};
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
utils.files.initial_variables = `${base_path}utilities/initial-variables.json`;
utils.files.derived_variables = `${base_path}utilities/derived-variables.json`;

module.exports = utils;
