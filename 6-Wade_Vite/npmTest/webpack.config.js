const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "develiopment",

  entry: {
    main: path.resolve("./app.js"),
  },

  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./myLoader.js")],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024, // 8kb
          },
        },
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: "마지막 빌드 시간: " + new Date().toLocaleString(),
    }),
    new CleanWebpackPlugin(),
  ],
};
