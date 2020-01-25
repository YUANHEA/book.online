<template>
    <div class="commodity">
        <div class="container">
            <h2>手机</h2>
            <div class="wrapper">
                <!-- 但凡有flex子级，必定有flex父级 -->
                <div class="banner-left">
                    <a href>
                        <img src="static/imgs/mix-alpha.jpg" alt />
                    </a>
                </div>
                <div class="list-box">
                    <!-- 多行列，用多维数组做数据，vfor循环多层div/ulli。 -->
                    <div class="list" v-for="(items,index) in productList" :key="index">
                        <div class="item"  v-for="(item,index) in items" :key="index">
                            <!-- 动态绑定样式，:class="{'new-pro': index % 2==0}"。有{'单引号':键值对}，大括号，键值对 -->
                            <span :class="{'new-pro': index % 2==0}">新品</span>
                            <div class="item-img">
                                <img
                                    :src="item.mainImage"
                                    alt="#"
                                />
                            </div>
                            <div class="item-info">
                                <h3 >{{item.name}}</h3>
                                <p>{{item.subtitle}}</p>
                                <p class="price" @click="addCart()">{{item.price}}元</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Commodity',
  components: {},
  data () {
    return {
      productList: []
    }
  },
  mounted () {
    this.getProduct()
  },
  computed: {},
  methods: {
    getProduct () {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 14
          }
        })
        .then(result => {
          // 二维数组书写
          result.list = result.list.slice(6, 14)
          this.productList = [result.list.slice(0, 4), result.list.slice(4, 8)]
        //   console.log(this.productList)
        })
    },
    addCart () {
      this.$emit('addCart')
    }
  }
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
@import "assets/scss/config.scss";
.commodity {
    padding-top: 30px;
    padding-bottom: 50px;
    background-color: $colorJ;
    .container {
        h2{
            margin-bottom: 20px;
        }
        .wrapper {
            @include flex();
            .banner-left {
                width: 224px;
                img {
                    width: 100%;
                    height: 619px;
                }
            }
            .list-box {
                /* 能用flex搞定，就不mg写 */
                /* margin-left:  */
                width: 986px;
                height: 619px;
                /* @include flex(); */
                .list {
                    margin-bottom: 14px;
                     @include flex();
                    .item {
                        width: 236px;
                        /* 如果容器里面，全部水平/垂直居中，那么给容器设置居中 */
                        height: 302px;
                        text-align: center;
                        background-color: #fff;
                        span{
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            font-size: 14px;
                            color: white;
                            &.new-pro{
                                background-color: #7ECF68;
                            }
                            &.kill-pro{
                                background-color: #E82626;
                            }
                        }
                        .item-img {
                            width: 100%;
                            height: 195px;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .item-info{
                            h3{
                                font-size: 14px;
                                font-weight: 700;
                                margin-bottom: 6px;
                            }
                            p{
                                color: $colorD;
                                margin-bottom: 13px;
                            }
                            .price{
                                display: inline-block;
                                font-size: 14px;
                                color: #f20a0a;
                                margin-bottom: 13px;
                                font-weight: 700;
                                height: 30px;
                                line-height: 30px;
                                /* vertical-align: middle; */
                                &::after{
                                    content: ' ';
                                    @include bgImg(22px,22px,'/static/imgs/icon-cart-hover.png');
                                    margin-left: 5px;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
