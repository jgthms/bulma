const sass = require('node-sass')
const path = require('path')
const fs = require('fs')

const ensureDirectoryExistence = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  fs.mkdirSync(dirname, {recursive: true});
}

const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssCalc = require('postcss-calc')
const cleanCSS = require('clean-css')

const writeOutput = (output, css, map, input) => {
  postcss([autoprefixer, postcssCalc]).process(css, {map: { prev: map, inline: false, sourcesContent: true }, from: output + '.css', to: output + '.css'}).then((result) => {
    fs.writeFile(output + '.css', result.css, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.css'))
    fs.writeFile(output + '.css.map', result.map, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.css.map'))

    fs.writeFile(output+'.min.css', new cleanCSS().minify(result.css).styles, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.min.css'))
  });
}

const renderSassSync = (input, data, functions) => {
  data = data || "";
  data += '\n@import "' + input + '";'
  return sass.renderSync({
    data,
    includePaths: [path.resolve(process.cwd(), input)],
    outputStyle: 'expanded',
    sourceMap: true,
    functions
  });
}

module.exports = { ensureDirectoryExistence, writeOutput, renderSassSync };
