// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
/* eslint-disable */
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import VueLazyload from 'vue-lazyload'
import store from './store';
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import env from './env';
const mock = false
if (mock) {
  require('./mock/api')
}
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/static/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false
Vue.prototype.$message = Message
// 根据前端的跨域方式做调整,baseURL
axios.defaults.baseURL = '/api'
// 超时时间设置
axios.defaults.timeout = 3000
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
    console.log('location.hash',location.hash)
    // if (location.hash !== '#/home' || location.hash !== '#/index') {
    if (location.hash !== '#/home') {
      window.location.href = '/#/login'
    }
    // 但凡不是正常返回数据，都应该在错误处理最后设置错误抛出。这样就不会进入then中。
    return Promise.reject(res)
  } else {
    // console.log(res.status)
    // alert(res.msg)
    this.$message.error(res.msg);
    // 不让异常情况进入then()
    // 在axios拦截器中，利用promise.reject()对异常处理
    return Promise.reject(res)
  }
},(error)=>{
  let res = error.response
  this.$message.error(res.data.message)
  return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
