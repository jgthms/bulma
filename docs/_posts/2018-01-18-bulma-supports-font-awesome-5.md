---
title: "Bulma supports Font Awesome&nbsp;5"
layout: post
introduction: "No change required!"
color: "info"
name: "Font Awesome 5"
icon: "font-awesome"
icon_brand: true
---

Bulma is **icon library agnostic**: this means that you can use _any_ icon font library (like Font Awesome 4 or 5, Material Design Icons, Ionicons…) with Bulma's `icon` class.

As a result, **Bulma already supports Font Awesome 5**! 😃

Since the `icon` element is simply a **container** for any icon font *allowing the layout to reserve a spot for the icon while it loads), it supports any size of Font Awesome 4 and 5.

For the sake of being in sync with Bulma users, I've recently updated the website to actually use Font Awesome 5! The process of **migrating** from Font Awesome 4 to 5 is straightforward. You simply need to:

1. include Font Awesome 5 instead, [using the script tag](https://fontawesome.com/get-started)
2. replace `fa` classes with their `fas` and `fab` equivalents

That's it!

Check out the [icon documentation](/documentation/elements/icon/).
