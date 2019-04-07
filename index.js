const _ = require('lodash');

module.exports = function() {
  return ({ config, e, addUtilities }) => {
    const defaultFilterTheme = {};
    const defaultFilterVariants = ['responsive'];
    const defaultBackdropFilterTheme = {};
    const defaultBackdropFilterVariants = ['responsive'];

    const filterUtilities = _.fromPairs(
      _.map(config('theme.filter', defaultFilterTheme), (value, modifier) => {
        return [
          `.${e(`filter-${modifier}`)}`,
          {
            filter: value,
          },
        ];
      })
    );

    const backdropFilterUtilities = _.fromPairs(
      _.map(config('theme.backdropFilter', defaultBackdropFilterTheme), (value, modifier) => {
        return [
          `.${e(`backdrop-${modifier}`)}`,
          {
            backdropFilter: value,
          },
        ];
      })
    );

    addUtilities(filterUtilities, config('variants.filter', defaultFilterVariants));
    addUtilities(backdropFilterUtilities, config('variants.backdropFilter', defaultBackdropFilterVariants));
  };
};
