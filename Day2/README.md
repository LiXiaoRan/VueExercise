## vue day1 总结

   - v-model 用于（变淡元素）忽略掉value，checked，selected。将数据绑定到视图上，视图修改后会影响数据的变化。
    如果是复选框只有一个的时候，会把值转化成bool类型。如果是多个checkbox要增加value 并且数据类型为数组
   - v- text 取代{{}} v-clock解决闪烁（块）的问题，后期都可以不采用，使用v-clock要加样式。
   - v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
   - v-html 讲html字符串转化成html
   - v-for 循环（数组，对象，字符串，数字）
   - v-on:XXX 绑定XXX事件  一般用@XXX，其中的函数必须定义在methods中，不能和data里的内容重名，this指向的是实例，
   不能使用箭头函数。事件源对象如果不写括号，可以自动传入，否则只能手动传入$event




## axios使用ajax

```javascript
    //特殊方法
    let vm = new Vue({
            el: '#app',
            //专门用来发送ajax的方法
            created(){//在数据被初始化后被调用,this指向的也是vm实例,这类函数叫做钩子函数
                axios.get('./file/carts.json').then(function (res) {
                    //成功
                    vm.products=res.data;
                },function (err) {
                    //失败
                    console.log(err);
                });
            },
            data: {
                products: []

            }
        });
```




## 回调函数
```javascript
    //普通写法
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

```

## Promise用法
    promise 解决回调问题的，promise的三个状态
    1成功，2失败，3等待
    resolve代表的是转向成功状态
    reject是失败状态   两者都是函数
    promise的实例就有一个then方法 then中有两个参数，和axios.get的then一模一样。一个是成功的回调函数，一个是失败的回调函数。

```javascript
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

```

## 使用promise封装的ajax的用法
### 封装的代码
```javascript
/**
 * 自己封装的ajax
 * @param url 默认为空
 * @param type 如果不传值的话，默认为get
 * @param dataType 默认为json
 */
function ajax({url = '', type = 'get', dataType = 'json'}) {

    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        // xhr.responseType = dataType;
        xhr.onload = function () {//xhr.readState==4 xhr.status==200
            //成功
            if (xhr.status === 200)
                resolve(xhr.response);
            else
                reject('not found');
        };
        xhr.onerror = function (err) {
            //失败
            reject(err);
        };
        xhr.send();
    });
}
```
### 用法
```javascript
ajax({url: './file/carts.json'}).then(function (data) {
                console.log('data is ' + data);
            }, function (err) {
                console.log('err is ' + err);
            })
```

## 异步终极解决方案 Async/Await 基于Promise和es6

## bootstrap样式框架
    bootstrap 栅格化布局  默认12列，有一些框架可能是8列或者24列
    常见的样式  基本样式+增强样式-->
    default 灰色   success 绿色   danger 红色  warning 警告色 info 浅蓝色  primary 蓝色
    vue的框架 iview  mint-ui

## :和v-bind等价  指令：动态绑定数据
<img :src="product.productImg" :title="product.productName">
这里就是必须使用的动态绑定,主要是因为src并不是vue的属性，所以不能直接取值


## filters用来设置过滤方法
filters: {
            toFixed(input, argument) {//input是管道符前面的内容
                if (undefined === argument)
                    argument = 2;//设置保留小数的默认值为2
                return ' ￥ ' + input.toFixed(argument);
            }

        }


```javascript
## computed 用来做一些计算的方法

//当给全选复制时，要影响其他人的变化，当页面刷新时，获取全选值，是根据下面的checkbox的计算出来的结果给全选赋值
        computed: {
            /**
             * 全选状态改变
             */
            switchCheckAll: {
                //当products值发生变化时会重新计算，有缓存
                get() {//其中的this依然指向实例  默认吗v-model会获取switchCheckAll的值 所以会调用get方法
                    return this.products.every(p => p.isSelected);
                },
                set(val) {//当我们给checkbox赋值的时候
                    this.products.forEach(p => p.isSelected = val);
                }

            }


            /**
            * 计算总价
            */
            sum: {//sum的结果会被缓存，如果以来的数据没有变化就不会重新执行
                get() {
                    return this.products.reduce(function (prev, next) {
                        if (!next.isSelected) return prev;
                        return prev + next.productCount * next.productPrice;
                    }, 0)
                }
            }

        }
```

    v-if操作的是dom，v-show操作的是样式
## 动画
```html
    <!--transition是vue自定义的动画组件-->
    <transition>
        <!--    v-if操作的是dom，v-show操作的是样式 -->
        <!--如果if不通过，内部的指令不会再执行了-->
        <div v-show="flag">app</div>
    </transition>
```
    通过如下方法使用animated.css动画
    enter-active-class="animated 进入动画的名字" leave-active-class=""animated 离开动画的名字""
例如
```html
 <transition enter-active-class="animated rollIn" leave-active-class="animated rollOut">
        <div v-show="flag">app</div>
 </transition>
```