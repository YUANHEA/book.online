<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">闲置书商城</a>
                    <!-- <a href="#">MUI</a> -->
                    <a href="#">发布闲置书协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="userName">{{userName}}</a>
                    <a href="javascript:;" v-if="!userName" @click="login">登录</a>
                    <a href="javascript:;" v-if="userName" @click="logout">退出</a>
                    <a href="/#/order/list">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>购物车{{cartCount}}
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <!-- 用a标签做logo图片块级元素，因为能在一行inline-block，自带point -->
                    <a href="#"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <!-- 如果文字就用span做块级 -->
                        <span>图书</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="item in productList" :key="item.id">
                                    <a :href="'/#/product/'+item.id">
                                        <!-- <img class="pro-img" :src="item.mainImage" alt="#" /> -->
                                        <img class="pro-img" v-lazy="item.cover" alt="#" />
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电子书</span>
                    </div>
                    <div class="item-menu">
                        <span>网络文学</span>
                        <div class="children">
                            <img src alt />
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" />
                        <a href></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NavHeader',
  data () {
    return {
      productList: []
      //   currency: ''
      //   userName: ''
      //   userName: this.$store.state.userName
    }
  },
  //   过滤器，用于一些常见的文本格式化
  filters: {
    currency: function (value) {
      // 判空处理！
      if (!value) {
        return '0.00'
      }
      //   return 格式化数值量
      return '￥' + value.toFixed(2) + '元'
    }
  },
  mounted () {
    this.getProduction()
    // 通过看路由中是否有params参数传来，就知道是否为login页面跳转来
    let params = this.$route.params
    if (params && params.from === 'login') {
      this.getCartCount()
    }
    // console.log(this.userName)
  },
  computed: {
    // userName () {
    // //   console.log(this.$store.state.username)
    //   return this.$store.state.userName
    // },
    // cartCount () {
    // //   console.log(this.$store.state.username)
    //   return this.$store.state.cartCount
    // }
    ...mapState([
      'userName', 'cartCount'
    ])

  },
  methods: {
    getProduction () {
      this.axios
        .get('/products/', {
          params: {
            categoryId: '1',
            pageSize: 6
          }
        })
        .then(result => {
          //   前端截取部分数据
          if (result.list.length >= 6) {
            //   slice(截取部分数据)
            this.productList = result.list.slice(0, 6)
          }
        //   this.productList = result.list
        })
    },
    login () {
      this.$router.push('/login')
    },
    logout () {
      this.axios.post('/user/logout').then(() => {
        this.$message({
          message: '退出成功!',
          type: 'success'
        })
      })
      this.$cookie.set('userId', '', { expires: '-1' })
      this.saveUserName('')
      this.saveCartCount('0')
    },
    // 存储值
    ...mapActions([
      'saveUserName', // also supports payload `this.nameOfAction(amount)`
      'saveCartCount'
    ]),
    goToCart () {
      this.$router.push('/cart')
    },
    getCartCount () {
      this.axios.get('/carts').then(res => {
        // console.log('carts', res)
        this.$store.dispatch('saveCartCount', res.cartTotalQuantity)
      })
    }
  }
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
@import "assets/scss/base.scss";
/* 一般用前后对接，如果多个子级则往前。公共、独特用单个写。最内层多直接对标签设置样式。
    之前分模块再&,控制三级之内，公共、独特用单个写。*/
.nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
        /* width: 1226px;
        margin-right: auto;
        margin-left: auto; */
        /* display: flex;
        justify-content: space-between; */
        @include flex();
        a {
            display: inline-block;
            color: #b0b0b0;
            margin-right: 17px;
        }
    }
}
.nav-header {
    height: 112px;
    line-height: 112px;
    .container {
        /* width: 1226px; */
        height: 112px;
        /* margin-right: auto;
        margin-left: auto; */
        @include flex();
        position: relative;
        .header-logo {
            display: inline-block;
            width: 55px;
            height: 55px;
            /* overflow: hidden; */
            background-color: #ff6600;
            a {
                display: inline-block;
                width: 110px;
                height: 55px;
                /* overflow: hidden; */
                &:before {
                    /* 伪类是没有内容，但需要占位。
                    content:' '很重要 */
                    content: " ";
                    /* display: inline-block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    background: url("../../../public/imgs/mi-logo.png")
                        no-repeat center;
                    background-size: 55px; */
                    @include bgImg(
                        55px,
                        55px,
                        "../../../public/imgs/mi-logo.png",
                        55px
                    );
                    transition: margin 0.2s;
                }
                &:after {
                    content: " ";
                    /* display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url("../../../public/imgs/mi-home.png")
                        no-repeat center;
                    background-size: 55px; */
                    @include bgImg(
                        55px,
                        55px,
                        "../../../public/imgs/mi-home.png",
                        55px
                    );
                }
                &:hover:before {
                    margin-left: -55px;
                    transition: margin 0.2s;
                }
            }
        }
        .header-menu {
            display: inline-block;
            width: 643px;
            padding-left: 209px;
            .item-menu {
                display: inline-block;
                color: #333333;
                line-height: 112px;
                font-weight: bold;
                font-size: 16px;
                margin-right: 20px;
                &:hover {
                    color: $colorA;
                    .children {
                        height: 220px;
                        opacity: 1;
                        z-index: 9;
                        background-color: #fff;
                    }
                }
                .children {
                    z-index: 9;
                    opacity: 0;
                    position: absolute;
                    top: 112px;
                    left: 0;
                    width: 1226px;
                    height: 0;
                    border-top: 1px solid #e5e5e5;
                    box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                    /* 绝对定位不能与flex布局同设置 */
                    /* @include flex(); */
                    overflow: hidden;
                    ul{
                        @include flex();
                        .product {
                            position: relative;
                            display: inline-block;
                            flex: 1;
                            /* width: 16.6%; */
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            a {
                                display: inline-block;
                            }
                            img {
                                width: auto;
                                height: 111px;
                                margin-top: 15px;
                            }
                            .pro {
                                &-img {
                                    /* width: 100%; */
                                    /* 图片一直影响外围容器，不能均分宽度，因此需要知道图片高度 */
                                    /* display: inline-block;
                                    width: auto; */
                                    height: 137px;
                                    /* margin-top:26px; */
                                }
                                &-name,
                                &-price {
                                    display: block;
                                    height: 30px;
                                    line-height: 30px;
                                    text-align: center;
                                }
                                &-name {
                                    color: $colorB;
                                }
                                &-price {
                                    color: $colorA;
                                }
                            }
                            &::after {
                                content: "";
                                position: absolute;
                                top: 29px;
                                right: 0;
                                border: 0.3px solid $colorF;
                                height: 100px;
                                width: 0.3px;
                            }
                            &:last-child:after {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
        .header-search {
            .wrapper {
                height: 50px;
                border: 1px solid #e0e0e0;
                @include flex();
                input {
                    display: inline-block;
                    height: 100%;
                    border: none;
                    border-right: 1px solid #e0e0e0;
                    padding-left: 13px;
                    box-sizing: border-box;
                }
                a {
                    /* display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url('../../../public/imgs/icon-search.png') no-repeat center;
                    background-size: 19px 19px; */
                    @include bgImg(
                        55px,
                        55px,
                        "../../../public/imgs/icon-search.png",
                        19px
                    );
                }
            }
        }
    }
}
.my-cart {
    width: 110px;
    height: 39px;
    background-color: #ff6600;
    text-align: center;
    color: #ffffff !important;
    .icon-cart {
        /* display: inline-block;
        width: 16px;
        height: 12px;
        background: url("../../../public/imgs/icon-cart-checked.png") no-repeat
            center;
        background-size: contain; */
        @include bgImg(
            16px,
            12px,
            "../../../public/imgs/icon-cart-checked.png",
            contain
        );
        margin-right: 4px;
    }
}
</style>
