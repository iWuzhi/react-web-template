/**
 * author iWuzhi
 * date 2020-05-12 11:22:33
 */

const {
  webpack: {
    dev,
    prod
  }
} = require('./config');

module.exports = process.env.NODE_ENV === 'development' ? dev : prod;