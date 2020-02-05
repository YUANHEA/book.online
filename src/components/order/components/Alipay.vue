<template>
  <div class="ali-pay">
    <loading v-if="loading"></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>
<script>
import Loading from '@/comment/loading/Loading.vue'
export default{
  name: 'alipay',
  components: {
    Loading
  },
  data () {
    return {
      orderId: this.$route.query.orderNo,
      content: '',
      loading: true
    }
  },
  mounted () {
    this.paySubmit()
  },
  methods: {
    paySubmit () {
      this.axios.post('/pay', {
        orderId: this.orderId,
        orderName: 'Vue高仿小米商城',
        amount: 0.01,
        payType: 1
      }).then((res) => {
        // 渲染html代码，执行html代码中脚本。
        this.content = res.content
        // 由于vhtml渲染html代码需要时间，因此对于支付表单提交，置于定时器中写。
        // content是html源码，渲染到页面上后自动跳转到支付页面
        setTimeout(() => {
          document.forms[0].submit()
        }, 100)
      })
    }
  }
}
// export default{
//   name: 'alipay',
//   components: {
//     Loading
//   },
//   data () {
//     return {
//       orderId: this.$route.query.orderNo,
//       content: '',
//       loading: true
//     }
//   },
//   mounted () {
//     this.paySubmit()
//   },
//   methods: {
//     paySubmit () {
//       this.axios.post('/pay', {
//         orderId: this.orderId,
//         orderName: 'Vue高仿小米商城',
//         amount: 0.01, // 单位元
//         payType: 1 // 1支付宝，2微信
//       }).then((res) => {
//         this.content = res.content
//         setTimeout(() => {
//           document.forms[0].submit()
//         }, 1000)
//       })
//     }
//   }
// }
</script>
