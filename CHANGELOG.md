# Bulma Changelog

## 0.3.0

* Use `rem` and `em` (!)
* Fix Font Awesome icons in buttons (!)
* Fix message colors (!)
* Use `{% capture %}` to ensure same display as code snippet (!)

* Move variables to their own file
* Remove small tag
* Add `:focus` state
* Fix table
* Remove table `.is-icon` and `.is-link`
* Add `.content` table
* Fix inputs with icons
* Input icons require the `.icon` container
* Deprecate `.media-number`
* Fix `.level-item` height
* Fix `.menu` spacing
* Deprecate `.menu-nav`
* Add invert outlined buttons
* Fix `.nav`
* Fix `.pagination`
* Fix `.tabs`
* Fix `.panel`
* Fix `.delete`
* Add mixins documentation
* Add functions documentation

## 0.2.2

* Fix: remove multiple imports

## 0.2.1

* Fix: container flex
* Fix: nav-item flex
* Fix: media-number flex
* Fix: new brand colors

## 0.2.0

* Added: new branding
* Added: modularity
* Added: grid folder
* Added: .github folder

## 0.1.1

* Remove `flex: 1` shorthand

## 0.1.0

* Fix #227
* Fix #232
* Fix #242
* Fix #243
* Fix #228
* Fix #245
* Fix #246

## 0.0.28

* BREAKING: `.control.is-grouped` now uses `.control` elements as direct children
* Fix #220
* Fix #214
* Fix #210
* Fix #206
* Fix #122

## 0.0.27

* Fix: #217
* Fix: #213
* Fix: #209
* Fix: #205
* Fix: #204
* Fix: #81

## 0.0.26

* Added: `.modal-card`
* Added: display responsive utilites
* Added: `.nav-center`
* Added: `.tabs ul` left center right
* Changed: `.navbar` renamed to `.level`
* Changed: `.header` renamed to `.nav`
* Deprecated: `.header`
* Deprecated: `.navbar`
* Fixed: `.hero` layout

## 0.0.25

* Added: `utilities/controls.sass` and `elements/form.sass`
* Added: new responsive classes
* Added: white/black and light/dark colors
* Changed: `.tabs` need `.icon` now
* Changed: cdnjs link doesn't include version

## 0.0.24

### Added

* `is-mobile` for the navbar

### Removed

* removed border between sections. Use `<hr class="is-marginless">` now

### Updated

* restructured files
* added back `inline-flex` for controls and tags

### Removed

* test tiles

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
