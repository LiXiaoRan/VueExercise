/**
 * promise 解决回调问题的，promise的三个状态
 * 1成功，2失败，3等待
 *  resolve代表的是转向成功状态
 *  reject是失败状态   两者都是函数
 *  promise的实例就有一个then方法 then中有两个参数，和axios.get的then一模一样。一个是成功的回调函数，一个是失败的回调函数。
 */



let p = new promise(function (resolve, reject) {
    console.log('1');
});

console.log('2');
