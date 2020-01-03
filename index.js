const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = plugin(function({ theme, variants, e, addUtilities }) {
  const filterUtilities = _.fromPairs(
    _.map(theme('filter'), (value, modifier) => {
      return [
        `.${e(`filter-${modifier}`)}`,
        {
          filter: value,
        },
      ];
    })
  );

  const backdropFilterUtilities = _.fromPairs(
    _.map(theme('backdropFilter'), (value, modifier) => {
      return [
        `.${e(`backdrop-${modifier}`)}`,
        {
          backdropFilter: value,
        },
      ];
    })
  );

  addUtilities(filterUtilities, variants('filter'));
  addUtilities(backdropFilterUtilities, variants('backdropFilter'));
}, {
  theme: {
    filter: {},
    backdropFilter: {},
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
});
