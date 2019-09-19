---
title: "Automatic variables documentation"
layout: post
introduction: "Keeping the docs in sync"
color: "link"
name: "Automatic variables docs"
icon: "sync-alt"
---

Bulma is highly customizable because there are **415 Sass variables** across **28 files**.

More and more CSS values are transformed into Sass variables for easy customization. And each new Bulma feature is required to come with its own set of variables.

While providing these variables is necessary, it's only useful if developers are aware they exist! Keeping **in sync** the documentation and the source files used to be a manual process. It is now **automatic**, thanks to a script that parses the source files and outputs the numerous Sass variables as JSON data.

<figure>
  <img src="{{ site.url }}/images/blog/variables/json.png" alt="JSON variables" width="275" height="775">
</figure>

As an added bonus, each variable row in the docs comes with its **type** and its **computed value** (if applicable).

<figure>
  <img src="{{ site.url }}/images/blog/variables/variables-table.png" alt="Variables table" width="597" height="212">
</figure>
