<template>
    <div class="home-swiper">
        <div class="container">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="item in sliderList" :key="item.id">
                    <a href>
                        <img :src="item.img" alt />
                    </a>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
            </swiper>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
        //     autoplay: {
        // delay: 3000,
        // stopOnLastSlide: false,
        // disableOnInteraction: true,
        // }
      },
      sliderList: [
        {
          id: '42',
          img: 'static/imgs/slider/slide-1.jpg'
        },
        {
          id: '45',
          img: 'static/imgs/slider/slide-2.jpg'
        },
        {
          id: '46',
          img: 'static/imgs/slider/slide-3.jpg'
        }
      ]
    }
  },
  mounted () {},
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.swiper
    // }
  },
  methods: {}
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
@import "assets/scss/base.scss";
@import "assets/scss/reset.scss";
.home-swiper {
  .container{
    .swiper-container {
        height: 451px;
        /* .swiper-button-prev {
            left: 274px;
        } */
    }
  }

}
</style>
