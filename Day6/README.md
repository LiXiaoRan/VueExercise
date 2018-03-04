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