module.exports = {
  module: {
    // define loader (goal of loader is to tell webpack
    // to process some diff files as we start to import them into project)
    rules: [
      // first loader is babel
      // babel is charge of processing all of our code from ES/2015/2016/2017/2018/2019...
      // and turn in it to regular ES5 code that can be executed inside of our browser JS engines
      {
        test: /\.m?js$/, // when every we  improt file this those extenstions we want to be proccessed by babel
        exclude: /node_modules/, // don't run babel on this folder
        use: {
          loader: "babel-loader",
          options: {
            // @babel/preset-react means that babel is going to process all the jsx tags
            // @babel/preset-env takes all diff version of js and convert to ES5
            presets: ["@babel/preset-react", "@babel/preset-env"],
            // babel/plugin-transform-runtime is going to add in a little bit of additional code to enable diff features
            // for our project inside of borwser, such as async/await syntax and some others things
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
