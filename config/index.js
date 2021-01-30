let {
  resolve
} = require('path');
let devServer = require('./dev'); // 开发环境配置 项目开发中不提交，每个开发者的习惯可能不一样
const systemConfig = require('./systemConfig');
// const rootValue = 37.5;
const env = process.argv[process.argv.length - 1];

console.log('lllllll' + env)
const postcssPxtoViewport = require('postcss-px-to-viewport');
module.exports = {
  assets: 'assets', // 打包后静态资源子目录
  hashLen: 8,
  publicPath: env === 'production' ? './' : '/',
  mockPath: resolve(__dirname, '../mock'), // 项目源代码目录
  srcPath: resolve(__dirname, '../src'), // 项目源代码目录
  rootPath: resolve(__dirname, '../dist'), // production环境打包后静态资源根目录
  fatDistPath: resolve(__dirname, '../dist/fat-dist'), // 测试环境打包后的路径
  uatDistPath: resolve(__dirname, '../dist/uat-dist'), // 生产环境打包后的路径
  limit: 1024 * 5, // url-loader limit参数
  devServer: devServer,
  bundleAnalyzer: false,
  // rootValue           : rootValue,
  systemConfig: systemConfig,
  imagesPublicPath: '../../',
  postcssLoaderOptions: {
    loader: 'postcss-loader',
    options: {
      plugins: [
        require("autoprefixer"),
        new postcssPxtoViewport({
          unitToConvert: "px", // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["wrap"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
          // include: /*.vue/, //如果设置了include，那将只有匹配到的文件才会被转换
          landscape: false, // 是否处理横屏情况
          landscapeUnit: 'vw', //横屏时使用的单位
          landscapeWidth: 568 //横屏时使用的视口宽度
        })
      ]
    }
  }
};