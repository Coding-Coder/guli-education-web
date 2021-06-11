## Vue入门

### 基本结构
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <script src="vue.min.js"></script>
    <div id="app">

    </div>
    <script>
        new Vue({
            el: '#app',
            data: {

            }
        })
    </script>
</body>

</html>
```

### 基本语法
- `v-bind`:**单向数据绑定**,从Vue对象的data中取值,简写方式:`(:)`
- `v-model`:**双向数据绑定**,它修改其他用到的地方会跟着修改
- `v-on`:**事件操作**,例子：`v-on:click="search()`,简写方式:`@click="search()"`、括号也可以不加`@click="search"`
- `修饰符"."指明的特殊后缀`:作用是阻止其默认行为，如：`v-on:submit.prevent="onSubmit"`
- `v-if`&`v-else`:**条件指令**
- `v-show`:**条件指令**,效果同`v-if`
- `v-for`:**列表渲染**
- `v-html`:**渲染内容中的HTML标签**

## Vue组件
组件（Component）是 Vue.js 最强大的功能之一。

组件可以扩展 HTML 元素，封装可重用的代码。

组件系统让我们可以用独立可复用的小组件来构建大型应用。

### 全局组件

## Vue实例的生命周期
![image.png](https://i.loli.net/2021/06/01/NWPlMzShbHfduRL.png)
- `created`：页面数据渲染之前执行
- `mounted`：页面数据渲染之后执行

## Vue路由
Vue.js 路由允许我们通过不同的 URL 访问不同的内容。

通过 Vue.js 可以实现多视图的单页Web应用（single page web application，SPA）。

Vue.js 路由需要载入 vue-router 库