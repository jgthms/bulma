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


/**
 * Converts sass types to plain strings that can be read again by the sass compiler
 * @param value
 * @returns {string}
 */
const sassToString = (value) => {
  let val = "";
  if (value instanceof sass.types.Color) {
    const a = parseInt(value.getA() * 255);
    if (a === 0) {
      val = 'transparent'
    } else {
      val = '#' + parseInt(value.getR()).toString(16).padStart(2, 0)
        + parseInt(value.getG()).toString(16).padStart(2, 0)
        + parseInt(value.getB()).toString(16).padStart(2, 0)
        + (a === 255 ? "" : a.toString(16).padStart(2, 0));

      let short = true;
      let shortVal = "#";
      for(let i = 1; i < (a === 255 ? 6 : 8); i+=2) {
        if (val[i] !== val[i + 1]) {
          short = false
        } else {
          shortVal += val[i]
        }
      }
      if (short)
        val = shortVal;
    }
  } else if (value instanceof sass.types.List) {
    for (let i = 0; i < value.getLength(); ++i) {
      val += sassToString(value.getValue(i)) + " "
    }
    val = '(' + val.slice(0, -1) + ')'
  } else if (value instanceof sass.types.Map) {
    for (let i = 0; i < value.getLength(); ++i) {
      val += value.getKey(i) + ':' + sassToString(value.getValue(i)) + ","
    }
    val = '(' + val.slice(0, -1) + ')'
  } else if (value instanceof sass.types.Null) {
    val = ""
  } else if (value instanceof sass.types.Number) {
    val = value.getValue().toPrecision(2) + value.getUnit();
  } else if (value instanceof sass.types.String) {
    val = '"'+value.getValue()+'"';
  } else {
    val = value.getValue();
  }
  return val
}

const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssCalc = require('postcss-calc')
const postcssVarOptimize = require('postcss-var-optimize')
const cleanCSS = require('clean-css')

const writeOutput = async (output, result, options) => {
  options = options || []

  console.log("Rendering Complete, saving .css file...")

  const map = options.indexOf('--map') >= 0 ? { prev: result.map.toString(), inline: false, sourcesContent: false } : false;

  result = await postcss([autoprefixer, options.indexOf('--full') < 0 ? postcssVarOptimize : postcssCalc]).process(result.css, {map, from: output + ".css", to: output + '.css'})

  const p = [];
  p.push(new Promise((resolve, reject) =>
    fs.writeFile(output + '.css', result.css, (err) =>
      err ? console.error(err) || reject() : console.log('Wrote to ' + output + '.css') || resolve())
  ))

  if (result.map) {
    p.push(new Promise((resolve, reject) =>
      fs.writeFile(output + '.css.map', result.map, (err) =>
        err ? console.error(err) || reject() : console.log('Wrote to ' + output + '.css.map') || resolve())
    ))
  }

  if (options.indexOf('--min') >= 0) {
    p.push(new Promise((resolve, reject) =>
      fs.writeFile(output + '.min.css', new cleanCSS({level: 2}).minify(result.css).styles, (err) =>
        err ? console.error(err) || reject() : console.log('Wrote to ' + output + '.min.css') || resolve())
    ))
  }

  await Promise.all(p)
}

const renderSassSync = (input, output, variables, functions) => {
  variables = variables || {};
  let data = Object.keys(variables).map((v) => "$"+v+':'+variables[v]+";").join("\n")

  data += '\n@import "' + input + '";'
  try {
    return sass.renderSync({
      data,
      outFile: output + '.css',
      includePaths: [path.resolve(process.cwd(), input)],
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true,

      functions,
    })
  } catch (e) {
    console.error(e)
  }
}

const watched = [];
const watch = (render, cb) => {
  render.stats.includedFiles.map((file) => {
      watched.push(fs.watch(file, () => {
        cb(file)
      }));
  });
}

const unwatch = () => {
  watched.map((watcher) => {
    watcher.close()
  })
}


const partition = (array, isValid) => {
  return array.reduce(([pass, fail], elem) => {
    return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
  }, [[], []]);
}

module.exports = { ensureDirectoryExistence, writeOutput, renderSassSync, sassToString, partition, watch, unwatch };
