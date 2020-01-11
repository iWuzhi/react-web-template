/**
 * Author iWuzhi
 * Date 2019/11/30
 **/

const path = require("path");
const rootPath = process.cwd();

module.exports = {
  rootPath: rootPath,
  config: path.join(rootPath, "config"),
  public: path.join(rootPath, "public"),
  src: path.join(rootPath, "src"),
}