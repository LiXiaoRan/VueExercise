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
- 不支持异步，这一点可以通过watch来代替

## watch 用法
```javascript
let vm = new Vue({
        el: '#app',
        data: {
            a: ''
        },
        watch: {//只有值变化的时候才能出发,支持异步,其他情况computed更加常用
            a(newValue, oldValue) { //watch的属性名要和观察的人的名字一致
                if (newValue.length < 3) {
                    return this.msg = '太少';
                }
                if (newValue.length > 6) {
                    return this.msg = '太多';
                }
                this.msg = null;
                console.log('new is ' + newValue + "old is " + oldValue);

            }
        }
    });
```


## watch和computed的不同
- watch支持异步然而computed不支持
- watch是观察的值发生变化了才会刷新，而computed是只要依赖的值发生了变化就会刷新，依赖的值包含函数里面所有出的的data中的值
- 对于任何复杂逻辑都应该用computed

##v-if/v-show
- v-if操作的是dom v-if可以和v-else-if，v-else连写,v-else必须连着v-if不然就会报错
- v-show操作的是样式

## templete
>    template标签是vue提供的没有任何意义，仅仅是用来包裹元素用的，v-show不支持template 只能在v-if上使用
```html
<!--template标签是vue提供的没有任何意义，仅仅是用来包裹元素用的，v-show不支持template-->
    <template v-if="flag">
        <div>就这样</div>
        <div>就这样</div>
        <div>就这样</div>
        <div>就这样</div>
    </template>
    <div v-else>还是这样吧</div>
```

> 默认情况下在切换dom时相同的dom结构会被复用，不过不需要复用需要加key key="keyID"


## V-bind 简写 :
- 动态绑定“属性”。例如 
```html
<img :src="..." :width="w" />
```
用法；
```html
<div id="app">
    <!--//动态绑定class,:class绑定的样式和class绑定的样式不冲突-->
    <!--写法：1对象格式,如下-->
    <div class="x y" :class="{z:flag,y:true}">div</div>
    <!--写法：2数组-->
    <div class="x" :class="[class1,class2,{z:false}]">div</div>
</div>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            flag: true,
            class1: 'x',
            class2: 'y'
        }
    })
</script>
```

## 实现单页开发的方式
- 通过hash记录跳转的路径（可以产生历史管理）
- 浏览器自带的历史管理的方法history如history.pushState()可能会导致404错误
> 开发时使用hash的方式，上线的话会使用history



##  class="row"
div的class一旦设置为row，此时的这个div就被划分成12列

```html
    <div class="container">
        <!--一旦设置row，div就被分为了12列-->
        <div class="row">
            <!--这里div占12列，占满了第二层的div md代表是中型屏幕-->
            <div class="col-md-12">

                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>

            </div>
        </div>
    </div>
```
这就是所谓的栅格化布局


## directives 自定义指令的用法
el指代的当前的dom，把v-color放在那里就是那里.bindings是绑定的属性,这个绑定的属性可以通过arguments来获取
```html
<div id="app">
    <button v-color="flag">变色</button>
</div>
<script>
    let vm = new Vue({
        el: '#app',
        directives: {
            color(el,bindings) {//el指代的当前的dom，把v-color放在那里就是那里.bindings是绑定的属性
                el.style.background=bindings.value;
            }

        },
        data: {
            flag: 'red'

        },
        methods: {}
    });
</script>

```
有些时候自定义的指令可能会特别长如在html中写v-focus-aa，这个时候在js中定义的时候应该写成波峰的形式，即focusAa


## watch 监控数据变化
 watch:{
        //用来监控data中的元素todos，如果todos发生变化则会执行
        todos(){        }} 此时data中必须要有todos这个数据元素
如下所示：
```javascript
    data: {
        todos: [

            {
                isSelected: false,
                title: '睡觉'
            },
            {
                isSelected: true,
                title: '吃饭'
            }

        ],
        title: '',
        cur: ''

    },
    watch:{
        //用来监控data中的元素todos，如果todos发生变化则会执行
        todos(){
        //此处监控后的写逻辑
        }
    }
```
但是`watch`有局限性，默认只会监控一层的数据变化，例如上面的`todos`，如果里面的仅仅是title发生了变化其他的不变的话，是无法触发
监控的。
深度监控的写法如下：
```javascript
todos:{
            handler(){//这种写法是深度监控，可以监控多层变化
                alert();
            },deep:true
        }
```

