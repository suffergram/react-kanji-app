const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/index.tsx',
    output: {
      filename: isProduction ? 'static/js/[name].[contenthash].js' : 'index.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          use: ['ts-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.ts', '.tsx', '.css'],
    },
    devServer: {
      historyApiFallback: true,
      port: 3000,
      static: {
        directory: path.join(__dirname, 'build'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
    ],
  };
};