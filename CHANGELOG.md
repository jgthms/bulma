# Bulma Changelog

## 0.7.0

### New features

* New variables `$widescreen-enabled` and `$fullhd-enabled`: you can set them to `false` to disable each breakpoint
* New variables `$control-border-width` and `$button-border-width`
* 🎉 #1624 Add some common photography aspect ratios and portrait ratios
* 🎉 #1747 New `$custom-colors` and `$custom-shades` variable for adding your own colors and shades to Bulma's `$colors` and `$shades` maps respectively

### Improvements

* #1619 Add $card-header-background-color, $card-content-background-color and $card-footer-background-color to allow different background customization for card elements
* #1669 Add `.is-expanded` modifier to `.buttons.has-addons`
* #1628 Add `.has-background` helpers for block background colors, like `.has-text`
* #1767 Added minified bundle with cleancss

### Bug fixes

* #1778 Fix `is-text-right` precedence over `is-text-left-mobile`
* #1571 Fix position of delete button on `.tag`
* #1549 Implementing a simple version of the native sass percentage function
* #1707 Disable table hover in `.content` by default
* #1428 Fix `media-content` overflow

### Variable changes

#### Updated default values

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/utilities/initial-variables.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$gap</code>
        </td>
        <td>
          <code>32px</code>
        </td>
        <td>
          <code>64px</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$radius</code>
        </td>
        <td>
          <code>3px</code>
        </td>
        <td>
          <code>4px</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$radius-large</code>
        </td>
        <td>
          <code>5px</code>
        </td>
        <td>
          <code>6px</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/base/generic.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$hr-background-color</code>
        </td>
        <td>
          <code>$border</code>
        </td>
        <td>
          <code>$background</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$hr-height</code>
        </td>
        <td>
          <code>1px</code>
        </td>
        <td>
          <code>2px</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/elements/content.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$content-heading-weight</code>
        </td>
        <td>
          <code>$weight-normal</code>
        </td>
        <td>
          <code>$weight-semibold</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/components/message.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$message-header-padding</code>
        </td>
        <td>
          <code>0.5em 0.75em</code>
        </td>
        <td>
          <code>0.75em 1em</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$message-body-padding</code>
        </td>
        <td>
          <code>1em 1.25em</code>
        </td>
        <td>
          <code>1.25em 1.5em</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/components/navbar.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$navbar-item-hover-background-color</code>
        </td>
        <td>
          <code>$background</code>
        </td>
        <td>
          <code>$white-bis</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-dropdown-border-top</code>
        </td>
        <td>
          <code>1px solid $border</code>
        </td>
        <td>
          <code>2px solid $border</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-divider-background-color</code>
        </td>
        <td>
          <code>$border</code>
        </td>
        <td>
          <code>$background</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="3">
        File
        <code>sass/layout/footer.sass</code>
      </th>
    </tr>
    <tr>
      <th>Variable</th>
      <th>From</th>
      <th>To</th>
    </tr>

      <tr>
        <td>
          <code>$footer-background-color</code>
        </td>
        <td>
          <code>$background</code>
        </td>
        <td>
          <code>$white-bis</code>
        </td>
      </tr>

  </tbody>
</table>

#### New variables

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="2">
        File
        <code>sass/components/breadcrumb.sass</code>
      </th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>

      <tr>
        <td>
          <code>$breadcrumb-item-padding-vertical</code>
        </td>
        <td>
          <code>0</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$breadcrumb-item-padding-horizontal</code>
        </td>
        <td>
          <code>0.75em</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="2">
        File
        <code>sass/components/message.sass</code>
      </th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>

      <tr>
        <td>
          <code>$message-body-border-color</code>
        </td>
        <td>
          <code>$border</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$message-body-border-width</code>
        </td>
        <td>
          <code>0 0 0 4px</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$message-header-weight</code>
        </td>
        <td>
          <code>$weight-bold</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$message-header-body-border-width</code>
        </td>
        <td>
          <code>0</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="2">
        File
        <code>sass/components/navbar.sass</code>
      </th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>

      <tr>
        <td>
          <code>$navbar-box-shadow-size</code>
        </td>
        <td>
          <code>0 2px 0 0</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-box-shadow-color</code>
        </td>
        <td>
          <code>$background</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-padding-vertical</code>
        </td>
        <td>
          <code>1rem</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-padding-horizontal</code>
        </td>
        <td>
          <code>2rem</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$navbar-z</code>
        </td>
        <td>
          <code>30</code>
        </td>
      </tr>

  </tbody>
</table>

<table class="table is-bordered">
  <tbody>
    <tr>
      <th class="is-light" colspan="2">
        File
        <code>sass/elements/title.sass</code>
      </th>
    </tr>
    <tr>
      <th>Name</th>
      <th>Value</th>
    </tr>

      <tr>
        <td>
          <code>$title-line-height</code>
        </td>
        <td>
          <code>1.125</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$subtitle-line-height</code>
        </td>
        <td>
          <code>1.25</code>
        </td>
      </tr>

      <tr>
        <td>
          <code>$subtitle-negative-margin</code>
        </td>
        <td>
          <code>-1.25rem</code>
        </td>
      </tr>

  </tbody>
</table>

#### Removed variables

<table class="table is-bordered">
  <thead>
    <tr>
      <th>File</th>
      <th>Removed</th>
      <th>Replaced with</th>
    </tr>
  </thead>
  <tbody>

      <tr>
        <td>
          <code>sass/components/message.sass</code>
        </td>
        <td>
          <code>$message-body-border</code>
        </td>
        <td>

            <code>$message-body-border-color</code>

            <code>$message-body-border-width</code>

        </td>
      </tr>

  </tbody>
