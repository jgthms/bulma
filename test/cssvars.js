const Metalsmith = require('metalsmith');
const filter = require('metalsmith-filter');

const regex_sass = '**/*.sass';
const other_plugin = require('./plugins/check-css-variables-exist');

Metalsmith(__dirname)
  .source('../sass')
  .use(filter(regex_sass))
  .use(other_plugin())
  .build(function(err) {
    if (err) throw err;
  });
