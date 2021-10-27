const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = {
  entry: {
    ['lambda-a']: './src/lambda-a/index.ts',
    ['lambda-b']: './src/lambda-b/index.ts',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]/index.js',
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new IgnorePlugin({
      resourceRegExp: /^electron$/,
    }),
  ],
};