</table>

## 0.6.2

### New features

* 🎉 Rounded buttons, inputs, pagination and toggle tabs

### Improvements

* #1343 Add `sub` and `sup` title sizes
* #1452 New `.is-italic` helper

### Bug fixes

* #935 Bug dropdown in `hero` (primary) menu items not visible
* #1456 Fix customize documentation
* #1190 Add `$variable-columns` to disable `--columnGap`
* #1518 Fix spacing of the delete button in notification element
* #1569 Fix missing use of `$pagination-color` variable

## 0.6.1

### New features

* 🎉 [List of buttons](https://bulma.io/documentation/elements/button/#list-of-buttons)
* 🎉 #1235 Support for five column grid: `.is-one-fifth, .is-two-fifths, .is-three-fifths, .is-four-fifths`
* 🎉 #1287 New `.is-invisible` helper
* 🎉 #1255 New `.is-expanded` modifier for `navbar-item`
* 🎉 #1384 New `.is-centered` and `.is-right` modifiers for `tags`
* 🎉 #1383 New `.is-empty` modifier for `file`
* 🎉 #1380 Allow `.is-selected` class on `<td>` and `<th>` tags

### Improvements

* #987 Improve `tag > icon` spacing
* Improve `hamburger` alignment

### Bug fixes

* #1358 Fix indentation bug for .is-one-fifth
* #1356 SASS 3.5+ variable parsing compatibility allows only #{}
* #1342 Remove black line from progress bar in IE
* #1334 Fix progress bar colors in IE
* #1313 Fix Table `is-selected` and `is-hoverable` styling issue
* #963 Fix Delete Button Bug in iOS Safari

## 0.6.0

### Breaking changes

* The new `$link` color is part of the `$colors` map. As a result, `.button.is-link` is a colored button now. Use `.button.is-text` if you want the underlined button.
* The deprecated `variables.sass` file has been removed.
* The deprecated `nav.sass` file has been removed.

### New features

* #1236 `.table` hover effect is opt-in, by using the `.is-hoverable` modifier class
* #1254 `.dropdown` now supports `.is-up` modifier

### Improvements

* #1257 Include placeholder mixin in `=input`

The `$link` color is used instead of `$primary` in the following components:

<table>
  <tr>
    <th>Variable</th>
    <th>Old value</th>
    <th>New value</th>
  </tr>
  <tr>
    <td><code>$dropdown-item-active-color</code></td>
    <td><code>$primary-invert</code></td>
    <td><code>$link-invert</code></td>
  </tr>
  <tr>
    <td><code>$dropdown-item-active-background-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-hover-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-tab-active-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$navbar-dropdown-item-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-link-active-border-bottom-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-link-active-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-background-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-border-color</code></td>
    <td><code>$primary</code></td>
    <td><code>$link</code></td>
  </tr>
  <tr>
    <td><code>$tabs-toggle-link-active-color</code></td>
    <td><code>$primary-invert</code></td>
    <td><code>$link-invert</code></td>
  </tr>
</table>

### Issues closed

* #708 Import variables in mixins

## 0.5.3

### New features

* #1101 `.card-header-title` can be centered with `.is-centered`
* #1189 `.input` readonly and `.is-static`
* #1189 `.textarea` readonly

### Issues closed

* #1177 Fix `.message .tag` combination
* #1167 Fix `pre code`
* #1207 Fix `.breadcrumb` alignment

## 0.5.2

### New features

* #842 `navbar` color modifiers
* #331 Support for third party icons
* Added `$button-focus-box-shadow-size` and `$button-focus-box-shadow-color` for customization
* Added `$input-focus-box-shadow-size` and `$input-focus-box-shadow-color` for customization
* Navbar tabs

### Issues closed

* #1168 Undefined variable: `$navbar-item`
* #930 Remove `vertical-align: top` for icons
* #735 Font awesome custom `font-size`
* #395 Font awesome stacked icons
* #1152 Level-items not centered horizontally on mobile
* #1147 Add `text-size-adjust: 100%` to `html`
* #1106 `pagination` docs
* #1063 `$family-primary` customization

## 0.5.1

### New features

* 🎉 #280 [File upload element](https://bulma.io/documentation/form/file/)
* `$container-offset` variable to determine the `.container` breakpoints
* #1001 Text case helpers

### Issues closed

* #1030 Add `!important` to non responsive display helpers
* #1020 Customizing `.navbar-item img` max height
* #998 `.navbar-dropdown` with **right** alignment
* #877 `.pagination` isn't using `$pagination-background`
* #989 `navbar-brand` overflowing on mobile
* #975 Variable `$table-head-color` isn't used
* #964 Tabs sass file throwing error with `!important`
* #949 `.is-size-7` helper is missing

## 0.5.0

### New features

* 🎉 [List of tags](https://bulma.io/documentation/elements/tag/#list-of-tags)
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

* [Starter template](https://bulma.io/documentation/overview/start/#starter-template)
* [Colors page](https://bulma.io/documentation/overview/colors/)
* [Typography helpers](https://bulma.io/documentation/modifiers/typography-helpers/)
* **Meta** information for all elements and components
* **Variables** information for most elements and components

### Issues closed

* #909 `.dropdown` wrapping
* #938 `.is-fullwidth` removed from docs
* #900 Variable `.navbar-item` for hover+active background/color
* #902 `.navbar-item` color overrides

## 0.4.4

### New features

* New [dropdown button](https://bulma.io/documentation/components/dropdown/)!
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
* Add new `.is-spaced` modifier for titles and subtitles

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
