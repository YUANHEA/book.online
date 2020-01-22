<template>
    <div>
        <nav-header></nav-header>
        <home-swiper></home-swiper>
        <ads-box></ads-box>
        <Commodity></Commodity>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '@/comment/navheader/NavHeader.vue'
import HomeSwiper from './component/Swiper'
import AdsBox from './component/AdsBox'
import Commodity from './component/Commodity'
import ServiceBar from '@/comment/servicebar/ServiceBar.vue'
import NavFooter from '@/comment/navfooter/NavFooter.vue'
export default {
  name: 'Home',
  components: {
    NavHeader,
    HomeSwiper,
    AdsBox,
    Commodity,
    ServiceBar,
    NavFooter
  }
}
</script>

<style>
</style>
