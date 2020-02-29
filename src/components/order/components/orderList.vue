<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-box">
                    <loading v-if="loading"></loading>
                    <div class="order" v-for="(order,index) in list" :key="index">
                        <div class="order-title">
                            <div class="item-info fl">
                                {{order.createTime}}
                                <span>|</span>
                                {{order.receiverName}}
                                <span>|</span>
                                订单号：{{order.orderNo}}
                                <span>|</span>
                                {{order.paymentTypeDesc}}
                            </div>
                            <div class="item-money fr">
                                <span>应付金额：</span>
                                <span class="money">{{order.payment}}</span>
                                <span>元</span>
                            </div>
                        </div>
                        <div class="order-content clearfix">
                            <div class="good-box fl">
                                <div
                                    class="good-list"
                                    v-for="(item,i) in order.orderItemVoList"
                                    :key="i"
                                >
                                    <div class="good-img">
                                        <img v-lazy="item.bookImage" alt />
                                    </div>
                                    <div class="good-name">
                                        <div class="p-name">{{item.bookName}}</div>
                                        <div
                                            class="p-money"
                                        >{{item.currentUnitPrice + 'X' + item.quantity}}元</div>
                                    </div>
                                </div>
                            </div>
                            <div class="good-state fr" v-if="order.status===20">
                                <a href="javascript:;">{{order.statusDesc}}</a>
                            </div>
                            <div class="good-state fr" v-else>
                                <a
                                    href="javascript:;"
                                    @click="goPay(order.orderNo)"
                                >{{order.statusDesc}}</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderLPnt">
                  <el-pagination
                    class="pagination"
                    background
                    layout="prev, pager, next"
                    @current-change="handleCurrentChange"
                    :currentPage="pageNum"
                    :pageSize="pageSize"
                    :total="total">
                  </el-pagination>
                </div>
                <div class="elBtn" v-if="false">
                    <el-button
                        type="primary"
                        :loading="loading"
                        @click="loadingMore"
                        v-show="showElBtn"
                    >加载中</el-button>
                </div>
                <div
                    v-if="false"
                    class="load-more"
                    v-infinite-scroll="scrollMore"
                    infinite-scroll-disabled="busy"
                    infinite-scroll-distance="400"
                >
                    <img src="static/imgs/loading-svg/loading-bubbles.svg" alt="#" v-show="showElBtn" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import OrderHeader from '@/comment/orderheader/OrderHeader'
import Loading from '@/comment/loading/Loading'
import NoData from '@/comment/nodata/NoData'
import { Pagination, Button } from 'element-ui'
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: 'order-list',
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button
  },
  data () {
    return {
      loading: false, // 显示加载中
      list: [], // 订单数据列表
      pageSize: 10, // 每页显示多少数据
      pageNum: 1, // 当前页
      total: 0, // 订单数据总数
      showElBtn: true, // 是否显示加载按钮
      hasNextPage: true, // 是否有下一页
      busy: true
    }
  },
  directives: { infiniteScroll },
  mounted () {
    this.getOrderList()
  },
  methods: {
    // 获取订单列表
    getOrderList () {
      this.busy = true
      this.loading = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: 10,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.busy = false
          this.loading = false
          this.list = this.list.concat(res.list)
          // this.list = res.list
          this.total = res.total
          this.showElBtn = res.hasNextPage
        })
        .catch(() => {
          this.loading = false
        })
    },
    // 跳转到支付页面
    goPay (orderNo) {
      // 三种路由跳转方式
      // this.$router.push('/order/pay')
      /* this.$router.push({
          name:'order-pay',
          query:{
            orderNo
          }
        }) */
      // order页面显示要获取到路由中query参数量orderNo，用于查询某条订单
      this.$router.push({
        path: '/order/pay',
        query: {
          orderNo
        }
      })
    },
    // 当前页切换
    handleCurrentChange (val) {
      this.pageNum = val
      this.getOrderList()
    },
    // 加载更多订单数据
    loadingMore () {
      this.loading = true
      this.pageNum++
      this.getOrderList()
    },
    // 获取订单列表
    getOrder () {
      this.busy = true
      this.loading = true
      this.axios
        .get('/orders', {
          params: {
            pageSize: 10,
            pageNum: this.pageNum
          }
        })
        .then(res => {
          this.busy = false
          this.loading = false
          this.list = this.list.concat(res.list)
          this.showElBtn = res.hasNextPage
          if (res.hasNextPage) {
            this.busy = false
          } else {
            this.busy = true
          }
        })
        .catch(() => {
          this.loading = false
        })
    },
    // 滚动加载更多
    scrollMore () {
      // 将busy设置为繁忙，防止在那段刷新距离多次请求
      this.busy = true
      if (this.showElBtn) {
        // 利用定时器减少这种频繁请求
        setTimeout(() => {
          this.pageNum++
          this.getOrder()
        }, 500)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/config.scss";
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
.order-list {
    .wrapper {
        background-color: $colorJ;
        padding-top: 33px;
        padding-bottom: 110px;
        .container {
            .order-box {
                .order {
                    @include border();
                    background-color: $colorG;
                    margin-bottom: 31px;
                    &:last-child {
                        margin-bottom: 0;
                    }
                    .order-title {
                        @include height(74px);
                        background-color: $colorK;
                        padding: 0 43px;
                        font-size: 16px;
                        color: $colorC;
                        .item-info {
                            span {
                                margin: 0 9px;
                            }
                        }
                        .money {
                            font-size: 26px;
                            color: $colorB;
                        }
                    }
                    .order-content {
                        padding: 0 43px;
                        .good-box {
                            width: 88%;
                            .good-list {
                                display: flex;
                                align-items: center;
                                height: 145px;
                                .good-img {
                                    width: 112px;
                                    img {
                                        width: 100%;
                                    }
                                }
                                .good-name {
                                    font-size: 20px;
                                    color: $colorB;
                                }
                            }
                        }
                        .good-state {
                            @include height(145px);
                            font-size: 20px;
                            color: $colorA;
                            a {
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .pagination {
                text-align: right;
            }
            .orderLPnt
                >>> .el-pagination.is-background
                .el-pager
                li:not(.disabled).active {
                background-color: #ff6600;
            }
            .elBtn {
                text-align: center;
            }
            .el-button--primary {
                background-color: #ff6600;
                border-color: #ff6600;
            }
            .load-more,
            .scroll-more {
                text-align: center;
            }
        }
    }
}
</style>
