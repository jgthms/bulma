const fs = require('fs');
const sass = require('node-sass')

const { makeAdjustableVar, sassToString, maybeCalc, ensureDirectoryExistence } = require("./utils");

const args = process.argv.slice(2);

const input = args[0];
const output = args[1];

//List of found vars and their value
const vars = {}

//Empty the variable list to first compile without theming enabled
fs.writeFileSync('sass/themeable/variable-list.sass', '');

let data = '@import "'+input+'"'

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
          makeAdjustableVar(name.getValue(), value, vars)
        }
        return sass.types.Null.NULL
    },
  }
})

ensureDirectoryExistence(output)

//Insert all the found vars into a sass list
fs.writeFileSync('sass/themeable/variable-list.sass', '// This file was automatically generated do not modify it\n'
  + '$css_vars: (' + Object.keys(vars).map((v) => '"' + v + '":' + vars[v]).join(', ') + ')')

//Output the non themeable generated css
fs.writeFile(output+'.css', non_themeable.css, (err) => err ? console.error(err) : console.log('wrote to '+output+'.css'))
fs.writeFile(output+'.css.map', non_themeable.map, (err) => err ? console.error(err) : console.log('wrote to '+output+'.css.map'))


data = '$themeable: "yes";\n' +
  '@import "'+input+'";'
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
    },
    '_vDark($name, $value)': function (name, value) {
      //TODO
      return value
    },
    '_vLight($name, $value)': function (name, value) {
      //TODO
      return value
    }
  }
})

//Output the themeable generated css
fs.writeFile(output+'.themeable.css', themeable.css, (err) => err ? console.error(err) : console.log('wrote to '+output+'.themeable.css'))
fs.writeFile(output+'.themeable.css.map', themeable.map, (err) => err ? console.error(err) : console.log('wrote to '+output+'.themeable.css.map'))
