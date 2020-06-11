#!/usr/bin/env node

const path = require('path')

const {sassToString, ensureDirectoryExistence, renderSassSync, writeOutput, partition, watch, unwatch} = require("./utils");

let args = process.argv.slice(2);


let options;

[options, args] = partition(args, (arg) => {
  return arg.charAt(0) === '-'
})

if (args.length < 2) {
  console.error("Usage:" + process.argv[0] + process.argv[1] + " input.sass ouput.css [--themeable [--full]]")
}

const input = args[0];

if (path.parse(input).ext !== ".sass" && path.parse(input).ext !== ".scss") {
  console.error("The input file must be a sass or scss file")
  return;
}

const outInfo = path.parse(args[1])

const output = path.resolve(process.cwd(), outInfo.dir + path.sep + outInfo.name);

const shouldWatch = args.indexOf("--watch")

const build = async () => {
  ensureDirectoryExistence(output)

  if (options.indexOf('--themeable') < 0) {
    //No variables build
    const render = renderSassSync(input, output, false);
    //Output the non themeable generated css
    await writeOutput(output, render)
    return render
  } else {
    const defaultVars = {};
    const modifiedVars = {};

    let data = '$themeable: "any";'

    let render = renderSassSync(input, output, false, data, {
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

    if (options.indexOf('--full') >= 0) {
      await writeOutput(output, render)
    } else {
      //Default compressed
      data = '$themeable: true;\n' +
        '$css_vars: (' + Object.keys(modifiedVars).map((v) => '"' + v + '"').join(', ') + ');';
      render = renderSassSync(input, output, false, data)
      await writeOutput(output, render)
    }
    return render;
  }
}

build().then(render => {

  if (shouldWatch) {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    const watcher = async (file) => {
      console.log("\nFile " + file + " has been touched, recompiling\n")
      unwatch()
      try {
        render = await build()
      } catch (e) {
        console.error(e)
      }
      watch(render, watcher)

      rl.question('Continuing watcher, enter q to exit: ', (answer) => {
        rl.close();
        unwatch();
      });
    }
    watch(render, watcher)
    rl.question('Started watcher, enter q to exit: ', (answer) => {
      rl.close();
      unwatch();
    });
  }
});
