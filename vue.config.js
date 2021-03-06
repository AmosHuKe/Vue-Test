﻿let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
} //绝对路径

module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
    // 基本路径
    //baseUrl: '/',
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
   // lintOnSave: true,
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
   //compiler: false,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.resolve.alias
          .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    },
    configureWebpack: () => {},
    //如果想要引入babel-polyfill可以这样写
    // configureWebpack: (config) => {
    //   config.entry = ["babel-polyfill", "./src/main.js"]
    // },
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    //vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
   // productionSourceMap: true,
    // css相关配置
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 'primary-color': '#1DA57A',
                    // 'link-color': '#1DA57A',
                    // 'border-radius-base': '2px',
                },
                javascriptEnabled: true
            }
        }
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    //parallel: require('os').cpus().length > 1,
    // 是否启用dll
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
   // dll: false,
    // PWA 插件相关配置
    // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 //   pwa: {},
    // webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: 'localhost',
        port: 9099,
        https: false,
        hotOnly: false,
        proxy: {
            "": {
                target: "http://localhost:9099",
                changeOrigin: true, //是否跨域
                secure: false
            }
        }, // 设置代理
        before: app => {


        }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
    
}