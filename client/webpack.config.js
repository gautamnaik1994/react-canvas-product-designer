const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const isProd = process.env.NODE_ENV === 'production';

let entryPoint,
  myPlugins = [],
  scssLoader,
  cssLoader,
  outputFileName;

if (isProd) {
  entryPoint = {
    app: ['./index.js'],
  };
  outputFileName = '[name].[chunkhash].js';
  cssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!postcss-loader',
    }),
  };
  scssLoader = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!postcss-loader!sass-loader',
    }),
  };
} else {
  entryPoint = {
    app: ['react-hot-loader/patch', 'webpack-dev-server/client?http://localhost:8080', 'webpack/hot/only-dev-server', './index.js'],
  };
  outputFileName = '[name].[hash].js';
  cssLoader = {
    test: /\.css$/,
    exclude: /node_modules/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'postcss-loader',
    }],
  };
  scssLoader = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'postcss-loader',
    }, {
      loader: 'sass-loader',
    }],
  };
}

function getPlugins() {
  myPlugins = [
    new webpack.NamedModulesPlugin(),
    new htmlWebpackPlugin({
      template: 'views/index.html',
      inject: 'body',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          outputStyle: 'expanded',
          includePaths: [],
        },
      },
    }),
  ];
  if (isProd) {
    myPlugins.push(new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }));
    myPlugins.push(new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }));
  } else {
    myPlugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return myPlugins;
}

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: entryPoint,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: outputFileName,
    publicPath: '/',
  },
  plugins: getPlugins(),
  resolve: {
    modules: [
      path.join(__dirname, './app/components'),
      // path.join(__dirname, "./app/actions"),
      // path.join(__dirname, "./app/reducers"),
      // path.join(__dirname, "./app/containers"),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      cssLoader,
      scssLoader,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   loaders: ['babel-loader', 'eslint-loader'],
      // },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    historyApiFallback: true,
    // proxy: {
    //   '/auth/google': 'http://localhost:5000',
    // },

    // port: 4000
    // compress: true,
  },
  devtool: isProd ? undefined : 'eval-source-map',
};
