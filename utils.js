const sass = require('node-sass')
const path = require('path')
const fs = require('fs')

/**
 * Converts an RGB color value to HSL. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes r, g, and b are contained in the set [0, 255] and
 * returns h, s, and l in the set [0, 1].
 *
 * @param r  Number        The red color value
 * @param g  Number        The green color value
 * @param b  Number        The blue color value
 * @return  Array          The HSL representation
 */
const rgbToHsl = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s*100), Math.round(l*100)];
}

/**
 *
 * @param varName String            name of the sass variable
 * @param color sass.types.String   the value of the variable
 * @param vars Object               the object to assing the variables to
 */
const makeAdjustableVar = (varName, color, vars) => {
  const [h, s, l] = rgbToHsl(color.getR(), color.getG(), color.getB());
  const a = color.getA();
  vars[varName + '-h'] = h+'';
  vars[varName + '-s'] = s+'%';
  vars[varName + '-l'] = l+'%';
  if (a)
    vars[varName + '-a'] = a;
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
    val = val.slice(0, -1)
  } else if (value instanceof sass.types.Map) {
    for (let i = 0; i < value.getLength(); ++i) {
      val += value.getKey(i) + ':' + sassToString(value.getValue(i)) + ","
    }
    val = '(' + val.slice(0, -1) + ')'
  } else if (value instanceof sass.types.Null) {
    val = ""
  } else if (value instanceof sass.types.Number) {
    val = value.getValue() + value.getUnit();
  } else {
    val = value.getValue();
  }
  return val
}

const maybeVar = (name, value, modified) => {
  if (modified === undefined || name.indexOf(modified)) {
    return 'var(--bulma-'+name+')'
  } else {
    return value
  }
}

const maybeCalc = (name, value, multiply, modified, original) => {
  if (value && value.getValue() !== 0) {
    const unit = value.getUnit();
    value.setUnit('')
    const val = parseFloat(sassToString(value));
    return 'calc('+maybeVar(name, original, modified) + (multiply ? "*" : (val > 0 ? '+' : '-')) + ' ' + Math.abs(val)+unit+')'
  } else {
    return maybeVar(name, original, modified)
  }
}

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
  data += '\n@import "' + input + '";'
  return sass.renderSync({
    data,
    includePaths: [path.resolve(process.cwd(), input)],
    outputStyle: 'expanded',
    sourceMap: true,
    functions
  });
}

module.exports = { rgbToHsl, maybeCalc, ensureDirectoryExistence, makeAdjustableVar, sassToString, writeOutput, renderSassSync, maybeVar};
