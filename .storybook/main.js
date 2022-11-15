const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  staticDirs: [path.resolve(__dirname, './public')],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="/fonts/fontiran.css" />
  `,
  webpackFinal: async (config) => {
    config.plugins?.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './public/fonts'),
            to: 'fonts',
          },
        ],
      }),
    );
    return config;
  },
};
