var Metalsmith = require('metalsmith');
var filter = require('metalsmith-filter');
var writemetadata = require('metalsmith-writemetadata');

var regex = '**/*-variables.sass';
// var regex = '**/*.sass';
var plugin = require('./read-sass-variables');

Metalsmith(__dirname)
  .source('../../sass')
  .destination('./output')
  .clean(true)
  .use(filter(regex))
  .use(plugin())
  .use(writemetadata())
  .build(function(err) {
    if (err) throw err;
  });
