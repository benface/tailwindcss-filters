const _ = require('lodash');

module.exports = function() {
  return ({ theme, variants, e, addUtilities }) => {
    const defaultFilterTheme = {};
    const defaultFilterVariants = ['responsive'];
    const defaultBackdropFilterTheme = {};
    const defaultBackdropFilterVariants = ['responsive'];

    const filterTheme = theme('filter', defaultFilterTheme);
    const filterVariants = variants('filter', defaultFilterVariants);
    const backdropFilterTheme = theme('backdropFilter', defaultBackdropFilterTheme);
    const backdropFilterVariants = variants('backdropFilter', defaultBackdropFilterVariants);

    const filterUtilities = _.fromPairs(
      _.map(filterTheme, (value, modifier) => {
        return [
          `.${e(`filter-${modifier}`)}`,
          {
            filter: value,
          },
        ];
      })
    );

    const backdropFilterUtilities = _.fromPairs(
      _.map(backdropFilterTheme, (value, modifier) => {
        return [
          `.${e(`backdrop-${modifier}`)}`,
          {
            backdropFilter: value,
          },
        ];
      })
    );

    addUtilities(filterUtilities, filterVariants);
    addUtilities(backdropFilterUtilities, backdropFilterVariants);
  };
};
