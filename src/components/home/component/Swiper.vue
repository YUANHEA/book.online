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
            <div class="nav-menu">
                <ul class="menu-wrap">
                    <li class="menu-item">
                        <a href="javascript:;">手机 电话卡</a>
                        <div class="children">
                            <ul v-for="(items, index) in menuList" :key="index">
                                <li v-for="item in items" :key="item.id">
                                    <a href>
                                        <img :src="item?item.img:'static/imgs/item-box-1.png'" alt />
                                        <span>{{item?item.name:'小米9'}}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电视 盒子</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">笔记本 平板</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">家电 插线板</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">出行 穿戴</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">智能 路由器</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">电源 配件</a>
                    </li>
                    <li class="menu-item">
                        <a href="javascript:;">生活 箱包</a>
                    </li>
                </ul>
            </div>
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
        loop: true,
        autoplay: true,
        effect: 'cube',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        }
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
        },
        {
          id: '47',
          img: 'static/imgs/slider/slide-4.jpg'
        },
        {
          id: '49',
          img: 'static/imgs/slider/slide-5.jpg'
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: 'static/imgs/item-box-1.png',
            name: '小米CC9'
          },
          {
            id: 31,
            img: 'static/imgs/item-box-2.png',
            name: '小米8青春版'
          },
          {
            id: 32,
            img: 'static/imgs/item-box-3.jpg',
            name: 'Redmi K20 Pro'
          },
          {
            id: 33,
            img: 'static/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
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
@import "assets/scss/base.scss";
@import "assets/scss/config.scss";
@import "assets/scss/mixin.scss";
.home-swiper {
    .container {
        position: relative;
        .swiper-container {
            height: 451px;
            .swiper-button-prev {
                left: 274px;
            }
        }
        .nav-menu {
            position: absolute;
            top: 0;
            left: 0;
            width: 264px;
            height: 451px;
            z-index: 5;
            /* background-color: $colorC; */
            background-color: rgba(85, 88, 90, 0.49);
            padding: 33px 0;
            box-sizing: border-box;
            /* opacity: 0.7; */
            .menu-wrap {
                .menu-item {
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                    padding: 0 30px;
                    a {
                        position: relative;
                        color: $colorG;
                        display: block;
                        &:after {
                            content: "";
                            position: absolute;
                            top: 17.5px;
                            right: 0px;
                            @include bgImg(
                                10px,
                                15px,
                                "/static/imgs/icon-arrow.png"
                            );
                        }
                    }
                    &:hover {
                        background-color: $colorA;
                        .children {
                          display:block;
                        }
                    }
                    .children {
                        position: absolute;
                        top: 0;
                        left: 264px;
                        width: 962px;
                        height: 451px;
                        z-index: 5;
                        background-color: #fff;
                        display: none;
                        ul {
                            @include flex();
                            height: 75px;
                            li {
                                flex: 1;
                                height: 75px;
                                line-height: 75px;
                                padding-left: 23px;
                                /* vertical-align: center; */
                            }
                            a {
                                color: $colorB;
                                font-size: 14px;
                                @include flex(columns,flex-start);
                            }
                            img {
                                width: 42px;
                                height: 35px;
                                /* vertical-align: center !important; */
                                margin-right: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
