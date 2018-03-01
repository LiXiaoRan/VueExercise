#day 5
##slot插槽 定制模板
用来给自定义组件设置默认布局，具体用法如下:(其中modal是自定义组件)
```html
<div id="app">
    <!--这里放的内容均属于父级当前模板，只有属性名是属于组件的-->
    <modal>
        <!--没有名字的标签，会被放置到default中-->
        <a href="http://baidu.com">去百度</a>
        <h1 slot="title">是否删除？</h1>
        <!--这里面绑定的函数的实例在父组件vm上。-->
        <p slot="content" @click="fn"> 确认吗</p>
        <a href="http://baidu.com">去百度</a></modal>
    <!--    <modal>是否确认</modal>
        <modal></modal>-->
</div>
<template id="modal">
    <!--template 中只能有一个根元素。可以通过元素属性定制模板-->
    <div>
        <!--slot中可以放置一些默认的内容，如果传递了内容则替换掉,没有名字的标签，会被放置到default中-->
        <slot name="title">默认标题</slot>
        <slot name="content">默认内容</slot>
        <slot name="default">这是一个默认的</slot>
    </div>
</template>
```

## refs 获取子组件引
获取之后可以在父组件中或者任意地方去调用子组件的方法
```html
<body>
<div id="app">
    <loading ref="load"></loading>
</div>

<script>
    //父组件调用子组件方法

    let loading = {
        data() {
            return {flag: true, a: 1}
        },
        template: '<div v-show="flag">加载中。。。</div>',
        methods: {
            hide() {
                this.flag = false;
            }
        }
    };

    let vm = new Vue({
        el: '#app',
        mounted() {
            this.$refs.load.hide()//调用子组件方法
        },
        data: {flag: false},
        methods: {}
        ,
        components: {
            loading
        }


    })
</script>
```

## <keep-alive></keep-alive>
一般用作缓存，防止组件频繁切换的时候-，不停地创建和销毁,如果缓存了就不会再走created mounted 钩子函数
```html
    <keep-alive>
        <component :is="radio"></component>
    </keep-alive>
```