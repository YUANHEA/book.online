<template>
    <div class="adsbox">
        <div class="container">
            <a :href="'/#/detail/'+item.id" v-for="item in adsList" :key="item.id">
                <img v-lazy="item.img" alt />
            </a>
        </div>
        <div class="container">
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'https://s2.ax1x.com/2020/02/27/3dY3Js.jpg'" alt />
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
          // img: 'https://s2.ax1x.com/2020/02/27/3dJTqU.jpg'
          img: 'https://s2.ax1x.com/2020/02/27/3dY3Js.jpg'
        },
        {
          id: 48,
          img: 'https://s2.ax1x.com/2020/02/27/3dJqIJ.jpg'
        },
        {
          id: 45,
          img: 'https://s2.ax1x.com/2020/02/27/3dJba4.jpg'
        },
        {
          id: 47,
          img: 'https://s2.ax1x.com/2020/02/27/3dJHZF.jpg'
        }
      ]
    }
  },
  mounted () {},
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
