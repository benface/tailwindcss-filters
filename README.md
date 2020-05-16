# Filters Plugin for Tailwind CSS

## Requirements

This plugin requires Tailwind CSS 1.2 or later. If your project uses an older version of Tailwind, you should install the latest 2.x version of this plugin (`npm install tailwindcss-filters@2.x`).

## Installation

```bash
npm install tailwindcss-filters
```

## Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive', 'hover'], // defaults to ['responsive', 'hover']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
};
```

This plugin generates the following utilities:

```css
/* configurable with the "filter" theme object */
.filter-[key] {
  filter: [value];
}

/* configurable with the "backdropFilter" theme object */
.backdrop-[key] {
  backdrop-filter: [value];
}
```

### Hover

The following example shows how to apply the grayscale filter to a background image and a hover style that will set the filter to 'none' (showing the image in color):

````
<div class="filter-grayscale hover:filter-none" style="background-image: url(...)">...</div>
````

#### Transition
You can specify a CSS transition and set the transition duration like so:

```js
// tailwind.config.js
module.exports = {
  theme: {
    filter: {
      'none(400)': 'none', //400ms transition duration
      'grayscale(600)': 'grayscale(1)' //600ms transition duration
    },
    ...
  },
  ...
};
```