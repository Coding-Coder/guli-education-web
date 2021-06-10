## 一、模块化简介
### 1、模块化产生的背景
随着网站逐渐变成"互联网应用程序"，嵌入网页的Javascript代码越来越庞大，越来越复杂。

Javascript模块化编程，已经成为一个迫切的需求。理想情况下，开发者只需要实现核心的业务逻辑，其他都可以加载别人已经写好的模块。

但是，Javascript不是一种模块化编程语言，它不支持"类"（class），包（package）等概念，更遑论"模块"（module）了。

### 2、什么是模块化开发
**后端模块化是类于类之间调用，前端模块化是js与js之间的调用。**

传统非模块化开发有如下的缺点：
- 命名冲突
- 文件依赖

模块化规范：
- CommonJS模块化规范
- ES6模块化规范

## 二、CommonJS模块规范
每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。
### 1、创建“module”文件夹
### 2、导出模块
创建 common-js模块化/四则运算.js
```js
// 定义成员：
const sum = function(a,b){
    return parseInt(a) + parseInt(b)
}
const subtract = function(a,b){
    return parseInt(a) - parseInt(b)
}
const multiply = function(a,b){
    return parseInt(a) * parseInt(b)
}
const divide = function(a,b){
    return parseInt(a) / parseInt(b)
}
```
导出模块中的成员
```js
// 导出成员：
module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
}
```
简写
```js
//简写
module.exports = {
    sum,
    subtract,
    multiply,
    divide
}
```

### 3、导入模块
创建 common-js模块化/引入模块.js
```js
//引入模块，注意：当前路径必须写 ./
const m = require('./四则运算.js')
console.log(m)

const result1 = m.sum(1, 2)
const result2 = m.subtract(1, 2)
console.log(result1, result2)
```

### 4、运行程序
```js
node common-js模块化/引入模块.js
```
CommonJS使用 exports 和require 来导出、导入模块。

## 三、ES6模块化规范
ES6使用 export 和 import 来导出、导入模块。

### 1、导出模块
创建 es6模块化/userApi.js
```js
export function getList() {
    console.log('获取数据列表')
}

export function save() {
    console.log('保存数据')
}
```

### 2、导入模块
创建 es6模块化/userComponent.js
```js
//只取需要的方法即可，多个方法用逗号分隔
import { getList, save } from "./userApi.js"

getList()
save()
```
<font color=#ff0000> 注意：这时的程序无法运行的，因为ES6的模块化无法在Node.js中执行，需要用Babel编辑成ES5后再执行。</font>

### 3、运行程序
```js
node es6模块化-dist/userComponent.js
```

## 四、ES6模块化的另一种写法(更简洁的写法)

### 1、导出模块
创建 es6模块化/userApi2.js
```js
export default {
    getList() {
        console.log('获取数据列表2')
    },
    save() {
        console.log('保存数据2')
    }
}
```

### 2、导入模块
创建 es6模块化/userComponent2.js
```js
import user from "./userApi2.js"
user.getList()
user.save()
```