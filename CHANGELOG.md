# Bulma Changelog

## 0.0.23

### BREAKING

* `bulma` folder renamed to `sass` to avoid the redundant `bulma/bulma` path
* `variables.sass` moved to `/utilities`
* almost everything is singular now
* **elements** only have one class
* **components** have at least one sub-class
* `.content` moved to elements
* `.table` moved to elements
* `.message` moved to components
* `.table-icon`, `.table-link`, `.table-narrow` are now called `.is-icon`, `.is-link`, `.is-narrow`

### Added

* all variables are now `!default` so you can set your custom variables before importing Bulma

## 0.0.22

### Fixed

* links in hero subtitle

## 0.0.21

### Added

* `.column.is-narrow` to make a column `flex: none`

## 0.0.20

### Added

* `.has-icon` support for different `.input` sizes

## 0.0.19

### NEW!!!

* `.tile`

### BREAKING

* `.is-third` renamed to `.is-one-third`
* `.is-quarter` renamed to `.is-one-quarter`

### Added

* `.is-two-thirds`
* `.is-three-quarters`

### Changed

* `.delete` in `.tag` has no red

## 0.0.18

### BREAKING

* `.is-text-*` renamed to `.has-text-*`
* removed `.is-fullwidth` helper

### Added

* **small tag**: `.tag.is-small`
* 12th column classes
* `*-full` column classes
* `$family-code`

### Fixed

* disabled input with element
* `.table` last row with `th`
* `.card` color in `.hero`
* `.columns.is-gapless`

### Removed

* removed `box-shadow` from `.tag`
* custom checkboxes and radio buttons

### Updated

* `.tag` uses `display: inline-flex` now

## 0.0.17

### Added

* **pagination**: `.pagination`
* **horizontal forms**: `.control.is-horizontal`
* **help** text for form controls: `.help`
* **progress bars**: `.progress`

### Updated

* `.button` uses `display: inline-flex` now
* `.button` needs an `.icon` now
* `.control.is-grouped` renamed to `.control.has-addons`
* `.control.is-inline` renamed to `.control.is-grouped`

### Removed

* **helpers** `.is-inline` and `.is-block`
