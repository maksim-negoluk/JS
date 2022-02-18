const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractorPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/js/home.js",
    about: "./src/js/about-us.js",
    contacts: "./src/js/contact-page.js",
  },
  node: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractorPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/html/home.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/html/about-us.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "contacts.html",
      template: "./src/html/contact-page.html",
      chunks: ["contacts"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractorPlugin.loader,
          "css-loader",
          "postcss-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(m?js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
