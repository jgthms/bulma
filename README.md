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
    ```scss
    @import '~bulma-scss-components';
    @include applyMiniReset();    // applies style from "scss/base/minireset.scss"
    @include applyGenericRules(); // applies style from "scss/base/generic.scss"
    ```

## Themes

Themes work the same as with bulma themes. Just keep in mind that class names are now is `camelCase`.

If, for example, you want to add the `Cerulean` theme from [this repo](https://github.com/jenil/bulmaswatch/tree/gh-pages/cerulean), just do it as you would in bulma:

1. Import `variables`, `bulma-scss-components` and then the `overrides`
    ```scss
    @import "variables";
    @import "~bulma-scss-components";
    @import "overrides";
    ```
2. Go through the `variables` and `overrides` files to make sure you change class names to `camelCase` - examples:
    ```scss
    &.isHovered // changed from "&.is-hovered"
    and
    &.is#{pascalize($name)} // changed from "&.is-#{$name}"
    ```


## Copyright and license

[MIT](https://github.com/jgthms/bulma/blob/master/LICENSE).
