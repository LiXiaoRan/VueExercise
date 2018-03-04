//如果是第三方模块不要加./ 如果是文件模块需要加./
//import 具有声明功能
import * as a from './a.js'//在另一个文件中将内容解构出来即可使用
console.log('导入的值' + a.str1, a.str2);
a.a();


import str from './b.js';
console.log(str);