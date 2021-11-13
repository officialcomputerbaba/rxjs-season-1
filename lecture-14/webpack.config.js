const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: join(__dirname, "src", "index.ts"),
  devServer: {
    port: 4201,
  },
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: join(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, "src", "index.html"),
      publicPath: ".",
    }),
  ],
};
