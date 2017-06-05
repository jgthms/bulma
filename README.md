# Bulma-SCSS-Components - fork of [Bulma](http://bulma.io)

This fork of Bulma aims to deliver component-oriented scss styling. This means no rules get applied on import of this package, which is ideal for component-oriented frameworks such as React and Angular.

Checkout the original project at [their github repo](https://github.com/jgthms/bulma).

## Installation

```sh
npm install bulma-scss-components
```

## Usage

Usage of this package is the exact same as the usage of Bulma. Differences are:

- classes are all `camelCase`
- added camelization and pascalization functions (`scss/utilities/strings.scss`)
- no applied style on import - i.e. you need to run the following lines on **one** of your style files (typically the `index.scss` file):
```
@import '~bulma-scss-components';
@include applyMiniReset();    // applies style from "scss/base/minireset.scss"
@include applyGenericRules(); // applies style from "scss/base/generic.scss"
```

## Copyright and license

[MIT](https://github.com/jgthms/bulma/blob/master/LICENSE).
