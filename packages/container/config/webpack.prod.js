const { merge } = require("webpack-merge");
const WebpackModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

// this env var will be defined whe we build our app through CI/CD pipeline
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  // when we set mode to prod, that's gonna cause Webpack to run differently,
  // it's gonna make sure all the JS files that are build get somewhat optimized (minifed then and some other samll optimisation)
  // it takes a longer to build things but we will get more production specific build
  mode: "production",
  output: {
    // done for cashing issues? (template for naming files?)
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/", // "/container/latest/[name].[contenthash].js"
  },
  plugins: [
    new WebpackModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
