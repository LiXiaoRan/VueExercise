## vue第二天复习
- v-model  如果checkbox，select多选是数组，提供一个value属性 单选是单个值
- 修饰符 .number  .laz
- 按键修饰符 .enter.ctrl.keyCode
- 事件  stopPropagation 事件传播,calcelBubble=true 事件冒泡;
        preventDefault,returnValue=false
  事件修饰符    - @事件.stop    <div id="child" @click.stop="child">child</div>  来做到相同的事情，停止事件传播
               - @事件.capture  @click.capture 捕获事件，先捕获后冒泡，两个同时设置了捕获的话，先进入父控件的捕获。
               - @事件.prevent  阻止所有的点击,或者是链接跳转
               - @事件.once @click.once 只绑定一次，也就是click的函数只会被出发一次，即使是被传播的也算一次触发，之后就无法触发了。
               - @事件.self 只有点击了自己才会出发事件
- jquery once
- e.srcElement && e.target 判断事件源绑定事件



## filters
```javascript

 //全局过滤器 过滤器要放在页面的顶部
    Vue.filter('appFilters1',function (data) {
        return 'lr  ' + data;
    });
```

## computed 计算‘属性’而不是方法
- 方法不会有缓存，computed会根据依赖（归vue管理的数据 data里面的数据，可以响应式变化的）的属性进行缓存
- 两部分组成由get和set（不能只写set） 一般情况下 通过js复制影响其他人或者变淡元素设置值的时候会调用set方法