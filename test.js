const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const defaultConfig = require('tailwindcss/defaultConfig')();
const filtersPlugin = require('./index.js');

const disabledModules = {};
Object.keys(defaultConfig.modules).forEach(module => {
  disabledModules[module] = false;
});

const generatePluginCss = (options = {}) => {
  return postcss(tailwindcss({
    modules: disabledModules,
    plugins: [filtersPlugin(options)],
  })).process('@tailwind utilities;', {
    from: undefined,
  }).then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('options are not required', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(``);
  });
});

test('all the options are working as they should', () => {
  return generatePluginCss({
    filters: {
      'none': 'none',
      'blur': 'blur(5px)',
    },
    backdropFilters: {
      'none': 'none',
      'blur': 'blur(20px)',
      'grayscale': 'grayscale(100%)',
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .filter-none {
        filter: none;
      }
      .filter-blur {
        filter: blur(5px);
      }
      .backdrop-none {
        backdrop-filter: none;
      }
      .backdrop-blur {
        backdrop-filter: blur(20px);
      }
      .backdrop-grayscale {
        backdrop-filter: grayscale(100%);
      }
    `);
  });
});

test('variants are supported', () => {
  return generatePluginCss({
    filters: {
      'none': 'none',
    },
    variants: ['hover', 'active'],
  }).then(css => {
    expect(css).toMatchCss(`
      .filter-none {
        filter: none;
      }
      .hover\\:filter-none:hover {
        filter: none;
      }
      .active\\:filter-none:active {
        filter: none;
      }  
    `);
  });
});
