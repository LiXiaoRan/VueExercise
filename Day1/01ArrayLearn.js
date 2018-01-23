let arr = [1, 2, 3, 4, 5];
arr.b = "b";
let obj = {schook: 'swust', age: 8};
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("for each -----------------------------------");
arr.forEach(function (item) {
    console.log(item);//foreach不支持return
});
console.log("for in -----------------------------------");
for (let key in arr) {
    console.log(key);//会把私有属性也打印出来
}
console.log("for of -----------------------------------");
for (let val of Object.keys(obj)) {  //可以通过Object.keys（obj）来将对象的key作为新的数组
    console.log(val + "  : " + obj[val]); //可以return  只能遍历数组，但是不能遍历对象
}

console.log("filter -----------------------------------");
let newAry = arr.filter(function (item) {
    return 2 < item && item < 5;
});
console.log(newAry);


console.log("map -----------------------------------"); //映射，将原有的数组映射成一个新数组 不操作原数组，返回新数组。毁掉函数中返回什么这一项就是什么。
let arr1 = [1, 2, 3].map(function (item) {
    return `<li>${item}</li>`;
});
console.log(arr1.join(' '));

console.log(" \n  includes -----------------------------------");
let arr3 = [1, 2, 3, 4, 55];
console.log(arr3.includes(5));//返回的是bool类型


// 返回true就是找到了，不会改变数组，找到后停止循环，找不到返回的是undefind
console.log(" \n  find -----------------------------------");
let result = arr3.find(function (item, index) {//找到具体的某一项用find
    return item.toString().indexOf(5) > -1;
});
console.log(result);
//some 找到ture后停止返回true否则返回false
//every 找到false后停止返回false否则返回true


//8 reduce 收敛 4个参数  返回的是叠加后的结果，原数组不变， 回调函数返回的结果：
console.log(" \n  reduce -----------------------------------");
let sum = arr.reduce(function (prev, next, index, item) {
    // console.log(arguments);
    // return 100;//本次的返回值会作为下一次的prev
    return prev + next;
});
console.log(sum);

console.log(" \n  reduce 完成复杂点的计算 -----------------------------------");
sum2 = [{price: 30, count: 2}, {price: 30, count: 3}, {price: 30, count: 4}].reduce(function (prev, next) {
    console.log(prev, next);
    //0+60
    //60+90
    //150+120
    return prev + next.price * next.count;
}, 0);//默认指定第一次是0
console.log("sumn2 is " + sum2);


//二维数组编程以为数组
console.log(" \n  用reduce拼接数组 -----------------------------------");
let flat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]].reduce(function (prev, next) {
    return prev.concat(next);
});
console.log(flat);