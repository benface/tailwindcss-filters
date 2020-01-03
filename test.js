const _ = require('lodash');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const filtersPlugin = require('./index.js');

const generatePluginCss = (config) => {
  return postcss(
    tailwindcss(
      _.merge({
        theme: {
          screens: {
            'sm': '640px',
          },
        },
        corePlugins: false,
        plugins: [
          filtersPlugin,
        ],
      }, config)
    )
  )
  .process('@tailwind utilities', {
    from: undefined,
  })
  .then(result => {
    return result.css;
  });
};

expect.extend({
  toMatchCss: cssMatcher,
});

test('there is no output by default', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(``);
  });
});

test('utilities can be customized', () => {
  return generatePluginCss({
    theme: {
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(1)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .filter-none {
        filter: none;
      }
      .filter-grayscale {
        filter: grayscale(1);
      }
      .filter-invert {
        filter: invert(1);
      }
      .filter-sepia {
        filter: sepia(1);
      }
      .backdrop-none {
        backdrop-filter: none;
      }
      .backdrop-blur {
        backdrop-filter: blur(20px);
      }
      @media (min-width: 640px) {
        .sm\\:filter-none {
          filter: none;
        }
        .sm\\:filter-grayscale {
          filter: grayscale(1);
        }
        .sm\\:filter-invert {
          filter: invert(1);
        }
        .sm\\:filter-sepia {
          filter: sepia(1);
        }
        .sm\\:backdrop-none {
          backdrop-filter: none;
        }
        .sm\\:backdrop-blur {
          backdrop-filter: blur(20px);
        }
      }
    `);
  });
});

test('variants can be customized', () => {
  return generatePluginCss({
    theme: {
      filter: {
        'none': 'none',
        'grayscale': 'grayscale(1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
    variants: {
      filter: ['hover'],
      backdropFilter: ['active'],
    },
  }).then(css => {
    expect(css).toMatchCss(`
      .filter-none {
        filter: none;
      }
      .filter-grayscale {
        filter: grayscale(1);
      }
      .hover\\:filter-none:hover {
        filter: none;
      }
      .hover\\:filter-grayscale:hover {
        filter: grayscale(1);
      }
      .backdrop-none {
        backdrop-filter: none;
      }
      .backdrop-blur {
        backdrop-filter: blur(20px);
      }
      .active\\:backdrop-none:active {
        backdrop-filter: none;
      }
      .active\\:backdrop-blur:active {
        backdrop-filter: blur(20px);
      }
    `);
  });
});
