const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const mode = process.env.NODE_ENV;
const isProd = mode === 'production';

module.exports = {
  mode: mode,
  entry: {
    main: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,  "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: "all",
          priority: -10,
        },
      },
    },
    ...(isProd && {
      minimize: true,
      minimizer: [new CssMinimizerPlugin(), new TerserPlugin()]
    })
  },
  performance: {
    hints: false, // @todo: how to fix warning asset size limit
  },
}