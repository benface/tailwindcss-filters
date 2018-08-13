const _ = require('lodash');

module.exports = ({
  variants = {},
  filters = {},
  backdropFilters = {},
} = {}) =>
  ({ e, addUtilities }) => {
    addUtilities(
      {
        ...Object.assign(
          {},
          ..._.map(filters, (value, name) => ({
            [`.filter-${e(name)}`]: { filter: value },
          })),
          ..._.map(backdropFilters, (value, name) => ({
            [`.backdrop-${e(name)}`]: { backdropFilter: value },
          })),
        ),
      },
      variants,
    );
  };
