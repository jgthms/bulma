---
title: "Website redesign: clearer layout, easier navigation, better content, and much more!"
layout: post
introduction: "A brand new look"
color: "expo"
name: "Website redesign"
icon: "star"
featured: true
image: "9-OCsKoyQlk"
alt: "Swimming pool"
---

The Bulma website has been widely redesigned! There's been a lot of work, to say the least:

<figure>
  <img src="{{ site.url }}/images/blog/v7/files.png" alt="files" width="312" height="37">
  <br>
  <img src="{{ site.url }}/images/blog/v7/diff.png" alt="diff" width="167" height="38">
</figure>

Just see for yourself!

<div class="columns">
  <div class="column">
    <p class="has-text-centered has-text-grey-light">Before</p>
    <a href="{{ site.url }}/images/blog/v7/before.png">
      <img src="{{ site.url }}/images/blog/v7/before.png" alt="v7 website" width="1400" height="1200">
    </a>
  </div>
  <div class="column">
    <p class="has-text-centered has-text-grey-light">After</p>
    <a href="{{ site.url }}/images/blog/v7/after.png">
      <img src="{{ site.url }}/images/blog/v7/after.png" alt="v7 website" width="1400" height="1200">
    </a>
  </div>
</div>

{% include elements/anchor.html name="Navbar" %}

The **navbar** has been updated with a lighter markup and cleaner design:

<figure>
  <a href="{{ site.url }}/images/blog/v7/navbar.png">
    <img src="{{ site.url }}/images/blog/v7/navbar.png" alt="navbar" width="1080" height="84">
  </a>
</figure>

This doesn't affect the current navbars. There's actually a new modifier called `is-spaced` that was created for this new navbar. Documentation coming soon!

{% include elements/anchor.html name="Customize example" %}

On the homepage, there's a new [**customization** section with a live example](/#customize):

<figure>
  <a href="{{ site.url }}/#customize">
    <img src="{{ site.url }}/images/blog/v7/customize.png" alt="customize" width="492" height="582">
  </a>
</figure>

{% include elements/anchor.html name="Breadcrumb" %}

<figure>
  <a href="{{ site.url }}/images/blog/v7/breadcrumb.png">
    <img src="{{ site.url }}/images/blog/v7/breadcrumb.png" alt="breadcrumb" width="422" height="24">
  </a>
</figure>

A **breadcrumb** is now visible at the top of each page, to easily navigate up and down the hierarchy.

This has led to the creation of new **intermediate pages**:

* [documentation](/documentation)
* [documentation/modifiers](/documentation/modifiers)
* [documentation/columns](/documentation/columns)
* [documentation/layout](/documentation/layout)
* [documentation/form](/documentation/form)
* [documentation/elements](/documentation/elements)
* [documentation/components](/documentation/components)
* [more](/more)

{% include elements/anchor.html name="Links" %}

These intermediate pages have new **link boxes** that help dive into each sub-category:

<figure>
  <a href="{{ site.url }}/images/blog/v7/links.png">
    <img src="{{ site.url }}/images/blog/v7/links.png" alt="footer links" width="664" height="468">
  </a>
</figure>

{% include elements/anchor.html name="Previous/Next" %}

Next to the breadcrumb, you can easily navigate to the **sibling** pages with the **previous** and **next** links:

<figure>
  <a href="{{ site.url }}/images/blog/v7/prevnext.png">
    <img src="{{ site.url }}/images/blog/v7/prevnext.png" alt="prevnext buttons" width="48" height="24">
  </a>
</figure>

These links are also available at the bottom:

<figure>
  <a href="{{ site.url }}/images/blog/v7/prevnextbis.png">
    <img src="{{ site.url }}/images/blog/v7/prevnextbis.png" alt="prevnextbis buttons" width="664" height="58">
  </a>
</figure>

{% include elements/anchor.html name="Categories" %}

There's a new **sidebar** including a navigation menu with all the categories and sub-categories:

<figure>
  <a href="{{ site.url }}/images/blog/v7/categories.png">
    <img src="{{ site.url }}/images/blog/v7/categories.png" alt="categories menu" width="256" height="397">
  </a>
</figure>

{% include elements/anchor.html name="Scroll spy" %}

On some pages below the categories, you'll find a new menu called "On this page" which is actually a **scroll spy**:

<figure>
  <a href="{{ site.url }}/images/blog/v7/scrollspy.png">
    <img src="{{ site.url }}/images/blog/v7/scrollspy.png" alt="scrollspy menu" width="199" height="341">
  </a>
</figure>

{% include elements/anchor.html name="Footer" %}

The footer has been redesigned as well. Among other things, there's a **sitemap** available:

<figure>
  <a href="{{ site.url }}/images/blog/v7/footer.png">
    <img src="{{ site.url }}/images/blog/v7/footer.png" alt="footer links" width="984" height="302">
  </a>
</figure>

{% include elements/anchor.html name="Code" %}

The Bulma website is built with **Jekyll**. In the process of this redesign, the underlying code that helps maintain this website has been optimized and cleaned up as well.

This will help further updates to be easier.
