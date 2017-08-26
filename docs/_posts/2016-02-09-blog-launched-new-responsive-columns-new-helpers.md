---
layout: post
title: "Blog launched, new responsive columns, new helpers"
introduction: "First blog post on the newly launched blog! It even has its own [RSS feed](/atom.xml) for those who still use that. This blog will be more frequently updated than the [newsletter](#newsletter), so you can subscribe to either or both, as they will be used for different purposes."
color: "danger"
name: "Launch!"
icon: "rocket"
---

First blog post on the newly launched blog! It even has its own [RSS feed](/atom.xml) for those who still use that. This blog will be more frequently updated than the [newsletter](#newsletter), so you can subscribe to either or both, as they will be used for different purposes.

### Columns on mobile too

By default, columns are only activated on **tablet** and **desktop**. If you want to use columns on mobile _too_, add the `is-mobile` modifier on the `columns` container.

{% highlight html %}
<div class="columns is-mobile">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <!-- etc. -->
</div>
{% endhighlight %}

### Responsive columns

You can now apply different **column size** for each **breakpoint**.

For example, let's say you want a column to take half the width on mobile, a third on tablet, and a quarter on desktop:

<div class="columns is-mobile">
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <p class="notification is-info">
      <code>is-half-mobile</code><br>
      <code>is-one-third-tablet</code><br>
      <code>is-one-quarter-desktop</code>
    </p>
  </div>
  <div class="column">
    <p class="notification is-success">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning">1</p>
  </div>
  <div class="column">
    <p class="notification is-success">1</p>
  </div>
  <div class="column">
    <p class="notification is-warning">1</p>
  </div>
</div>

{% highlight html %}
<div class="columns is-mobile">
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"></div>
  <!-- Other columns -->
</div>
{% endhighlight %}

<div class="message is-info">
  <div class="message-header">
    Info
  </div>
  <div class="message-body">
    If you use <strong>mobile</strong> modifiers on single <code>column</code> elements, make sure to use the <code>is-mobile</code> modifier on the <code>columns</code> container.
  </div>
</div>

### Multiline columns

By default, if you want to start a new **row**, you just need to close a `columns` container and open a new one.

But you can also add the `is-multiline` **modifier** on the `columns` container, and use **column size** modifiers (like `is-half` or `is-3`) to define size on multiple rows within the _same_ container.

<div class="columns is-multiline is-mobile">
  <div class="column is-one-quarter">
    <p class="notification is-info"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-success"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-warning"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-danger"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-half">
    <p class="notification is-info"><code>is-half</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-success"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-warning"><code>is-one-quarter</code></p>
  </div>
  <div class="column is-one-quarter">
    <p class="notification is-danger"><code>is-one-quarter</code></p>
  </div>
  <div class="column">
    <p class="notification is-info">Auto</p>
  </div>
</div>

{% highlight html %}
<div class="columns is-multiline is-mobile">
  <div class="column is-one-quarter"></div>
  <div class="column is-one-quarter"></div>
  <div class="column is-one-quarter"></div>
  <div class="column is-one-quarter"></div>
  <div class="column is-half"></div>
  <div class="column is-one-quarter"></div>
  <div class="column is-one-quarter"></div>
  <div class="column is-one-quarter"></div>
  <div class="column"></div>
</div>
{% endhighlight %}

### Helpers section

While modifiers are specific to each Bulma element, **helpers** are general utility classes that can be applied on almost _any_ element. Check out the new [helpers documentation](/documentation/modifiers/helpers/)!
