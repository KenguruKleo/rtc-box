const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    path.resolve(__dirname, './src/main.js'),
  ],
  output: {
    filename: 'static/bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        include: path.join(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|gif|jpe?g|svg|ttf|otf|eot|woff2?)$/,
        loader: 'file-loader?name=static/files/[name][hash:base64:5].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
      publicPath: '/',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      title: 'RTC-BOX',
      template: 'client/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './src/assets/favicon.ico') },
    ]),
  ],
};
