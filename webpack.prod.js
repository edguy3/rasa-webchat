

const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const CleanWebpackPlugin = require('clean-webpack-plugin');
// eslint-disable-next-line import/extensions
const { version } = require('./package.json');
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = [{
  // entry: ['babel-polyfill', './index.js'],
  entry: './umd.js',
  output: {
    path: path.join(__dirname, '/lib'),
    filename: 'index.js',
    library: 'WebChat',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: 'PACKAGE_VERSION_TO_BE_REPLACED',
              replace: version
            }
          },
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/scss/')]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|woff|ttf|eot)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['lib']), new webpack.ProvidePlugin({
    process: 'process/browser'
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
    // ... rest of the resolve config
    fallback: {
      path: require.resolve('path-browserify')
    }
  }
}, {
  entry: './index.js',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom'
    }
  },
  output: {
    path: path.join(__dirname, '/module'),
    filename: 'index.js',
    library: 'WebChat',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'string-replace-loader',
            options: {
              search: 'PACKAGE_VERSION_TO_BE_REPLACED',
              replace: version
            }
          },
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, 'src/scss/')]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif|svg|woff|ttf|eot)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['lib']), new webpack.ProvidePlugin({
    process: 'process/browser'
  })],
  resolve: {
    extensions: ['.js', '.jsx'],
    // ... rest of the resolve config
    fallback: {
      path: require.resolve('path-browserify')
    }
  }
}
];
