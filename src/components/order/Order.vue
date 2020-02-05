<template>
    <div class="order clearfix">
        <!-- <order-header title="订单确认">
            <template v-slot:tip>
                <span>{{请认真填写收货地址}}</span>
            </template>
        </order-header> -->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
// import OrderHeader from '@/comment/orderheader/OrderHeader.vue'
import ServiceBar from '@/comment/servicebar/ServiceBar.vue'
import NavFooter from '@/comment/navfooter/NavFooter.vue'
export default {
  name: 'order',
  components: {
    ServiceBar,
    NavFooter
  },
  data () {
    return {
      title: '',
      tip: ''
    }
  },
  methods: {},
  mounted () {
    // let path = this.$route.path
    // if (this.path === '/order/confirm') {
    //   this.title = '订单确认'
    //   this.tip = '请认真填写收货地址'
    // } else if (this.path === '/order/list') {
    //   this.title = '订单列表'
    //   this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    // } else if (this.path === '/order/pay') {
    //   this.title = '订单支付'
    //   this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>'
    // }
  }}
</script>
<style lang='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
@import "assets/scss/config.scss";
</style>
