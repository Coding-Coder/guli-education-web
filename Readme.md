# 谷粒商城前端

本项目是根据 [b站视频教程](https://www.bilibili.com/video/BV1y7411y7am) 完成的一个分布式项目

- [谷粒商城前端代码](https://github.com/Coding-Coder/guli-education-web)
- [谷粒商城后端代码](https://github.com/Coding-Coder/guli-education)

- 后台系统(guli-vue-admin)使用vue-admin-template
- 前台系统(guli-vue-front)使用Nuxt

## 系统模块
<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/20200314174755805.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/>
      	</td>
    </tr>        
</table>

## 系统架构  
<table>
   <tr>
       <td><img src="https://img-blog.csdnimg.cn/20200314174813599.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2JhaWR1XzMzMjY3MDc5,size_16,color_FFFFFF,t_70"/></td>
   </tr>        
</table>

## 项目涉及的技术栈

### 前端
- [Vue.js](https://cn.vuejs.org/)
- [Nuxt.js](https://nuxtjs.org/) (服务端渲染技术，基于Vue.js的轻量级应用框架)
- [vue-admin-template-master](https://github.com/aoaoms/vue-admin-template-master)
- [Element-UI](https://element.eleme.cn/#/zh-CN/component/layout)
- [webpack](https://webpack.docschina.org/)
- [node.js](https://nodejs.org/zh-cn/)
- [ECharts](https://echarts.apache.org/)
- 使用Es6的开发规范

### 后端
- [Mybatis-Plus](https://mp.baomidou.com/)
- [SpringBoot(2.2.1.RELEASE)](https://spring.io/projects/spring-boot/)
- [Spring Security](https://spring.io/projects/spring-cloud-security)
- [SpringCloud(Hoxton.RELEASE)](https://www.springcloud.cc/spring-reference.html)
- [SpringCloudAlibaba(0.2.2.RELEASE)](https://spring.io/projects/spring-cloud-alibaba)
- [Spring-Cloud-Alibaba-Nacos(服务发现+配置中心+消息总线)](https://nacos.io/zh-cn/index.html)
- [OpenFeign(服务调用)](https://spring.io/projects/spring-cloud-openfeign)
- [Hystrix(熔断器)](https://cloud.spring.io/spring-cloud-static/spring-cloud-netflix/1.3.5.RELEASE/single/spring-cloud-netflix.html#_circuit_breaker_hystrix_clients)
- [Spring-Cloud-Gateway(服务网关)](https://spring.io/projects/spring-cloud-gateway)
- [EasyExcel](https://www.yuque.com/easyexcel/doc/easyexcel)
- [OAuth2](https://oauth.net/2/)

### 数据库
- [MySQL](https://www.mysql.com/)
- [Redis](https://redis.io/)

### 其他
- [Nginx](http://nginx.org/)
- [Canal数据同步工具:把远程库的表内容同步到本地库中](https://github.com/alibaba/canal)
- [微信登录](https://open.weixin.qq.com/)
- [阿里云对象存储OSS](https://help.aliyun.com/document_detail/32008.htm?spm=a2c4g.11186623.2.6.4d4df2eeAielrM#concept-32008-zh)
- [阿里云视频点播VOD](https://help.aliyun.com/document_detail/57756.htm?spm=a2c4g.11186623.2.44.54d779ddQ3RkV9#multiTask1210)
- [阿里云短信服务SMS](https://help.aliyun.com/document_detail/102715.html?spm=5176.8195934.J_5834642020.6.61de4378h4ADZX)
- [阿里图标库iconfont](https://www.iconfont.cn/?spm=a313x.7781069.1998910419.d4d0a486a)

## 前台系统(guli-vue-front)
### 项目说明
基于`nuxt`的在线教育网站，使用element-ui做组件，axios请求获取数据

### 项目功能
- 幻灯片播放
- 阿里云视频点播播放视频
- 课程购买
- 注册、登录、wx登录

### 启动方式
```shell
git clone https://github.com/Coding-Coder/guli-education-web.git
cd guli-vue-front

# 修改npm源
npm install --registry=https://registry.npm.taobao.org

npm install
npm run dev
```

## 后台系统(guli-vue-admin)
### 项目说明
基于`vue-admin-template`开发的在线教育后台管理系统，使用element-ui做组件，axios请求数据，使用Echarts做数据统计

### 启动方式
```shell
git clone https://github.com/Coding-Coder/guli-education-web.git
cd guli-vue-admin

npm install
npm run dev
```