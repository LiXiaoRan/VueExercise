#day 4

## $nextTick 所有的dom 操作最好放在这个里面
```javascript
    //this.$data vm上的数据
    // this.$watch 监控
    // this.$el 当前的el元素
    // this.$set 后加的属性实现响应式变化
    // this.$options vm上的所有属性
    // this.$nextTick()//异步方法，等待dom完成后才会执行，所有的dom操作最好放在这个里面
    // this.$refs 所有的属性

    let vm = new Vue({
        el: '#app',
        a:1,
        data: {msg: 'hello'},
        mounted() {

            this.$nextTick(function () {
                //保证dom渲染完毕后执行。  
                console.log('vm is '+vm);
            })
        }
    })
```
