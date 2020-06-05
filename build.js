const fs = require('fs');
const sass = require('node-sass')


const vars = {}

fs.writeFileSync('sass/themeable/variable-list.sass', '');

let data = '@import "bulma.sass"'

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
function rgbToHsl(r, g, b) {
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

  return [Math.round(h * 360), s, l];
}

/**
 *
 * @param varName String            name of the sass variable
 * @param color sass.types.String   the value of the variable
 */
function makeAdjustableVar(varName, color) {
  const [h, s, l] = rgbToHsl(color.getR(), color.getG(), color.getB());
  const a = color.getA();
  vars[varName + '-h'] = h;
  vars[varName + '-s'] = s;
  vars[varName + '-l'] = l;
  if (a)
    vars[varName + '-a'] = a;
}


/**
 * Converts sass types to plain strings that can be read again by the sass compiler
 * @param value
 * @returns {string}
 */
function sassToString(value) {
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

const non_themeable = sass.renderSync({
  data,
  outputStyle: 'expanded',
  sourceMap: true,
  functions: {
    '_v($name, $value)': function (name, value) {
      vars[name.getValue()] = sassToString(value);

      return value;
    },
    '_vRegisterHSLA($name, $value)': function (name, value) {
        if (value instanceof sass.types.Color) {
          makeAdjustableVar(name.getValue(), value)
        }
        return sass.types.Null.NULL
    }
  }
})

fs.mkdirSync('css');

fs.writeFileSync('sass/themeable/variable-list.sass', '// This file was automatically generated do not modify it\n'
  + '$css_vars: (' + Object.keys(vars).map((v) => '"' + v + '":' + vars[v]).join(', ') + ')')

fs.writeFile('css/bulma.css', non_themeable.css, (err) => err ? console.error(err) : console.log('wrote to css/bulma.css'))
fs.writeFile('css/bulma.css.map', non_themeable.map, (err) => err ? console.error(err) : console.log('wrote to css/bulma.css.map'))

function maybeCalc(name, value) {
  if (value.getValue() !== 0) {
    const val = parseFloat(sassToString(value));
    return 'calc(var(--bulma-'+name+') '+ (val > 0 ? '+' : '-') + ' ' + Math.abs(val)+')'
  } else {
    return 'var(--bulma-'+name+')'
  }
}

data = '$themeable: "yes";\n' +
  '@import "bulma.sass";'
const themeable = sass.renderSync({
  data,
  outputStyle: 'expanded',
  sourceMap: true,
  functions: {
    '_v($name, $value)': function (name, value) {
      return new sass.types.String('var(--bulma-' + name.getValue() + ')');
    },
    '_vAdjustHSLA($name, $value, $h, $s, $l, $a)': function (name, value, h, s, l, a) {
      let str = "hsla(";
      name = name.getValue();
      str += maybeCalc(name+"-h", h) +','
      str += maybeCalc(name+"-s", s) +','
      str += maybeCalc(name+"-l", l) +','
      str += maybeCalc(name+"-a"+',1', a)

      return sass.types.String(str + ')')
    }
  }
})

fs.writeFile('css/bulma.themeable.css', themeable.css, (err) => err ? console.error(err) : console.log('wrote to css/bulma.themeable.css'))
fs.writeFile('css/bulma.themeable.css.map', themeable.map, (err) => err ? console.error(err) : console.log('wrote to css/bulma.themeable.css.map'))
