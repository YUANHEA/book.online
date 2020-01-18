<template>
    <div>
        <nav-header></nav-header>
        <home-swiper></home-swiper>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from '@/comment/navheader/NavHeader.vue'
import HomeSwiper from './component/Swiper'
import ServiceBar from '@/comment/servicebar/ServiceBar.vue'
import NavFooter from '@/comment/navfooter/NavFooter.vue'
export default {
  name: 'Home',
  components: {
    NavHeader,
    HomeSwiper,
    ServiceBar,
    NavFooter
  }
}
</script>

<style>
</style>
