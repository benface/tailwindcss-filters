const plugin = require('./index.js');

let generatedUtilities = {};

plugin({
  filters: {
    'none': 'none',
    'blur': 'blur(5px)',
  },
  backdropFilters: {
    'none': 'none',
    'blur': 'blur(20px)',
    'grayscale': 'grayscale(100%)',
  },
})({
  e: value => value,
  addUtilities: (utilities, variants) => {
    generatedUtilities = utilities;
  },
});

console.log("generatedUtilities", generatedUtilities);
