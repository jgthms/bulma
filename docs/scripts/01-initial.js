const Metalsmith = require('metalsmith');
const filter = require('metalsmith-filter');

const regex_initial = '**/initial-variables.sass';
const initial_plugin = require('./plugins/01-read-initial-variables');

Metalsmith(__dirname)
  .source('../../sass')
  .use(filter(regex_initial))
  .use(initial_plugin())
  .build(function(err) {
    if (err) throw err;
  });
