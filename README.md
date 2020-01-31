# [Bulma](https://bulma.io)

Bulma is a **modern CSS framework** based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

[![npm](https://img.shields.io/npm/v/bulma.svg)][npm-link]
[![npm](https://img.shields.io/npm/dm/bulma.svg)][npm-link]
[![](https://data.jsdelivr.com/v1/package/npm/bulma/badge)](https://www.jsdelivr.com/package/npm/bulma)
[![Awesome][awesome-badge]][awesome-link]
[![Join the chat at https://gitter.im/jgthms/bulma](https://badges.gitter.im/jgthms/bulma.svg)](https://gitter.im/jgthms/bulma)
[![Build Status](https://travis-ci.org/jgthms/bulma.svg?branch=master)](https://travis-ci.org/jgthms/bulma)

<a href="https://bulma.io"><img src="https://raw.githubusercontent.com/jgthms/bulma/master/docs/images/bulma-banner.png" alt="Bulma: a Flexbox CSS framework" style="max-width:100%;" width="600"></a>

## Quick install

Bulma is constantly in development! Try it out now:

### NPM

```sh
npm install bulma
```

**or**

### Yarn

```sh
yarn add bulma
```

### Bower

```sh
bower install bulma
```

### Import
After installation, you can import the CSS file into your project using this snippet:

```sh
import 'bulma/css/bulma.css'
```

### CDN

[https://www.jsdelivr.com/package/npm/bulma](https://www.jsdelivr.com/package/npm/bulma)

Feel free to raise an issue or submit a pull request.

## CSS only

Bulma is a **CSS** framework. As such, the sole output is a single CSS file: [bulma.css](https://github.com/jgthms/bulma/blob/master/css/bulma.css)

You can either use that file, "out of the box", or download the Sass source files to customize the [variables](https://bulma.io/documentation/overview/variables/).

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Bulma can be considered "environment agnostic": it's just the style layer on top of the logic.

## Browser Support

Bulma uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](https://caniuse.com/#feat=flexbox), Bulma is compatible with **recent** versions of:

* Chrome
* Edge
* Firefox
* Opera
* Safari

Internet Explorer (10+) is only partially supported.

## Documentation

The documentation resides in the [docs](docs) directory, and is built with the Ruby-based [Jekyll](https://jekyllrb.com/) tool.

Browse the [online documentation here.](https://bulma.io/documentation/overview/start/)

## Related projects

| Project                                                                              | Description                                                                            |
|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| [Bulma with Attribute Modules](https://github.com/j5bot/bulma-attribute-selectors)   | Adds support for attribute-based selectors                                             |
| [Bulma with Rails](https://github.com/joshuajansen/bulma-rails)                      | Integrates Bulma with the rails asset pipeline                                         |
| [Vue Admin (dead)](https://github.com/vue-bulma/vue-admin)                                  | Vue Admin framework powered by Bulma                                                   |
| [Bulmaswatch](https://github.com/jenil/bulmaswatch)                                  | Free themes for Bulma                                                                  |
| [Goldfish (read-only)](https://github.com/Caiyeon/goldfish)                                      | Vault UI with Bulma, Golang, and Vue Admin                                             |
| [ember-bulma](https://github.com/open-tux/ember-bulma)                               | Ember addon providing a collection of UI components for Bulma                          |
| [Bloomer](https://bloomer.js.org)                                                    | A set of React components for Bulma                                                    |
| [React-bulma](https://github.com/kulakowka/react-bulma)                              | React.js components for Bulma                                                          |
| [Buefy](https://buefy.github.io)                                                     | Lightweight UI components for Vue.js based on Bulma                                    |
| [vue-bulma-components](https://github.com/vouill/vue-bulma-components)               | Bulma components for Vue.js with straightforward syntax                                |
| [BulmaJS](https://github.com/VizuaaLOG/BulmaJS)                                      | Javascript integration for Bulma. Written in ES6 with a data-* API                     |
| [Bulma-modal-fx](https://github.com/postare/bulma-modal-fx)                          | A set of modal window effects with CSS transitions and animations for Bulma            |
| [Bulma Stylus](https://github.com/groenroos/bulma-stylus)                            | Up-to-date 1:1 translation to Stylus
| [Bulma.styl (read-only)](https://github.com/log1x/bulma.styl)                                    | 1:1 Stylus translation of Bulma 0.6.11                                                        |
| [elm-bulma](https://github.com/surprisetalk/elm-bulma)                               | Bulma + Elm                                                                            |
| [elm-bulma-classes](https://github.com/ahstro/elm-bulma-classes)                     | Bulma classes prepared for usage with Elm                                              |
| [Bulma Customizer](https://bulma-customizer.bstash.io/)                              | Bulma Customizer &#8211; Create your own **bespoke** Bulma build                       |
| [Fulma](https://fulma.github.io/Fulma/)                                       | Wrapper around Bulma for [fable-react](https://github.com/fable-compiler/fable-react)  |
| [Laravel Enso](https://github.com/laravel-enso/enso)                                 | SPA Admin Panel built with Bulma, VueJS and Laravel                                    |
| [Django Bulma](https://github.com/timonweb/django-bulma)                             | Integrates Bulma with Django                                                           |
| [Bulma Templates](https://github.com/dansup/bulma-templates)                         | Free Templates for Bulma                                                               |
| [React Bulma Components](https://github.com/couds/react-bulma-components)            | Another React wrap on React for Bulma.io                                               |
| [purescript-bulma](https://github.com/sectore/purescript-bulma)                      | PureScript bindings for Bulma                                                          |
| [Vue Datatable](https://github.com/laravel-enso/vuedatatable)                        | Bulma themed datatable based on Vue, Laravel & JSON templates                          |
| [bulma-fluent](https://mubaidr.github.io/bulma-fluent/)                              | Fluent Design Theme for Bulma inspired by Microsoft’s Fluent Design System             |
| [csskrt-csskrt](https://github.com/4d11/csskrt-csskrt)                               | Automatically add Bulma classes to HTML files                                          |
| [bulma-pagination-react](https://github.com/hipstersmoothie/bulma-pagination-react)  | Bulma pagination as a react component                                                  |
| [bulma-helpers](https://github.com/jmaczan/bulma-helpers)                            | Functional / Atomic CSS classes for Bulma                                              |
| [bulma-swatch-hook](https://github.com/hipstersmoothie/bulma-swatch-hook)            | Bulma swatches as a react hook and a component                                         |
| [BulmaWP (read-only)](https://github.com/tomhrtly/BulmaWP)                                       | Starter WordPress theme for Bulma                                                      |
| [Ralma](https://github.com/aldi/ralma)                                               | Stateless Ractive.js Components for Bulma                                              |
| [Django Simple Bulma](https://github.com/python-discord/django-simple-bulma)         | Lightweight integration of Bulma and Bulma-Extensions for your Django app              |
| [rbx](https://dfee.github.io/rbx)                                                    | Comprehensive React UI Framework written in TypeScript                                 |
| [Awesome Bulma Templates](https://github.com/aldi/awesome-bulma-templates)           | Free real-world Templates built with Bulma                                             |
| [Trunx](http://g14n.info/trunx)                                                      | Super Saiyan React components, son of awesome Bulma, implemented in TypeScript         |
| [@aybolit/bulma](https://github.com/web-padawan/aybolit/tree/master/packages/bulma)  | Web Components library inspired by Bulma and Bulma-extensions                          |
| [Drulma](https://www.drupal.org/project/drulma)                                      | Drupal theme for Bulma.                                                                |
| [Bulrush](https://github.com/textbook/bulrush)                                       | A Bulma-based Python Pelican blog theme                                                |
| [Bulma Variable Export](https://github.com/service-paradis/bulma-variables-export)                                       | Access Bulma Variables in Javascript/Typescript in project using Webpack                                                |
| [Bulmil](https://github.com/gomah/bulmil)                                       | An agnostic UI components library based on Web Components, made with Bulma & Stencil.                                                |
| [Svelte Bulma Components](https://github.com/elcobvg/svelte-bulma-components)                                       | Library of UI components to be used in [Svelte.js](https://svelte.technology/) or standalone.                                                |
| [Bulma Nunjucks Starterkit](https://github.com/benninkcorien/nunjucks-starter-kit)                                       | Starterkit for Nunjucks with Bulma.                                                |

## Copyright and license

Code copyright 2020 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).

[npm-link]: https://www.npmjs.com/package/bulma
[awesome-link]:  https://github.com/awesome-css-group/awesome-css
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
