# [BLACK LIVES MATTER](https://blacklivesmatters.carrd.co)

### Be aware. Be angry. Do better. Demand change. Show your support any way you can. Click on the link above to find protests, petitions, and other ways to help. DO NOT LET IT GO SILENT.

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
