const MinCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "/src/js/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MinCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jsx$/i,
        use: ["jsx-loader"],
      },
    ],
  },

  plugins: [
    new MinCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack - Demo",
      template: "./index.html",
    }),
  ],

  devServer: {
    index: "index.html",
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080,
  },
};
