---
title: "Library of the week – Select2"
date: 2016-03-27
tags: [javascript, library, jquery, select2]
language: en
---

I'm starting a series about JavaScript and CSS libraries and frameworks. This week's pick is [Select2](https://select2.github.io/), a jQuery plugin that gives HTML `<select>` elements support for search, tokenization, remote data sources, and infinite scrolling.

## Installation

Load jQuery before the Select2 script. There are several ways to include the plugin's CSS and JavaScript.

* **Manual download.** You can download Select2 from [GitHub Releases](https://github.com/select2/select2/releases), though I recommend one of the other options below. At the time of writing, the latest release is [4.0.1](https://github.com/select2/select2/archive/4.0.1.tar.gz), from November 2015. Extract the archive and include `dist/css/select2.min.css` and `dist/js/select2.min.js` in your page. For the full build with additional modules, use `dist/js/select2.full.min.js`.

  ```html
  <link href="path/to/select2.min.css" rel="stylesheet" />
  <script src="path/to/select2.min.js"></script>
  ```

* **CDN.** Both [cdnjs](https://cdnjs.com/libraries/select2) and [jsDelivr](https://www.jsdelivr.com/projects/select2) host the library. This example loads it from cdnjs.

  ```html
  <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/css/select2.min.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/select2.min.js"></script>
  ```

* **npm.** To add Select2 as an [npm](https://www.npmjs.com/) dependency, run the command below. It installs the library in `node_modules/select2`.

  ```bash
  npm install select2 --save
  ```

* **Bower.** You can also install Select2 with [Bower](http://bower.io).

  ```bash
  bower install select2 --save
  ```

## Using Select2

Once the CSS and JavaScript are in place, initialize Select2 with its default settings.

```javascript
// Use the default options.
$('.select2').select2();
```

This enables the plugin on every select box with the `select2` class.

```html
<select class="select2"></select>
```

To customize the field, pass an options object to the initializer. For example, a placeholder tells the reader what to select.

```javascript
$('.select2').select2({
  placeholder: 'Select your country of birth'
});
```

For a field that accepts several values, add the `multiple` attribute. With `tags: true`, users can also enter their own values.

```javascript
$('#languages').select2({
  placeholder: 'Select your favorite languages',
  tags: true
});
```

```html
<select id="languages" multiple></select>
```

The `allowClear` option lets users clear their selection, including a value selected by default.

```javascript
$('.select2').select2({
  placeholder: 'Select your country of birth',
  allowClear: true
});
```

Select2 also picks up options defined in the HTML. Here, PHP is already selected when the field loads.

```html
<select class="select2">
  <option value="php" selected>PHP</option>
  <option value="c">C</option>
  <option value="java">Java</option>
</select>
```

You'll find more options in the [Select2 documentation](https://select2.github.io). You can try the library in the fiddle below.

<script async src="https://jsfiddle.net/gq327ed4/2/embed/"></script>

I hope to keep these tips coming. See you next time!
