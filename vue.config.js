const path = require('path');
const resolve = (dir) => {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  publicPath: '/',
     outputDir: 'dist', //打包输出目录默认dist
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    config.resolve.alias['~'] = __dirname + path.join('/src/assets');
    }
  }
}