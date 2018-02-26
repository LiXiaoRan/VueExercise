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

##template
如果有template属性会用模板替换掉外部的html，只要有这个属性，divapp中写的内容就没有意义了。只能有一个根元素，不能是文本节点
```javascript
    let vm = new Vue({
//        el: '#app',
        data: {
            msg: 'hello'
        },
        beforeCreate(){ //一般用不到此方法
//            debugger;
        },
        created(){//获取ajax，进行初始化操作
            debugger;//此处就可以获得data中的数据了
        },
        beforeMount(){
            //必须要有el才能执行到这里
        },
        template:'<div>{{msg}}</div>'//如果有template属性会用模板替换掉外部的html，只要有这个属性，divapp中写的内容就没有意义了。只能有一个根元素，不能是文本节点

    })
```

##生命周期
###beforeCreate
类型：Function

详细：

在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。

参考：生命周期图示

###created
类型：Function

详细：

在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

参考：生命周期图示

###beforeMount
类型：Function

详细：

在挂载开始之前被调用：相关的 render 函数首次被调用。

该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

###mounted
类型：Function

详细：

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted：

mounted: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
  })
}
该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

###beforeUpdate
类型：Function

详细：

数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。

该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行。

参考：生命周期图示

###updated
类型：Function

详细：

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。

注意 updated 不会承诺所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以用 vm.$nextTick 替换掉 updated：

updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
  })
}
该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

###activated
类型：Function

详细：

keep-alive 组件激活时调用。

该钩子在服务器端渲染期间不被调用。

参考：

构建组件 - keep-alive
动态组件 - keep-alive
deactivated
类型：Function

详细：

keep-alive 组件停用时调用。

该钩子在服务器端渲染期间不被调用。

参考：

构建组件 - keep-alive
动态组件 - keep-alive

###beforeDestroy
类型：Function

详细：

实例销毁之前调用。在这一步，实例仍然完全可用。

该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

###destroyed
类型：Function

详细：

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

该钩子在服务器端渲染期间不被调用。

参考：生命周期图示

###errorCaptured
2.5.0+ 新增

类型：(err: Error, vm: Component, info: string) => ?boolean

详细：

当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 false 以阻止该错误继续向上传播。

![avatar](https://cn.vuejs.org/images/lifecycle.png)


## 组件 component
##全局组件
1 自定义组件的名字不支持大写。（首字母可以大写）最好全部小写
2 多个单词可以用 - 连接
3 html采用的-可以在js中转为驼峰
4 组件中的数据必须是函数类型，返回一个实例作为组件的数据
5 组件中定义的数据只能在自己的模板中使用
```html
<div id="app">
    <my-div></my-div>
</div>
<script>
    Vue.component('my-div', {
        //这里是组件的定义
        template: '<div>自定义的{{msg}}</div>',
        data() {
            //组件中的数据必须是函数类型，返回一个实例作为组件的数据
            return {msg: 'msg helloworld'}//只能在自己的末班中使用，见上面
        }
    });

    //一般写插件的时候全局组件使用的多一些
    //用法 全局组件，可以声明一次在任何地方使用，局部组件：必须告诉这个组件属于谁
    let vm = new Vue({
        el:'#app'
    })

</script>
```
##局部组件
使用三部曲
1 创建这个组件
2 注册这个组件
3 引用这个组件

```html
<div id="app">
    <!--3 使用组件-->
    <mydiv></mydiv>
</div>
<script>

    let mydiv={template:'<div>局部组件</div>'};//1 创建组件
    let vm = new Vue({
        el: '#app',
        components:{
            mydiv:mydiv//2 注册组件  这里es6可以简写，只写一个mydiv
        },
        data:{

        }
    })

</script>
```

## 组件嵌套
如果要在一个组建中使用另一个组件1. 先保证组件真是存在 2在需要引用的实例上通过components来注册 3 组件需要再父极的模板中通过标签的形式引入
```javascript

    let grandson = {
        template: '<div>grandson</div>'
    };
    let son = {
        template: '<div>son<grandson></grandson></div>',
        components: {
            grandson
        }

    };
    let parent = {
        template: '<div>parent<son></son></div>',
        components: {
            son
        }
    };

    let vm = new Vue({
        el: '#app',
        data: {},
        template:'<parent></parent>',
        components: {
            parent
        }
    })

```