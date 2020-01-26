<template>
    <div class="adsbox">
        <div class="container">
            <a :href="'/#/product/'+item.id" v-for="item in adsList" :key="item.id">
                <img v-lazy="item.img" alt />
            </a>
        </div>
        <div class="container">
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/static/imgs/banner-1.png'" alt />
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeAbsBox',
  components: {},
  data () {
    return {
      adsList: [
        {
          id: 33,
          img: '/static/imgs/ads/ads-1.png'
        },
        {
          id: 48,
          img: '/static/imgs/ads/ads-2.jpg'
        },
        {
          id: 45,
          img: '/static/imgs/ads/ads-3.png'
        },
        {
          id: 47,
          img: '/static/imgs/ads/ads-4.jpg'
        }
      ]
    }
  },
  mounted () {},
  computed: {},
  methods: {}
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
.adsbox {
    margin-top: 14px;
    .container {
        @include flex();
        a {
            margin-bottom: 31px;
            img {
                width: 296px;
                height: 167px;
            }
        }
        .banner {
          margin-bottom: 50px;
            img {
                width: 100%;
            }
        }
    }
}
</style>
