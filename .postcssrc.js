/**
 * author iWuzhi
 * date 2020-05-14 10:50:52
 */

module.exports = {
  parser: 'postcss-less',
  plugins: {
    'postcss-import': {},
    'stylelint': {},
    'postcss-preset-env': {
      autoprefixer: {
        grid: true
      },
      browsers: 'last 2 versions'
    },
    'cssnano': {},
  }
}