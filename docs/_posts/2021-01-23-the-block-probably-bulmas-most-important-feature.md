---
title: 'The `.block`, probably Bulma’s most important feature'
layout: post
introduction: 'Automatic spacing for everything in Bulma'
color: 'danger'
name: 'The Bulma block'
icon: 'cube'
---

The Bulma `block` is a simple element but with a very powerful feature: it provides `1.5rem` margin at the bottom, if it's not the last child.

It exists as its own `.block` CSS class, but its properties are also used on **many other Bulma components**.

For example, if you were to combine a `notification`, and a `pagination`, they would be **automatically spaced evenly**:

<div class="block is-size-6" style="margin-left: auto; margin-right: auto; max-width: 80%; padding: 1.5rem;">
  <p class="title mb-5">Newsletter</p>

  <div class="notification is-success">
    451 new subscribers this month.
  </div>

  <table class="table mb-5 is-bordered is-striped is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alex</td>
        <td>alex.smith@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>sam.rogers@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Luke</td>
        <td>hello.luke@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Eli</td>
        <td>eli.larry@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Dan</td>
        <td>dan.danny@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
    </tbody>
  </table>

  <nav class="pagination" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list ml-0 mt-0">
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 1">1</a>
      </li>
      <li class="mt-0">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li class="mt-0">
        <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
      <li class="mt-0">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 86">86</a>
      </li>
    </ul>
  </nav>
</div>

For comparison, if there was no spacing, here's what they would look like:

<div class="block is-size-6" style="margin-left: auto; margin-right: auto; max-width: 80%; padding: 1.5rem;">
  <p class="title mb-0">Newsletter</p>

  <div class="notification is-success mb-0">
    451 new subscribers this month.
  </div>

  <table class="table is-bordered is-striped is-hoverable is-fullwidth mb-0">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alex</td>
        <td>alex.smith@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Sam</td>
        <td>sam.rogers@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Luke</td>
        <td>hello.luke@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Eli</td>
        <td>eli.larry@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
      <tr>
        <td>Dan</td>
        <td>dan.danny@example.com</td>
        <td><a>Edit</a> · <a>Delete</a></td>
      </tr>
    </tbody>
  </table>

  <nav class="pagination mb-0" role="navigation" aria-label="pagination">
    <a class="pagination-previous">Previous</a>
    <a class="pagination-next">Next page</a>
    <ul class="pagination-list ml-0 mt-0">
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 1">1</a>
      </li>
      <li class="mt-0">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 45">45</a>
      </li>
      <li class="mt-0">
        <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 47">47</a>
      </li>
      <li class="mt-0">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li class="mt-0">
        <a class="pagination-link" aria-label="Goto page 86">86</a>
      </li>
    </ul>
  </nav>
</div>

This `block` element has always existed; only recently has there been a <a href="/documentation/elements/block/">dedicated documentation page</a>.
