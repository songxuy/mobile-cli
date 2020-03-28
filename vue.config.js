const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const merge = require('webpack-merge')
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/assets/styles/common.scss";`
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
      fontsmin: {
        originPath: 'static/fonts',
        destPath: 'src/assets/fonts',
        cssWritePath: 'src/assets/styles/reset.scss',
        fontCssRequirePath: './assets/fonts'
      }
  },
  chainWebpack: config => {
    /* config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return merge(options, {
          limit: 10000
        })
      }) */
      /* config.module
      .rule('images')
      .use('url-loader')
      .tap(options => {
        return {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: `img/[name].${conf.version}.[ext]`
            }
          }
        };
      }) */
      config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use(MiniCssExtractPlugin.loader)
      .loader(MiniCssExtractPlugin.loader)
      .end()
      /* .use('css-loader')
      .loader('css-loader')
      .tap(options => {
        return  merge(options, {
          importLoaders: 1
        })
      }) */
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin(
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        }
      )
    ]
    /* new BundleAnalyzerPlugin(); */
    /* config.plugins('webpack-report')
    .use(BundleAnalyzerPlugin, [{
        analyzerMode: 'static',
    }]); */
    /* config.module.rules.push({
      test: /\.css$/,
      use:[
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options:{
            importLoaders:1
          }
        }
      ]
    }) */
  }
}