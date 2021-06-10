### NUXT目录结构
```text
. 
├── .nuxt // 前端编译后的文件
├── assets // 资源目录(用于组织未编译的静态资源如 LESS、SASS、img 或 JavaScript)
├── components // 组件目录(用于组织应用的 Vue.js 组件。Nuxt.js 不会扩展增强该目录下 Vue.js 组件，即这些组件不会像页面组件那样有 asyncData 方法的特性。)
├── layouts // 布局目录(用于组织应用的布局组件。)
|     └── default.vue //定义网页的布局方式
├── middleware // 
├── pages // 项目中的页面目录(用于组织应用的路由及视图。Nuxt.js 框架读取该目录下所有的 .vue 文件并自动生成对应的路由配置。)
├── plugins // 插件目录(用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。)
├── static // 静态资源
├── store // 存储(放脚本文件) 
└── nuxt.config.js // 核心配置文件(文件用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。)
```

### 幻灯片插件安装
```shell
npm install vue-awesome-swiper
```