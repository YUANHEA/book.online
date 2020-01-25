<template>
    <div>
        <nav-header></nav-header>
        <home-swiper></home-swiper>
        <ads-box></ads-box>
        <Commodity @addCart="addCart"></Commodity>
        <service-bar></service-bar>
        <modal
          title="提示"
          btnType="1"
          sureText="查看购物车"
          :showMode="showMode"
          @cancel="cancel"
          @surce="surce"
        >
            <template slot="body">
                <p>商品添加成功！</p>
            </template>
        </modal>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '@/comment/navheader/NavHeader.vue'
import HomeSwiper from './component/Swiper'
import AdsBox from './component/AdsBox'
import Commodity from './component/Commodity'
import Modal from '@/comment/modal/Modal'
import ServiceBar from '@/comment/servicebar/ServiceBar.vue'
import NavFooter from '@/comment/navfooter/NavFooter.vue'
export default {
  name: 'Home',
  data () {
    return {
      showMode: true
    }
  },
  components: {
    NavHeader,
    HomeSwiper,
    AdsBox,
    Commodity,
    Modal,
    ServiceBar,
    NavFooter
  },
  methods: {
    addCart () {
      this.showMode = true
    },
    surce () {
      this.showMode = false
    },
    cancel () {
      this.showMode = false
    }
  }
}
</script>

<style>
</style>
