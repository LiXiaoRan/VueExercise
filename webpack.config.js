let path = require('path');
//webpack必须采用commonjs写法
module.exports = {
    entry: './Day6/src/main.js',    //打包的入口文件，webpack会自动查找相关的依赖进行打包
    output: {
        filename: 'bundle.js',//打包后的名字
        path: path.resolve('./Day6/dist')//必须是一个绝对路径 path.resolve会将一个相对路径编程绝对路径

    }

};