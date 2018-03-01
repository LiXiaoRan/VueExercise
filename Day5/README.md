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

