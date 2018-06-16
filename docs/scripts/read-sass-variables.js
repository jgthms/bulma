module.exports = plugin;

function plugin() {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach(file_path => {
      const file = files[file_path];
      const lines = file.contents.toString().split(/(?:\r\n|\r|\n)/g);

      lines.forEach(line => {
        if (line.startsWith('$') && line.endsWith('!default')) {
          const colon_index = line.indexOf(':');
          const variable_name = line.substring(0, colon_index).trim();

          const default_index = line.indexOf('!default');
          const variable_value = line.substring(colon_index + 1, default_index).trim();

          console.log('variable_name', variable_name);
          console.log('variable_value', variable_value);
        }
      });
    });
  };
}
