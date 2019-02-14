let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production' ? '/src/' : '/',
  devServer: {
    proxy: {
      '/demo': {
        target: 'http://localhost:3000/demo/',
        changeOrigin: true,
        pathRewrite: { '^/demo': '' }
      }
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
              @import "@scss/index.scss";
            `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@a', resolve('src/assets'))
      .set('@d', resolve('src/demos'))
      .set('@c', resolve('src/components'))
      .set('@r', resolve('src/router'))
      .set('@scss', resolve('src/scss'))
      .set('@script', resolve('src/script'))
  }
}