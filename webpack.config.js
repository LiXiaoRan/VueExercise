let path = require('path');
//webpack必须采用commonjs写法
module.exports = {
    entry: './Day6/src/main.js',    //打包的入口文件，webpack会自动查找相关的依赖进行打包
    output: {
        filename: 'bundle.js',//打包后的名字
        path: path.resolve('./Day6/dist')//必须是一个绝对路径 path.resolve会将一个相对路径编程绝对路径

    },

    //模块解析规则
    // js 匹配所有的js，除了node_modules
    module: {
        rules: [
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            //写的时候use从右往左写，先转换成css再加入style
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
};