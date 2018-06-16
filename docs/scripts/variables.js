var Metalsmith = require('metalsmith');
var filter = require('metalsmith-filter');
var writemetadata = require('metalsmith-writemetadata');

// var regex = '**/*-variables.sass';
// var regex = '**/*.sass';
var regex_initial = '**/initial-variables.sass';
var regex_derived = '**/derived-variables.sass';
var initial_plugin = require('./01-read-initial-variables');
var derived_plugin = require('./02-read-derived-variables');

Metalsmith(__dirname)
  .source('../../sass')
  .use(filter(regex_initial))
  .use(initial_plugin())
  .build(function(err) {
    if (err) throw err;
  });

Metalsmith(__dirname)
  .source('../../sass')
  .use(filter(regex_derived))
  .use(derived_plugin())
  .build(function(err) {
    if (err) throw err;
  });
