## BY LXY

## 1、前端框架入口
- index.html
- src/main.js

## 2、前端页面环境使用的框架(模板)
主要是基于两种技术实现出来的

vue-admin-template模板 = vue + element-ui

## 3、项目目录结构
```text
. 
├── build // 构建脚本(放项目构建用的脚本文件)
├── config // 全局配置(项目中最基本的设置信息)
├── node_modules // 项目依赖模块
├── src //项目源代码
├── static // 静态资源
└── package.jspon // 项目信息和依赖配置
```

```text
src 
├── api // 各种接口(定义调用方法(API))
├── assets // 图片等资源(放静态资源(css文件、js文件、图片))
├── components // 各种公共组件。非公共组件在各自view下维护(组件，额外的插件)
├── icons //svg icon 
├── router // 路由表 
├── store // 存储(放脚本文件)
├── styles // 各种样式(放样式文件)
├── utils // 公共工具类。非公共工具，在各自view下维护 
├── views // 各种layout-项目中具体的页面(.vue的后缀)
├── App.vue //***项目顶层组件*** 
├── main.js //***项目入口文件***
└── permission.js //认证入口
```