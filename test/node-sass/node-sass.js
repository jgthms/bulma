const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const utils = require('../utils');

const NODE_SASS_BASE_PATH = 'test/node-sass/build/';

fs.mkdir(NODE_SASS_BASE_PATH, { recursive: true }, (err) => {
  if (err) throw err;
});

const exportNodeSassCSS = (filepath, options) => {
  utils.exportCSS(sass, fs, NODE_SASS_BASE_PATH, filepath, options)
}

// Full import

exportNodeSassCSS('bulma', {
  file: './bulma.sass',
});

exportNodeSassCSS('bulma-rtl', {
  file: './bulma-rtl.sass',
});

// Single imports

const BULMA_IMPORT_PATH = `./sass/`;

utils.SOURCES.forEach((source) => {
  const parsed = path.parse(source);

  fs.mkdir(`${NODE_SASS_BASE_PATH}${parsed.dir}`, { recursive: true }, (err) => {
    if (err) throw err;
  });

  exportNodeSassCSS(`${parsed.dir}/${parsed.name}`, {
    data: `@import "${BULMA_IMPORT_PATH}${source}";`,
  });
});
