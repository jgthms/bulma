---
title: "Migrating to v0.7.0"
layout: post
introduction: "What has changed"
color: "success"
name: "Migrating to v0.7.0"
icon: "sync-alt"
---

## Updated default values

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

## New variables

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

## Removed variables

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
