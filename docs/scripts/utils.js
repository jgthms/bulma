const fs = require('fs');

function getVariableType(value) {
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
  } else if (value.endsWith('px') || value.endsWith('rem')) {
    return 'size';
  }

  return 'string';
}

function parseLine(line) {
  if (line.startsWith('$') && line.endsWith('!default')) {
    const colon_index = line.indexOf(':');
    const variable_name = line.substring(0, colon_index).trim();

    const default_index = line.indexOf('!default');
    const variable_value = line.substring(colon_index + 1, default_index).trim();

    return variable = {
      name: variable_name,
      value: variable_value,
      type: getVariableType(variable_value),
    };
  }

  return false;
}

function getLines(files, file_path) {
  const file = files[file_path];
  const slash_index = file_path.lastIndexOf('/');
  const dot_index = file_path.lastIndexOf('.');
  const file_name = file_path.substring(slash_index + 1, dot_index);

  return {
    file_name,
    lines: file.contents.toString().split(/(?:\r\n|\r|\n)/g),
  }
}

function writeFile(file_path, data) {
  const json_data = JSON.stringify(data, null, '  ');

  fs.writeFile(file_path, json_data, err => {
    if (err) {
      return console.log(err);
    }

    console.log('The file was saved!');
  });
}

let plugin = {};
plugin.getVariableType = getVariableType;
plugin.getLines = getLines;
plugin.parseLine = parseLine;
plugin.writeFile = writeFile;

module.exports = plugin;
