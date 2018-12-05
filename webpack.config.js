const path = require('path');
const webpack = require('webpack');
// const CompressionPlugin = require('compression-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/preset-env']
        }
      }
    ]
  },
  // optimization: {
  //   minimize: true,
  //   mergeDuplicateChunks: true,
  //   removeEmptyChunks: true,
  //   nodeEnv: 'production'
  // },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new CompressionPlugin({
    //   filename: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
};