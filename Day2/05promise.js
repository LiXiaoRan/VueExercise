/**
 * promise 解决回调问题的，promise的三个状态
 * 1成功，2失败，3等待
 *  resolve代表的是转向成功状态
 *  reject是失败状态   两者都是函数
 *  promise的实例就有一个then方法 then中有两个参数，和axios.get的then一模一样。一个是成功的回调函数，一个是失败的回调函数。
 */



let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let a = '蘑菇';
        resolve(a);//成功和失败是由自己定义的，调用哪个就是哪个.
        // reject(a);
    },1000);
});

p.then(function (data) {
    console.log('data is ' + data);
}, function (err) {
    console.log('err is '+err);
});

console.log('2');
