# Filters Tailwind CSS Plugin

## Installation

```bash
npm install tailwindcss-filters
```

## Usage

```js
// In your Tailwind CSS config
{
  plugins: [
    require('tailwindcss-filters')({
      variants: ['responsive'],
      filters: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
      backdropFilters: {
        'none': 'none',
        'blur': 'blur(20px)',
        'grayscale': 'grayscale(100%)',
      },
    }),
  ],
}
```

This plugin generates the following utilities:

```css
/* configurable with the "filters" option */
.filter-[name] {
  filter: [value];
}

/* configurable with the "backdropFilters" option */
.backdrop-[name] {
  backdrop-filter: [value];
}
```