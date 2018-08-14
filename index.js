const _ = require('lodash');

module.exports = ({
  variants = {},
  filters = {},
  backdropFilters = {},
} = {}) => ({ e, addUtilities }) => {
  addUtilities(
    {
      ...Object.assign(
        {},
        ..._.map(filters, (value, name) => ({
          [`.${e(`filter-${name}`)}`]: { filter: value },
        })),
        ..._.map(backdropFilters, (value, name) => ({
          [`.${e(`backdrop-${name}`)}`]: { backdropFilter: value },
        })),
      ),
    },
    variants,
  );
};
