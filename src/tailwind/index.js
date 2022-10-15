const plugin = require('tailwindcss/plugin');
const { getTypography } = require('./typography');
const { getScreens } = require('./screens');
const { getColors } = require('./colors');

const getTypographyPlugin = plugin(({ addComponents }) => {
  const components = {
    ...getTypography()
  };

  addComponents(components, {
    variants: ['responsive']
  });
});

module.exports = { getTypographyPlugin, getScreens, getColors };
