## vue day1 总结

   - v-model 用于（变淡元素）忽略掉value，checked，selected。将数据绑定到视图上，视图修改后会影响数据的变化。
    如果是复选框只有一个的时候，会把值转化成bool类型。如果是多个checkbox要增加value 并且数据类型为数组
   - v- text 取代{{}} v-clock解决闪烁（块）的问题，后期都可以不采用，使用v-clock要加样式。
   - v-once 绑定一次，数据在变化不会导致视图刷新，写在不想刷新的标签上
   - v-html 讲html字符串转化成html
   - v-for 循环（数组，对象，字符串，数字）
   - v-on:XXX 绑定XXX事件  一般用@XXX，其中的函数必须定义在methods中，不能和data里的内容重名，this指向的是实例，
   不能使用箭头函数。事件源对象如果不写括号，可以自动传入，否则只能手动传入$event




##axios使用ajax

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


    promise 解决回调问题的，promise的三个状态
    1成功，2失败，3等待
    resolve代表的是转向成功状态
    reject是失败状态   两者都是函数
    promise的实例就有一个then方法 then中有两个参数，和axios.get的then一模一样。一个是成功的回调函数，一个是失败的回调函数。
