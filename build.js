#!/usr/bin/env node

const path = require('path')

const {ensureDirectoryExistence, renderSassSync, writeOutput, partition, watch, unwatch} = require("./utils");

let args = process.argv.slice(2);


let options;

[options, args] = partition(args, (arg) => {
  return arg.charAt(0) === '-'
})

if (args.length < 2) {
  console.error("Usage:" + process.argv[0] + process.argv[1] + " input.sass ouput.css [--themeable [--full]] [--min] [--map]")
}

const input = args[0];

if (path.parse(input).ext !== ".sass" && path.parse(input).ext !== ".scss") {
  console.error("The input file must be a sass or scss file")
  return;
}

const outInfo = path.parse(args[1])

const output = path.resolve(process.cwd(), outInfo.dir + path.sep + outInfo.name);

const shouldWatch = options.indexOf("--watch") >= 0

let variables = {};

if (options.indexOf('--rtl') >= 0) {
  variables.rtl = true
}

const build = async () => {
  ensureDirectoryExistence(output)

  if (options.indexOf('--themeable') < 0) {
    //No variables build
    variables.themeable = false
    const render = renderSassSync(input, output, variables);
    //Output the non themeable generated css
    await writeOutput(output, render, options)
    return render
  } else {
    variables.themeable = options.indexOf('--full') < 0 ? true : "full";

    let render = renderSassSync(input, output, variables);

    await writeOutput(output, render, options)
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

      rl.question('Continuing watcher, press enter to exit', (answer) => {
        rl.close();
        unwatch();
      });
    }
    watch(render, watcher)
    rl.question('Started watcher, press enter to exit', (answer) => {
        rl.close();
        unwatch();
    });
  }
});
