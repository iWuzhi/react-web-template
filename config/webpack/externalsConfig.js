/**
 * author iWuzhi
 * date 2020-05-14 13:34:23
 */

const path = require('path');

const paths = require('../paths');

// node_module/**/umd/*.js ==> dist/*.js */
module.exports = [
  {
    config: {
      'react': 'React'
    },
    prodPath: path.join(paths.NODE_MODULES, 'react/umd/react.production.min.js'),
    devPath: path.join(paths.NODE_MODULES, 'react/umd/react.development.js')
  },
  {
    config: {
      'react-dom': 'ReactDOM'
    },
    prodPath: path.join(paths.NODE_MODULES, 'react-dom/umd/react-dom.production.min.js'),
    devPath: path.join(paths.NODE_MODULES, 'react-dom/umd/react-dom.development.js')
  },
]