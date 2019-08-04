const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = (argv.mode === 'production');

  return {
    entry: {
      main: './src/main.js'
    },

    watch: !isProduction,

    devServer: {
      contentBase: 'build',
      watchContentBase: true,
      port: 1000,
      hot: true,
      compress: true,
      open: true
    },

    devtool: isProduction ? false : 'source-map',

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? 'js/[name].[hash].js' : '[name].js',
    },

    module: {
      rules: [
        {
          test: /\.(woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: './fonts/[name].[ext]',
            },
          }
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '../',
              name: './img/[name].[ext]',
            },
          }
        },
        {
          test: /\.(sass|scss)$/,
          loader: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction
              }
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: './src/scss/variables.scss',
              }
            }
          ]
        }
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },

    plugins: [

      new CleanWebpackPlugin('build', {}),

      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/[name].[hash].css' : '[name].css'
      }),

      new HtmlWebpackPlugin({
        inject: true,
        hash: true,
        template: './src/index.html',
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          minifyCSS: true
        }
      }),

      new WebpackMd5Hash(),

      new CopyWebpackPlugin([
        {
          from: './src/fonts',
          to: './fonts'
        },
        {
          from: './src/img',
          to: './img'
        },
      ])
    ],

    optimization: {
      minimizer: [
        new TerserJSPlugin({}),
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  };
};
