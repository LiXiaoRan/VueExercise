let vm = new Vue({
    el: '#app',
    directives: {
        //这里写自定义指令
        focus(el, bindings) {
            //当cur==todo的时候，即点击当前的li是让内部的输入框获取焦点
            if (bindings.value) {
                el.focus();//这个是dom的方法，当前的dom元素获取焦点
            }
        }
    },
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
    methods: {
        /**
         *添加逻辑
         */
        add() {
            // if(this.title!==''){
            this.todos.push({
                isSelected: false,
                title: this.title
            });
            this.title = '';
            // }else{
            //     alert("输入不能为空")
            // }
        },
        /**
         * 删除逻辑
         * @param todo
         */
        remove(todo) {
            this.todos = this.todos.filter(function (item) {
                return item !== todo;
            })
        },
        remember(todo) {
            this.cur = todo;
        },
        calcelEdit() {
            this.cur = '';
        }
    },
    computed: {
        count() {
            return this.todos.filter(item => !item.isSelected).length;
        }
    }


});

//1 将数据循环添加到页面上
//2 敲回车或者点击添加新数据,需要加入isSelect属性
//3 删除功能
//4 计算一下当前没有被选中的个数
