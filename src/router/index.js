import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/login/Login'
// import Home from '@/components/home/Home'
// import Detail from '@/components/detail/Detail'
// import Cart from '@/components/cart/Cart'
import Order from '@/components/order/Order'
// import OrderConfirm from '@/components/order/components/OrderConfirm'
// import OrderPay from '@/components/order/components/OrderPay'
// import OrderList from '@/components/order/components/OrderList'
// import Alipay from '@/components/order/components/Alipay'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['@/components/login/Login'], resolve)
    },
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['@/components/home/Home'], resolve)
      // redirect: '/index'
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: resolve => require(['@/components/detail/Detail'], resolve)
    },
    {
      path: '/cart',
      name: 'Cart',
      component: resolve => require(['@/components/cart/Cart'], resolve)
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('@/components/order/components/OrderConfirm')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('@/components/order/components/OrderPay')
        },
        {
          path: 'list',
          name: 'order-list',
          component: () => import('@/components/order/components/OrderList')
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: () => import('@/components/order/components/Alipay')
        }
      ]
    }
  ]
})
