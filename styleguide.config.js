const path = require('path')

module.exports = {
  components: 'src/index.js',
  webpackConfig: require('./webpack.config.js'),
  styleguideComponents: {
    AdaptiveCard: './src'
  },
  styleguideDir: './docs'
}