import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import cookie from 'js-cookie'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:9001', // api的base_url
  timeout: 20000 // 请求超时时间
})

//创建拦截器  http request 拦截器
service.interceptors.request.use(
  config => {
    //debugger
    //判断cookie里面是否有名称是guli_token数据
    if (cookie.get('guli_token')) {
      //把获取cookie值放到header里面
      config.headers['token'] = cookie.get('guli_token');
    }
    return config
  },
  err => {
    return Promise.reject(err);
  }
)

export default service