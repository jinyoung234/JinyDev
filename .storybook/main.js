const path = require("path");
module.exports = {
  stories: [
    "../templates/**/*.stories.@(js|jsx|ts|tsx)",
    "../pageStories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-knobs",
    "storybook-addon-next-router",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  //경로설정라인
  webpackFinal: async config => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules", "styles"];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../components"),
      stories: path.resolve(__dirname, "../stories"),
      templates: path.resolve(__dirname, "../templates"),
      pageStories: path.resolve(__dirname, "../pageStories"),
    };
    return config;
  },
};
