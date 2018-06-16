const Metalsmith = require('metalsmith');
const filter = require('metalsmith-filter');
const writemetadata = require('metalsmith-writemetadata');

// const regex = '**/*-variables.sass';
// const regex = '**/*.sass';
const regex_initial = '**/initial-variables.sass';
const regex_derived = '**/derived-variables.sass';
const regex_sass = '**/*.sass';
const initial_plugin = require('./01-read-initial-variables');
const derived_plugin = require('./02-read-derived-variables');

// Metalsmith(__dirname)
//   .source('../../sass')
//   .use(filter(regex_initial))
//   .use(initial_plugin())
//   .build(function(err) {
//     if (err) throw err;
//   });

Metalsmith(__dirname)
  .source('../../sass')
  .use(filter(regex_sass))
  .use(derived_plugin())
  .build(function(err) {
    if (err) throw err;
  });
