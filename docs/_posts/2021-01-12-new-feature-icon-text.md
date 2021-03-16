---
title: "New feature: `.icon-text`"
layout: post
introduction: "An easy way to combine an `.icon` with text"
color: "primary"
name: "New feature: Icon Text"
icon: "star-of-life"
---

Bulma's `.icon` element has been around since its inception. It acts as a simple container for any **icon font**. And thanks to its fixed square dimensions, it provides the icon font time to load while preserving the space fo it.

From version `0.9.2`, a new `.icon-text` element will be available. It allows you to easily combine an `.icon` element with **text**. The purpose of this new feature is to preserve the correct **alignment** of both parts.

<div class="block has-text-centered py-6">
  <span class="icon-text">
    <span class="icon">
      <i class="fas fa-home"></i>
    </span>
    <span>Home</span>
  </span>
</div>

You can combine several icons in sequence:

<div class="block has-text-centered py-6">
  <span class="icon-text">
    <span class="icon">
      <i class="fas fa-train"></i>
    </span>
    <span>Paris</span>
    <span class="icon">
      <i class="fas fa-arrow-right"></i>
    </span>
    <span>Budapest</span>
    <span class="icon">
      <i class="fas fa-arrow-right"></i>
    </span>
    <span>Bucharest</span>
    <span class="icon">
      <i class="fas fa-arrow-right"></i>
    </span>
    <span>Istanbul</span>
    <span class="icon">
      <i class="fas fa-flag-checkered"></i>
    </span>
  </span>
</div>

See the [full `.icon-text` documentation](/documentation/elements/icon/#icon-text).
