# Filters Plugin for Tailwind CSS

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
