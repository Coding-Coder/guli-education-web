## 一、简介 
Babel是一个广泛使用的**转码器**，**可以将ES6代码转为ES5代码**，从而在现有环境执行执行。
这意味着，你可以现在就用 ES6 编写程序，而不用担心现有环境是否支持。

## 二、安装
安装命令行转码工具

Babel提供babel-cli工具，用于命令行转码。它的安装命令如下：
```shell
npm install --global babel-cli

# 查看是否安装成功
babel --version
# 如果遇到报错 babel : 无法加载文件...，则参考：https://blog.csdn.net/qq_45615417/article/details/106117781
```

## 三、Babel的使用

### 1、初始化项目
```shell
npm init -y
```

### 2、创建文件
src/example.js

下面是一段ES6代码(箭头函数是es6的标志性写法)：
```js
// 转码前
// 定义数据
let input = [1, 2, 3]
// 将数组的每个元素 +1
input = input.map(item => item + 1)
console.log(input)
```

### 3、配置.babelrc
Babel的配置文件是`.babelrc`，存放在项目的根目录下，该文件用来设置转码规则和插件，基本格式如下。
```js
{
    "presets": [],
    "plugins": []
}
```
presets字段设定转码规则，将es2015规则加入 .babelrc：
```js
{
    "presets": ["es2015"],
    "plugins": []
}
```

### 4、安装转码器
在项目根目录中安装
```shell
npm install --save-dev babel-preset-es2015
```

### 5、转码
```shell
# 转码结果写入一个文件
mkdir dist
# --out-file 或 -o 参数指定输出文件
babel src/example.js --out-file dist/compiled.js
# 或者
babel src/example.js -o dist/compiled.js

# 对整个目录转码
mkdir dist2
# --out-dir 或 -d 参数指定输出目录
babel src --out-dir dist2
# 或者
babel src -d dist2
```