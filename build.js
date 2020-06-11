#!/usr/bin/env node

const path = require('path')
const sass = require('node-sass')

const {sassToString, ensureDirectoryExistence, renderSassSync, writeOutput} = require("./utils");

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error("Usage:" + process.argv[0] + process.argv[1] + " ouput.css input.sass [...[theme-name:]theme-file.sass | any]")
  console.log("Passing 'any' as a third argument will generate a file with all of the css variables")
  console.log("If passing a list of theme they will all be bundled in the same file but it will be optimized to only use the modified variables")
}

const argThemes = args.slice(2);

const input = args[1];

const outInfo = path.parse(args[0])

const output = path.resolve(process.cwd(), outInfo.dir + path.sep + outInfo.name);

ensureDirectoryExistence(output)


if (argThemes.length === 0) {
  //No variables build
  const non_themeable = renderSassSync(input, output);
  //Output the non themeable generated css
  writeOutput(output, non_themeable)
} else {
  const defaultVars = {};
  const modifiedVars = {};

  let data = '$themeable: "any";'

  let render = renderSassSync(input, output, data, {
    '_vRegister($name, $value)': function (name, value) {
      const val = sassToString(value);
      name = name.getValue();
      if (!(name in defaultVars) || defaultVars[name] === val) {
        defaultVars[name] = val;
      } else {
        // If variable is registered again with a different value, it was modified
        modifiedVars[name] = val;
      }
      return value;
    },
  });

  if (argThemes.length === 1 && argThemes[0] === 'any') {
    writeOutput(output, render)
  } else {
    data = '$themeable: true;\n' +
      '$css_vars: (' + Object.keys(modifiedVars).map((v) => '"' + v + '"').join(', ') + ');';
    render = renderSassSync(input, output, data)
    writeOutput(output, render)
  }
}
