var Metalsmith = require('metalsmith');
var filter = require('metalsmith-filter');
var writemetadata = require('metalsmith-writemetadata');

// var regex = '**/*-variables.sass';
// var regex = '**/*.sass';
var regex_initial = '**/initial-variables.sass';
var regex_derived = '**/derived-variables.sass';
var initial_plugin = require('./read-initial-variables');
var derived_plugin = require('./read-derived-variables');

Metalsmith(__dirname)
  .source('../../sass/utilities')
  // .destination('./output')
  // .clean(true)
  .use(filter(regex_initial))
  .use(initial_plugin())
  // .use(filter(regex_derived))
  // .use(derived_plugin())
  // .use(writemetadata())
  .build(function(err) {
    if (err) throw err;
  });
