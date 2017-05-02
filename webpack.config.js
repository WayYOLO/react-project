const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:[
        'react-hot-loader/patch',
        // 开启react代码的模块热替换(HMR)

        'babel-polyfill',
        //添加Babel默认不转码的ES6标准API

        'whatwg-fetch',
        //添加fetch的API Internet Explorer 10+

        'webpack-dev-server/client?http://localhost:3000',
        //为webpack-dev-server的环境打包好运行代码
        //然后连接到指定服务器域名与端口

        'webpack/hot/only-dev-server',
        //为热替换（HMR）打包好运行代码
        //only- 意味着只有成功更新运行代码才会执行热替换(HMR)

        './src/index'
        //app入口文件
    ],

    output:{
        // path:'',
        publicPath:'/',
        //指定资源文件引用的目录，用于各webpack插件,调试或者 CDN 之类的域名

        filename:'app.[hash].js'
        //输出打包文件
    },

    devtool:'cheap-module-eval-source-map',
    //生成sourceMap来调试代码

    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    'babel-loader',
                ],
                exclude:/node_modules/
            }
        ]
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        //开启全局的模块热替换(HMR)

        new webpack.NamedModulesPlugin(),
        //当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

        new HtmlWebpackPlugin({ hash: false, template: "./index.html" }),
        //生成html并引用打包文的js文件
    ]
}