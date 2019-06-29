const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')
// 这个配置文件, 其实就是一个js文件, 通过Node中的模块操作, 向外暴露了一个配置对象

module.exports = {
    // 手动指定入口和出口文件
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {  // 命令参数的第二种形式
        open: true,
        port: 3000,
        contentBase: 'src', 
        hot: true // 启动热更新
    },
    plugins: [  // 配置插件的节点
        new webpack.HotModuleReplacementPlugin(), // 热更新对象
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
    ], 
    
        
    module: {// 第三方模块加载器
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader?limit=7632&name=[hash:8]-[name].[ext]' }, // 处理css中的url, 参数限制图片转为base64的最大内存, 单位byte
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理css中的url, 参数限制图片转为base64的最大内存, 单位byte
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置babel来转化高级的es6语法
            { test: /\.vue$/, use: 'vue-loader' }, // 配置vue
        ]
    },
    resolve: {
        alias: { // 设置vue被导入时包的路劲
            // "vue$": "vue/dist/vue.js"
        }
    },
}


// webpack .\src\main.js -o .\dist\bundle.js --mode=development
// 在控制台输入webpack指令
// webpack回去项目的根目录中查找入口和出口
// 找到配置文件, webpack会解析执行得到配置对象