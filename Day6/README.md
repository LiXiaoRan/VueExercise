## 模块
- node 模块的规范commonjs
- cmd seajs amd require
- umd 为了做兼容处理
- esmodule
    - 如何定义模块（一个js就是一个模块）
    - 如何导出模块（export）
    - 如何使用模块（import）


## 导入其他模块的写法
- 写法一：
```javascript
import * as a from './a.js'//在另一个文件中将内容解构出来即可使用
console.log('导入的值' + a.str1, a.str2);
a.a();

```
- 写法二：
```javascript
//如果是第三方模块不要加./ 如果是文件模块需要加./
//import 具有声明功能
import * as a from './a.js'//在另一个文件中将内容解构出来即可使用
console.log('导入的值' + a.str1, a.str2);
a.a();

```

## webpack
> 安装最好不要全局安装。否则可能导致webpack的版本差异
- 在packge.json中配置一个脚本，这个脚本用的命令是webpack会去当前的node_modules下找bin对应的webpack名字让其执行，执行的就是bin/webpack.js，webpack.js需要当前目录下有个名字叫做webpack.config.js
的文件，我们通过npm run build执行的目录是当前文件夹的目录，所以回去当前目录下查找

## 导入
一般前端用import  后端用require

## babel将es6转义为es5
- install babel
```
npm install babel-core --save-dev
npm install babel-loader --save-dev

```

## babel-preset-es2015
- 让babel-loader拥有解析es6语法的功能
```
npm install babel-preset-es2015 --save-dev

```

## babel-preset-stage-0
```
npm install babel-preset-stage-0 --save-dev
stage-0包含了stage-1，-2，-3。其中-4是es6

```

## 解析样式
- css-loader将css解析成模块，将解析的内容插入到style标签内（style-loader）
```
npm install css-loader --save-dev
```