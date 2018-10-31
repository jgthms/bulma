const Metalsmith = require('metalsmith');
const filter = require('metalsmith-filter');

const regex_derived = '**/derived-variables.sass';
const derived_plugin = require('./plugins/02-read-derived-variables');

Metalsmith(__dirname)
  .source('../../sass')
  .use(filter(regex_derived))
  .use(derived_plugin())
  .build(function(err) {
    if (err) throw err;
  });
