## Building the documentation

The documentation HTML is produced with the Ruby-based `jekyll` tool.

1. Make sure Ruby 2.x is installed.
2. `gem install jekyll` if `jekyll` is not already installed.

> **Note**: If you are an ```Ubuntu user```, make sure ruby2.x-dev is installed.

## Viewing the documentation locally

To view the documentation on your system locally:

### Setup

1. `cd` into `docs/` directory
1. Copy the config file, `cp _config.yml _config.local.yml`
1. Edit `_config.local.yml` and change the `url:` value to `http://localhost:4000`. This local config file will be ignored by git.

### Run Jekyll

1. In a separate shell session, `cd` to the `docs/` directory, and do:
```
jekyll serve --incremental --config _config.local.yml
```

This will start an HTTP server at `http://localhost:4000/` that serves the docs built in the `_site` directory; and anytime the docs are rebuilt by you, it will serve the docs site on the fly. You can also add the `--open-url` option (or its alias `--o`) to automatically open the server URL in your default browser when it's ready.

In your main shell session where you develop, if you change anything in `docs/` the jekyll server will rebuild those on the fly. But if you change anything about the Bulma SASS or CSS, you need to do `npm run start` to build the docs' CSS before you will see it in the browser. The process running `jekyll serve` will pick up the new CSS automatically.

## Running the end-to-end tests

The Cypress tests in `docs/cypress/e2e/` check the computed styles of the pages in `docs/cyp/`.

1. `cd` into the `docs/` directory and run `npm install`
1. Build the Bulma CSS used by the test pages: `npm run bulma-sass`
1. In a separate shell session, serve the docs: `jekyll serve --host 127.0.0.1 --port 4000`
1. Run the tests with `npm run cypress-run`, or open the Cypress app with `npm run cypress-open`

If you change anything in the Bulma Sass, run `npm run bulma-sass` again before re-running the tests.
