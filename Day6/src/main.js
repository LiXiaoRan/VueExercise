let str1 = require('./a.js');
console.log('str is ' + str1);

import b from './b.js'

console.log('b.str  is ' + b.str);
//一般前端用import  后端用require


let obj = {school: 'swust'};
let obj1 = {age: 5};
let newObj = {...obj, ...obj1};//es7语法
console.log('newObj is '+newObj);