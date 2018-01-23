//arrow fucntion 不具备this，argements
// 自己加没有this就找上一级的this


// 更改this指向
//1）call，apply，bind
//2）var that=this；
//3）=> 箭头函数


function a(b) {
    return b + 1;
}

/**
 * 去掉function关键字  参数有一个可以省略小括号，小括号和大括号之间有一个箭头，如果没有大括号则直接写的是返回值，有大括号
 * 必须写return
 * @param b
 */
let a_copy = b => b + 1;

function funa(b) {
    return function (c) {
        return b + c;
    }
}

/**
 * funa函数的箭头函数写法
 * @param b
 */
let funa_copy = b => c => b + c;//高阶函数(两个箭头及以上的)
console.log(funa_copy(1)(2));


//闭包：函数执行的一瞬间叫闭包，（不销毁的作用域）。当执行后返回的结果必须是引用数据类型，被外界变量接收，此时这个函数不会销毁。（模块化）

