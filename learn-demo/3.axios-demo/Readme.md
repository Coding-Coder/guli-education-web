# axios
在vue里发送Ajax请求

axios是独立于vue的一个项目，基于promise用于浏览器和node.js的http客户端
- 在浏览器中可以帮助我们完成ajax请求的发送
- 在node.js中可以向远程接口发送请求

## 结构
`axios.提交方式("请求接口路径").then(箭头函数).catch(箭头函数)`

## 获取数据
```html
<script src="vue.min.js"></script>
<script src="axios.min.js"></script>
```
注意：测试时需要开启后端服务器，并且后端开启跨域访问权限
```js
var app = new Vue({
    el: '#app',
    data: {
        memberList: []//数组
    },
    created() {
        this.getList()
    },
    methods: {
        getList(id) {
            //vm = this
            axios.get('http://localhost:8081/admin/ucenter/member')
            .then(response => {
                console.log(response)
                this.memberList = response.data.data.items
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})
```
控制台查看输出

## 2、显示数据
```html
<div id="app">
    <table border="1">
        <tr>
            <td>id</td>
            <td>姓名</td>
        </tr>
        <tr v-for="item in memberList">
            <td>{{item.memberId}}</td>
            <td>{{item.nickname}}</td>
        </td>
    </tr>
</table>
</div>
```