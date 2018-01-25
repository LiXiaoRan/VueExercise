function buyVegetable(callBack) {
    let a = '';
    setTimeout(function () {
        a = '蘑菇';
        callBack(a);//当赋值结束后再调用回调函数
    }, 1000);

}


//回调函数的写法
buyVegetable(function cook(val) {
    console.log("a is " + val);
});

//————————————————————————————————————————————————————————————————————————————————————————————————
/**
 * promise 解决毁掉问题的，promise的三个状态
 * 1成功，2失败，3等待
 */

