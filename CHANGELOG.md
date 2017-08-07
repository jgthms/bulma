# Bulma Changelog

## 0.5.1

### New features

* 🎉 #280 [File upload element](http://bulma.io/documentation/form/file/)
* `$container-offset` variable to determine the `.container` breakpoints
* #1001 Text case helpers

### Issues closed

* #1030 Add `!importnant` to non responsive display helpers
* #1020 Customizing `.navbar-item img` max height
* #998 `.navbar-dropdown` with **right** alignment
* #877 `.pagination` isn't using `$pagination-background`
* #989 `navbar-brand` overflowing on mobile
* #975 Variable `$table-head-color` isn't used
* #964 Tabs sass file throwing error with `!important`
* #949 `.is-size-7` helper is missing

## 0.5.0

### New features

* 🎉 [List of tags](http://bulma.io/documentation/elements/tag/#list-of-tags)
* New **variable naming system**: `component`-`subcomponent`-`state`-`property`
* Improved **customization** thanks to new set of variables
* #934 New `.is-shadowless` helper

Variable name changes (mostly appending `-color`):

<table>
<tr><th>From</th><th>To</th></tr>
<tr><td><code>$card</code></td><td><code>$card-color</code></td></tr>
<tr><td><code>$card-background</code></td><td><code>$card-background-color</code></td></tr>
<tr><td><code>$card-header</code></td><td><code>$card-header-color</code></td></tr>
<tr><td><code>$dropdown-item</code></td><td><code>$dropdown-item-color</code></td></tr>
<tr><td><code>$dropdown-content-background</code></td><td><code>$dropdown-content-background-color</code></td></tr>
<tr><td><code>$dropdown-item-hover-background</code></td><td><code>$dropdown-item-hover-background-color</code></td></tr>
<tr><td><code>$dropdown-item-hover</code></td><td><code>$dropdown-item-hover-color</code></td></tr>
<tr><td><code>$dropdown-item-active-background</code></td><td><code>$dropdown-item-active-background-color</code></td></tr>
<tr><td><code>$dropdown-item-active</code></td><td><code>$dropdown-item-active-color</code></td></tr>
<tr><td><code>$dropdown-divider-background</code></td><td><code>$dropdown-divider-background-color</code></td></tr>
<tr><td><code>$menu-item</code></td><td><code>$menu-item-color</code></td></tr>
<tr><td><code>$menu-item-hover</code></td><td><code>$menu-item-hover-color</code></td></tr>
<tr><td><code>$menu-item-hover-background</code></td><td><code>$menu-item-hover-background-color</code></td></tr>
<tr><td><code>$menu-item-active</code></td><td><code>$menu-item-active-color</code></td></tr>
<tr><td><code>$menu-item-active-background</code></td><td><code>$menu-item-active-background-color</code></td></tr>
<tr><td><code>$menu-label</code></td><td><code>$menu-label-color</code></td></tr>
<tr><td><code>$message-background</code></td><td><code>$message-background-color</code></td></tr>
<tr><td><code>$message-header-background</code></td><td><code>$message-header-background-color</code></td></tr>
<tr><td><code>$navbar-background</code></td><td><code>$navbar-background-color</code></td></tr>
<tr><td><code>$navbar-item</code></td><td><code>$navbar-item-color</code></td></tr>
<tr><td><code>$navbar-item-hover</code></td><td><code>$navbar-item-hover-color</code></td></tr>
<tr><td><code>$navbar-item-hover-background</code></td><td><code>$navbar-item-hover-background-color</code></td></tr>
<tr><td><code>$navbar-item-active</code></td><td><code>$navbar-item-active-color</code></td></tr>
<tr><td><code>$navbar-item-active-background</code></td><td><code>$navbar-item-active-background-color</code></td></tr>
<tr><td><code>$navbar-tab-hover-background</code></td><td><code>$navbar-tab-hover-background-color</code></td></tr>
<tr><td><code>$navbar-tab-hover-border-bottom</code></td><td><code>$navbar-tab-hover-border-bottom-color</code></td></tr>
<tr><td><code>$navbar-tab-active</code></td><td><code>$navbar-tab-active-color</code></td></tr>
<tr><td><code>$navbar-tab-active-background</code></td><td><code>$navbar-tab-active-background-color</code></td></tr>
<tr><td><code>$navbar-divider-background</code></td><td><code>$navbar-divider-background-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-hover</code></td><td><code>$navbar-dropdown-item-hover-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-hover-background</code></td><td><code>$navbar-dropdown-item-hover-background-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-active</code></td><td><code>$navbar-dropdown-item-active-color</code></td></tr>
<tr><td><code>$navbar-dropdown-item-active-background</code></td><td><code>$navbar-dropdown-item-active-background-color</code></td></tr>
<tr><td><code>$pagination</code></td><td><code>$pagination-color</code></td></tr>
<tr><td><code>$pagination-hover</code></td><td><code>$pagination-hover-color</code></td></tr>
<tr><td><code>$pagination-hover-border</code></td><td><code>$pagination-hover-border-color</code></td></tr>
<tr><td><code>$pagination-focus</code></td><td><code>$pagination-focus-color</code></td></tr>
<tr><td><code>$pagination-focus-border</code></td><td><code>$pagination-focus-border-color</code></td></tr>
<tr><td><code>$pagination-active</code></td><td><code>$pagination-active-color</code></td></tr>
<tr><td><code>$pagination-active-border</code></td><td><code>$pagination-active-border-color</code></td></tr>
<tr><td><code>$pagination-disabled</code></td><td><code>$pagination-disabled-color</code></td></tr>
<tr><td><code>$pagination-disabled-background</code></td><td><code>$pagination-disabled-background-color</code></td></tr>
<tr><td><code>$pagination-disabled-border</code></td><td><code>$pagination-disabled-border-color</code></td></tr>
<tr><td><code>$pagination-current</code></td><td><code>$pagination-current-color</code></td></tr>
<tr><td><code>$pagination-current-background</code></td><td><code>$pagination-current-background-color</code></td></tr>
<tr><td><code>$pagination-current-border</code></td><td><code>$pagination-current-border-color</code></td></tr>
<tr><td><code>$pagination-ellipsis</code></td><td><code>$pagination-ellipsis-color</code></td></tr>
<tr><td><code>$box</code></td><td><code>$box-color</code></td></tr>
<tr><td><code>$box-background</code></td><td><code>$box-background-color</code></td></tr>
<tr><td><code>$button</code></td><td><code>$button-color</code></td></tr>
<tr><td><code>$button-background</code></td><td><code>$button-background-color</code></td></tr>
<tr><td><code>$button-border</code></td><td><code>$button-border-color</code></td></tr>
<tr><td><code>$button-link</code></td><td><code>$button-link-color</code></td></tr>
<tr><td><code>$button-link-hover-background</code></td><td><code>$button-link-hover-background-color</code></td></tr>
<tr><td><code>$button-link-hover</code></td><td><code>$button-link-hover-color</code></td></tr>
<tr><td><code>$button-disabled-background</code></td><td><code>$button-disabled-background-color</code></td></tr>
<tr><td><code>$button-disabled-border</code></td><td><code>$button-disabled-border-color</code></td></tr>
<tr><td><code>$button-static</code></td><td><code>$button-static-color</code></td></tr>
<tr><td><code>$button-static-background</code></td><td><code>$button-static-background-color</code></td></tr>
<tr><td><code>$button-static-border</code></td><td><code>$button-static-border-color</code></td></tr>
<tr><td><code>$input</code></td><td><code>$input-color</code></td></tr>
<tr><td><code>$input-background</code></td><td><code>$input-background-color</code></td></tr>
<tr><td><code>$input-border</code></td><td><code>$input-border-color</code></td></tr>
<tr><td><code>$input-hover</code></td><td><code>$input-hover-color</code></td></tr>
<tr><td><code>$input-hover-border</code></td><td><code>$input-hover-border-color</code></td></tr>
<tr><td><code>$input-focus</code></td><td><code>$input-focus-color</code></td></tr>
<tr><td><code>$input-focus-border</code></td><td><code>$input-focus-border-color</code></td></tr>
<tr><td><code>$input-disabled</code></td><td><code>$input-disabled-color</code></td></tr>
<tr><td><code>$input-disabled-background</code></td><td><code>$input-disabled-background-color</code></td></tr>
<tr><td><code>$input-disabled-border</code></td><td><code>$input-disabled-border-color</code></td></tr>
<tr><td><code>$input-icon</code></td><td><code>$input-icon-color</code></td></tr>
<tr><td><code>$input-icon-active</code></td><td><code>$input-icon-active-color</code></td></tr>
<tr><td><code>$title</code></td><td><code>$title-color</code></td></tr>
<tr><td><code>$subtitle</code></td><td><code>$subtitle-color</code></td></tr>
<tr><td><code>$card-footer-border</code></td><td><code>$card-footer-border-top</code></td></tr>
<tr><td><code>$menu-list-border</code></td><td><code>$menu-list-border-left</code></td></tr>
<tr><td><code>$navbar-tab-hover-border</code></td><td><code>$navbar-tab-hover-border-bottom-color</code></td></tr>
<tr><td><code>$navbar-tab-active-border</code></td><td><code>$navbar-tab-active-border-bottom</code></td></tr>
<tr><td><code>$table-border</code></td><td><code>$table-cell-border</code></td></tr>
<tr><td><code>$table-row-even-background</code></td><td><code>$table-striped-row-even-background-color</code></td></tr>
<tr><td><code>$table-row-even-hover-background</code></td><td><code>$table-striped-row-even-hover-background-color</code></td></tr>
</table>

### Improved documentation

* [Starter template](http://bulma.io/documentation/overview/start/#starter-template)
* [Colors page](http://bulma.io/documentation/overview/colors/)
* [Typography helpers](http://bulma.io/documentation/modifiers/typography-helpers/)
* **Meta** information for all elements and components
* **Variables** information for most elements and components

### Issues closed

* #909 `.dropdown` wrapping
* #938 `.is-fullwidth` removed from docs
* #900 Variable `.navbar-item` for hover+active background/color
* #902 `.navbar-item` color overrides

## 0.4.4

### New features

* New [dropdown button](http://bulma.io/documentation/components/dropdown/)!
* The breakpoints and `.container` **gap** can be customized with the new `$gap` variable
* The `.container` has 2 new modifiers: `.is-widescreen` and `.is-fullhd`

### Issues closed

* Fix #26 `.textarea` element will honors `[rows]` attribute
* Fix #887 `body` scrollbar
* Fix #715 `.help` class behaviour in horizontal form `is-grouped` field
* Fix #842 Adding modifiers in `navbar`
* Fix #841 `.container` as direct child of `.navbar` moves `.navbar-menu` below `.navbar-brand`
* Fix #861 Box in hero as text and background white
* Fix #852 charset and version number
* Fix #856 JavaScript `.nav-burger` example
* Fix #821 Notification strong color

## 0.4.3

### New features

* New navbar with dropdown support
* Add new feature: Breadcrumb component (#632) @vinialbano
* Add Bloomer to README.md (#787) @AlgusDark
* Add responsive is-*-touch tags for .column sizes (#780) @tom-rb
* Adding 'is-hidden' to helpers in docs (#798) @aheuermann
* Add figure/figcaption as content element (#807) @werthen
* Add <sup> and <sub> support to content (#808) @werthen
* Add re-bulma and react-bulma (#809) @kulakowka
* Add is-halfheight to hero (#783) @felipeas
* Added a related project with Golang backend (#784) @Caiyeon

### Issues closed

* Fix #827 Breadcrumb and Navbar in docs
* Fix #824 Code examples broken because of `text-align: center`
* Fix #820 Loading spinner resizes with controls
* Fix #819 Remove `height: auto` from media elements
* Fix #790 Documentation typo
* Fix #814 Make use of +fullhd mixin for columns @Saboteur777
* Fix #781 Add min/max height/width to delete class size modifiers @ZackWard
* Fix #391 Section docs update

## 0.4.2

* Fix #728 selected row on striped table
* Fix #747 remove flex-shrink for is-expanded
* Fix #702 add icons support for select dropdown
* Fix #712 delete button as flexbox item
* Fix #759 static button

## 0.4.1

* Fix #568 max-width container
* Fix #589 notification delete
* Fix #272 nav-right without nav-menu
* Fix #616 hero and notification buttons
* Fix #607 has-addons z-index
* Feature #586 select color modifiers
* Fix #537 -ms-expand
* Fix #578 better `+center` mixin
* Fix #565 `dl` styles
* Fix #389 `pre` `margin-bottom`
* Fix #484 icon alignment
* Fix #506 bold nav menu
* Fix #581 nav container
* Fix #512 nav grouped buttons
* Fix #605 container example
* Fix #458 select expanded
* Fix #403 separate animations
* Fix #637 customize Bulma
* Fix #584 loading select
* Fix #571 control height
* Fix #634 is-grouped control
* Fix #676 checkbox/radio wrapping
* Feature #479 has-icons placement
* Fix #442 selected table row
* Fix #187 add customize page
* Fix #449 columns negative horizontal margin
* Fix #399 pagination wrapping
* Fix #227 color keys as strings

## 0.4.0

* **Default font-size is 16px**
* **New `.field` element ; `.control` repurposed**
* **New `.pagination` sizes**
* **New `$fullhd` breakpoint (1344px)**

* Remove monospace named fonts
* Remove icon spacing logic
* Split icon container dimensions and icon size
* Fix delete button by using pixels instead of (r)em
* Fix level on mobile
* Add new `.is-spaced` modifer for titles and subtitles

* Fix #487
* Fix #489
* Fix #502
* Fix #514
* Fix #524
* Fix #536

## 0.3.2

* Fix #478

## 0.3.1

* Fix #441
* Fix #443

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
