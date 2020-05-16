const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = plugin(function({ theme, variants, e, addUtilities }) {
  const filterUtilities = _.fromPairs(
    _.map(theme('filter'), (value, modifier) => {
      return getPairs({
        modifier: modifier,
        filter: value,
        prefix: 'filter'
      });
    })
  );

  const backdropFilterUtilities = _.fromPairs(
    _.map(theme('backdropFilter'), (value, modifier) => {
      let args = {
        modifier: modifier,
        backdropFilter: value,
        prefix: 'backdrop'
      }
      return getPairs(args);
    })
  );
  
  function getPairs(args){
    const {prefix, modifier, ...value} = args;
      if(args.prefix === 'filter' && args.modifier.indexOf('(') !== -1){
        let duration = args.modifier.replace( /(^.*\(|\).*$)/g, '' );
        args.modifier = args.modifier.substring(0, args.modifier.indexOf('(')).trim();
        value['transition'] = `filter ${duration}ms linear`;
      } 
      return [
        `.${e(`${args.prefix}-${args.modifier}`)}`,
        value
      ]
  }

  addUtilities(filterUtilities, variants('filter'));
  addUtilities(backdropFilterUtilities, variants('backdropFilter'));
}, {
  theme: {
    filter: {},
    backdropFilter: {},
  },
  variants: {
    filter: ['responsive', 'hover'],
    backdropFilter: ['responsive'],
  },
});