# [Bulma](http://bulma.io)

[![npm](https://img.shields.io/npm/v/bulma.svg)](https://www.npmjs.com/package/bulma)
[![npm](https://img.shields.io/npm/dm/bulma.svg)](https://www.npmjs.com/package/bulma)
[![Join the chat at https://gitter.im/jgthms/bulma](https://badges.gitter.im/jgthms/bulma.svg)](https://gitter.im/jgthms/bulma)

Bulma is a modern CSS framework based on [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes).

[![Bulma: a Flexbox CSS framework](https://raw.githubusercontent.com/jgthms/bulma/master/images/bulma-banner.png)](http://bulma.io)

## Quick install

Bulma is in early but active development! Try it out now:

### NPM

```sh
npm install bulma
```

### Bower

```sh
bower install bulma
```

### CDN

[https://cdnjs.com/libraries/bulma](https://cdnjs.com/libraries/bulma)

Feel free to raise an issue or submit a pull request.

## CSS only

Bulma is a **CSS** framework. As such, the sole output is a single CSS file: [bulma.css](https://github.com/jgthms/bulma/blob/master/css/bulma.css)

You can either use that file, "out of the box", or download the Sass source files to customize the [variables](http://bulma.io/documentation/overview/variables/).

There is **no** JavaScript included. People generally want to use their own JS implementation (and usually already have one). Bulma can be considered "environment agnostic": it's just the style layer on top of the logic.

## Roadmap

Bulma keeps track of the upcoming fixes and features on Trello: [Bulma roadmap](https://trello.com/b/5Lzqejo3/bulma-roadmap)

It's more a tasklist than a roadmap, but it will give you an overview of where things are going!

## Documentation website

This repository is **only** for the Bulma source files.
The [website](http://bulma.io) (which includes the [documentation](http://bulma.io/documentation/overview/start/)) is in another repo: [https://github.com/jgthms/bulma-website](https://github.com/jgthms/bulma-website)

If you encounter a typo or a lack of documentation, submit an issue [there](https://github.com/jgthms/bulma-website/issues).

## Browser Support

Bulma uses [autoprefixer](https://github.com/postcss/autoprefixer) to make (most) Flexbox features compatible with earlier browser versions. According to [Can I use](http://caniuse.com/#feat=flexbox), Bulma is compatible with:

* Chrome
* Edge
* Firefox
* Internet Explorer (10+)
* Opera
* Safari

## Related projects

* Bulma with Attribute Modules: https://github.com/j5bot/bulma-attribute-selectors
* Bulma with Rails: https://github.com/joshuajansen/bulma-rails

## Copyright and license

Code copyright 2016 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).
