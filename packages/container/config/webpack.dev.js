const { merge } = require("webpack-merge");
const WebpackModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new WebpackModuleFederationPlugin({
      // host config
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};

// devConfig has strogner selector and will override some tings from common
module.exports = merge(commonConfig, devConfig);
