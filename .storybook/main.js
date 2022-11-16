const { defineConfig, mergeConfig } = require('vite');
const { default: tsconfigPaths } = require('vite-tsconfig-paths');

module.exports = {
  stories: ['../(apps|libs)/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-create-react-app'],
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, options) {
    return mergeConfig(
      config,
      defineConfig({
        plugins: [tsconfigPaths()],
      }),
    );
  },
};
