---
title: "Migrating to v0.7.0"
layout: post
introduction: "What has changed"
color: "success"
name: "Migrating to v0.7.0"
icon: "angle-double-up"
---

A new major Bulma update is out: [v0.7.0](#)!

While this update is mainly focused on a massive [website redesign](/2018/04/13/website-redesign/), it also includes a few bug fixes, some new features, and some variable changes.

These variable changes are documented here, so you can edit or revert them if needed.

{% include elements/anchor.html name="Updated default values" %}

{% for item in site.data.blog.migratingv070.updated %}
  <table class="table is-bordered">
    <tbody>
      <tr>
        <th class="is-light" colspan="3">
          File
          <code>{{ item.file }}</code>
        </th>
      </tr>
      <tr>
        <th>Variable</th>
        <th>From</th>
        <th>To</th>
      </tr>
      {% for change in item.changes %}
        <tr>
          <td>
            <code>{{ change.variable }}</code>
          </td>
          <td>
            <code>{{ change.from }}</code>
          </td>
          <td>
            <code>{{ change.to }}</code>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% endfor %}

{% include elements/anchor.html name="New variables" %}

{% for item in site.data.blog.migratingv070.new %}
  <table class="table is-bordered">
    <tbody>
      <tr>
        <th class="is-light" colspan="2">
          File
          <code>{{ item.file }}</code>
        </th>
      </tr>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      {% for newcomer in item.newcomers %}
        <tr>
          <td>
            <code>{{ newcomer.name }}</code>
          </td>
          <td>
            <code>{{ newcomer.value }}</code>
          </td>
        </tr>
      {% endfor %}
    </tbody>
  </table>
{% endfor %}

{% include elements/anchor.html name="Removed variables" %}

<table class="table is-bordered">
  <thead>
    <tr>
      <th>File</th>
      <th>Removed</th>
      <th>Replaced with</th>
    </tr>
  </thead>
  <tbody>
    {% for item in site.data.blog.migratingv070.removed %}
      <tr>
        <td>
          <code>{{ item.file }}</code>
        </td>
        <td>
          <code>{{ item.before }}</code>
        </td>
        <td>
          {% for newcomer in item.after %}
            <code>{{ newcomer }}</code>
          {% endfor %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>
