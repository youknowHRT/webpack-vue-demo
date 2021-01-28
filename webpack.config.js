const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin') 
const VueLoaderPlugin=require('vue-loader/lib/plugin')
const webpack=require('webpack')

module.exports={
  mode:"development",//默认是生产模式
  resolve:{
    extensions:['.vue','.js'] //允许用户在引入模块时不带扩展名即文件后缀
  },
  entry:"./src/index.js",//入口文件
  output:{
    path:path.join(__dirname,"dist"),//输出执行文件(指webpack.config.js)的绝对路径
    filename:"boundle.js"//指定输出文件名，替换main.js
  },
  module:{
    rules:[
      {
        test:/\.js$/,//匹配js文件
        exclude:/node_modules/,//忽略node_modules文件夹
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      },
      {
        test:/\.vue$/,
        use:{
          loader:'vue-loader'
        }
      },
      {
        test:/\.(sa|c)ss$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({//创建实例
      filename:'index.html',// 指定文件名
      template:path.resolve(__dirname,'src/index.html')//引入路径
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer:{
    hot:true
  }
}