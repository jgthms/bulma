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

const writeOutput = (output, result, input) => {
  postcss([autoprefixer, postcssCalc]).process(result.css, {map: { prev: result.map.toString(), inline: false, sourcesContent: true }, from: input, to: output + '.css'}).then((result) => {
    fs.writeFile(output + '.css', result.css, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.css'))
    fs.writeFile(output + '.css.map', result.map, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.css.map'))

    fs.writeFile(output+'.min.css', new cleanCSS().minify(result.css).styles, (err) => err ? console.error(err) : console.log('wrote to ' + output + '.min.css'))
  });
}

const renderSassSync = (input, output, data, functions) => {
  data = data || "";
  data += '\n@import "' + input + '";'
  return sass.renderSync({
    data,
    outFile: output + '.css',
    includePaths: [path.resolve(process.cwd(), input)],
    outputStyle: 'expanded',
    sourceMap: true,
    sourceMapContents: true,
    functions
  });
}

module.exports = { ensureDirectoryExistence, writeOutput, renderSassSync };
