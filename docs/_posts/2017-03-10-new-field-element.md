---
layout: post
title: "New field element (for better controls)"
published: true
introduction: "<p>The <code>.control</code> element has been a very versatile container for form controls. But it came at a cost: it was difficult to combine its <strong>block</strong> characteristics with its <strong>inline</strong> variations.</p>"
---

**TL;DR: there's a new `.field` container, and `.control` has been re-purposed.**

Since the beginning, the `.control` has been a very **versatile** element that allowed:

* to **space** controls vertically
* to include an **icon** alongside inputs, buttons, textareas...
* to append a **loading spinner**
* to create **horizontal forms**
* to create **control addons**
* to create **control groups**

## The problem

The `.control` element acted as both a _block_ container (for spacing, for other controls in a horizontal form), but also an _inline_ container (for adding an icon, a loader, an addon, and grouping).
It led to issues where you couldn't:

* add a help text horizontally
* add multiple icons or loaders in a group of controls
* add a different icon on addons

## The solution

The new `.field` element becomes the **block** container for `.control` elements. As a result, it inherits the `.has-addons`, `.is-grouped`, and `.is-horizontal` modifiers.

Furthermore `.control` element can only contain a `.button`, `.input`, `.select`, or `.textarea`, and eventually a `.icon`. It can **no longer** contain a `.help` element or other `.control`.

But it allows more elaborate designs.

{% highlight sass %}
// Before
.control
  .has-addons
  .has-icon
  .is-grouped
  .is-horizontal
  .is-loading

// After
.control
  .has-icon
  .is-loading
.field
  .has-addons
  .is-grouped
  .is-horizontal
.field-label
.field-body
{% endhighlight %}

{% highlight html %}
<!-- Before -->
<label class="label">Username</label>
<p class="control has-icon has-icon-right">
  <input class="input is-success" type="text" placeholder="Text input" value="bulma">
  <span class="icon is-small">
    <i class="fa fa-check"></i>
  </span>
  <span class="help is-success">This username is available</span>
</p>

<!-- After -->
<div class="field">
  <label class="label">Username</label>
  <p class="control has-icon has-icon-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small">
      <i class="fa fa-check"></i>
    </span>
  </p>
  <p class="help is-success">This username is available</p>
</div>
{% endhighlight %}

## Examples

Addons with multiple icons or states.

<div class="field is-grouped">
  <p class="control is-expanded has-icon">
    <input class="input is-success" type="text" placeholder="Username" value="alexsmith">
    <span class="icon is-small">
      <i class="fa fa-check"></i>
    </span>
  </p>
  <p class="control is-expanded has-icon">
    <input class="input is-warning" type="email" placeholder="Email" value="alex@smith.com">
    <span class="icon is-small">
      <i class="fa fa-warning"></i>
    </span>
  </p>
  <p class="control is-expanded is-loading">
    <input class="input" type="email" placeholder="Name">
  </p>
</div>

Horizontal form with help text

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Name">
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icon has-icon-right">
        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span class="icon is-small">
          <i class="fa fa-check"></i>
        </span>
      </p>
      <p class="help is-success">This email is correct</p>
    </div>
  </div>
</div>
