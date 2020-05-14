/**
 * author iWuzhi
 * date 2020-05-12 10:33:33
 */

const path = require('path');

const ROOT = process.cwd();

function resolvePath(relPaths) {
  return path.resolve(ROOT, relPaths);
}

module.exports = {
  ROOT: ROOT,
  SRC: resolvePath('src/'),
  CONFIG: resolvePath('config/'),
  DIST: resolvePath('dist/'),
  APP_ENTRY: resolvePath('src/index.tsx'),
  PUBLIC: resolvePath('public'),
  NODE_MODULES: resolvePath('node_modules'),
}