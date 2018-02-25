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
    created() {//初始化方法，页面加载时会调用，同理刷新时也会调用
        this.todos = JSON.parse(localStorage.getItem('todosData')) || this.todos;//有数据就读取，没有数据就用默认的

        //如果有hash值则取出并且裁减掉前两个符号如果没有的话，就用'all'替换
        this.hash = window.location.hash.slice(2) || 'all';
        //监控hash值的变化即链接中#后面的内容包括#号,
        window.addEventListener('hashchange', () => {
            this.hash = window.location.hash.slice(2) || 'all';
        }, false)
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
        cur: '',
        hash: ''

    },
    watch: {
        /*//用来监控data中的元素todos，如果todos发生变化则会执行，这种写法只能监视一层变化。
        todos(){

        }*/
        todos: {
            handler() {//这种写法是深度监控，可以监控多层变化
                localStorage.setItem('todosData', JSON.stringify(this.todos));//localstorage默认存的是字符串，为了存取方便这里转换为json再进行存取
            }, deep: true
        }
    }
    ,
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
        },
        filterTodos() {
            if (this.hash === 'all') return this.todos;
            else if (this.hash === 'finish') return this.todos.filter(item => item.isSelected)
            else if (this.hash === 'unfinish') return this.todos.filter(item => !item.isSelected)
            return this.todos;
        }
    }


});

//1 将数据循环添加到页面上
//2 敲回车或者点击添加新数据,需要加入isSelect属性
//3 删除功能
//4 计算一下当前没有被选中的个数
