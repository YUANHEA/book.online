// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
/* eslint-disable */
import VueAxios from 'vue-axios'
// import env from './env';

Vue.config.productionTip = false
// 根据前端的跨域方式做调整,baseURL
axios.defaults.baseURL = '/api'
// 超时时间设置
axios.defaults.timeout = 8000
// 根据根据环境变量获取不同地址baseURL
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  // 后端返回数据要从data拿出
  let res = response.data
  // 根据不同不同状态码，进行数据返回。
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
