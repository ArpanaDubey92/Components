/** @type { import('@storybook/preact-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],

    staticDirs: ['public'], // Serve static files from the `public` folder

  framework: {
    name: "@storybook/preact-webpack5",
    options: {},
  },
  core: {
    builder: 'webpack5',
  },

};
export default config;
