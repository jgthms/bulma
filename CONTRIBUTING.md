Thanks for helping out! 😇

### Raising an issue

* Make sure the issue hasn't been raised yet
* Include **screenshots** and animated GIFs in your issue whenever possible
* Tag your issue accordingly: bug, enhancement, or question

### Submitting a Pull Request

* Include **screenshots** and animated GIFs in your pull request whenever possible
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally

### Bulma Sass styleguide

* **No semi-colons** `;` or **curly braces** `{` `}`
* **No camelCase**
* Use only **classes**
* Order the CSS properties **alphabetically**
* Order the CSS rule by
  * direct styles
  * nested tags
  * pseudo-classes
  * color modifiers
  * size modifers
  * modifiers
  * responsive styles
* Add appropriate one-line comments for each of these sections within a CSS rule
* **No trailing space**
* End files with a **newline**

```sass
.element
  @extend .something
  +mixin
  property: value
  span
    // ...
  div
    // ...
  .child
    // ...
  &:pseudo-class
    // ...
  // Colors
  @each $name, $pair in $colors
    // Loop
  // Sizes
  &.is-small
    // ...
  &.is-medium
    // ...
  &.is-large
    // ...
  // Modifiers (ordered alphabetically)
  &.has-icons
    // ...
  &.is-active
    // ...
  &.is-fullwidth
    // ...
  // Responsiveness
  +mobile
    // ...
  +tablet
    // ...
  +desktop
    // ...
```
