module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
        scss: {
            // prependDataの部分が、data:だとビルドエラーになる
            data: '@import "./src/styles/common/common.scss";'
        }
    }
  }
}