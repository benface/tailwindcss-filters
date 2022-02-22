# ⛔️ DEPRECATED

Tailwind CSS 2.1+ have built-in `filter` and `backdrop-filter` utilities such as [`blur`](https://tailwindcss.com/docs/blur), [`grayscale`](https://tailwindcss.com/docs/grayscale), [`sepia`](https://tailwindcss.com/docs/sepia), etc. Please use them instead of this plugin. Thank you!

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
    filter: ['responsive'], // defaults to ['responsive']
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
