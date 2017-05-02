const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config),{
    publicPath:config.output.publicPath, 
    //确定哪里提供打包脚本,比contentBase优先、
    //webpack-dev-server生成的包并没有放在真实目录中,而是放在了内存中

    hot:true,
    //启用 webpack 的模块热替换特性

    historyApiFallback:true
    //任意的 404 响应可以提供为 index.html 页面

}).listen(3000,'localhost',function(err,result){
    if(err){
        return console.log(err);
    }
    console.log('listening at http://localhost:3000/')
})