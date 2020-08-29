// next.config.js
// const withCSS = require("@zeit/next-css");
const webpack = require("webpack");

module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, { dev }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    return config;
  },
};
