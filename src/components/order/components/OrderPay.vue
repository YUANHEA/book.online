<template>
    <div class="order-pay">
        <order-header title="订单支付">
            <template v-slot:tip>
                <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
            </template>
        </order-header>
        <div class="wrapper">
            <div class="container">
                <div class="order-wrap">
                    <div class="item-order">
                        <div class="icon-succ"></div>
                        <div class="order-info">
                            <h2>订单提交成功！去付款咯～</h2>
                            <p>
                                请在
                                <span>30分</span>内完成支付, 超时后将取消订单
                            </p>
                            <p>收货信息：{{addressInfo}}</p>
                        </div>
                        <div class="order-total">
                            <p>
                                应付总额：
                                <span>{{payment}}</span>元
                            </p>
                            <p>
                                订单详情
                                <em
                                    class="icon-down"
                                    :class="{up:showDetail}"
                                    @click="showDetail=!showDetail"
                                ></em>
                            </p>
                        </div>
                    </div>
                    <div class="item-detail" v-if="showDetail">
                        <div class="item">
                            <div class="detail-title">订单号：</div>
                            <div class="detail-info theme-color">{{orderNo}}</div>
                        </div>
                        <div class="item">
                            <div class="detail-title">收货信息：</div>
                            <div class="detail-info">{{addressInfo}}</div>
                        </div>
                        <div class="item good">
                            <div class="detail-title">商品名称：</div>
                            <div class="detail-info">
                                <ul>
                                    <li v-for="(item,index) in orderItemVoList" :key="index">
                                        <img v-lazy="item.productImage" />
                                        {{item.productName}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="detail-title">发票信息：</div>
                            <div class="detail-info">电子发票 个人</div>
                        </div>
                    </div>
                </div>
                <div class="item-pay">
                    <h3>选择以下支付方式付款</h3>
                    <div class="pay-way">
                        <p>支付平台</p>
                        <div
                            class="pay pay-ali"
                            :class="{'checked':payType===1}"
                            @click="paySubmit(1)"
                        ></div>
                        <div
                            class="pay pay-wechat"
                            :class="{'checked':payType===2}"
                            @click="paySubmit(2)"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <scan-pay-code v-if="showPay" :payImg="payImg" @close ='closePayModal'></scan-pay-code>
        <modal title='支付确认' btnType='3' sureText='查看订单' cancelText='未支付' :showModal="showPayModal" @cancel='closePayConfirm' @surce='goOrderList'>
          <template v-slot:body>
            <p>您确认是否完成支付？</p>
          </template>
        </modal>
    </div>
</template>
<script>
import QRCode from 'qrcode'
import OrderHeader from '@/comment/orderheader/OrderHeader.vue'
// 导入、利用微信支付弹窗组件显示
import ScanPayCode from '@/comment/scanPayCode/ScanPayCode.vue'
import Modal from '@/comment/modal/Modal.vue'
export default {
  name: 'order-pay',
  data () {
    return {
      // 对于一进来就能取到的参数不需要到mounted中写，比如路由参数
      orderNo: this.$route.query.orderNo, // 路由中订单编号orderNo
      payment: 0, // 支付总金额
      // 不单纯只是根据接口返回数据类型定义，还要考虑展示情况。
      // 比如多个量拼接的字符串展示，用字符串量接收，定义为字符串类型接收量。
      addressInfo: '', // 收货地址信息，
      orderItemVoList: [], // 订单列表信息
      payType: 1, // 支付类型，1-支付宝2-微信
      showDetail: false, // 是否显示订单详情
      showPay: false, // 是否显示微信支付弹框
      payImg: '', // 二维码图片
      showPayModal: false, // 是否显示订单确认弹窗
      interval: '' // 计数器
    }
  },
  components: {
    OrderHeader,
    ScanPayCode,
    Modal
  },
  methods: {
    // 获取订单详情
    getOrderDetail () {
      this.axios.get(`/orders/${this.orderNo}`).then(res => {
        let shippingVo = res.shippingVo
        this.payment = res.payment
        // 多个量之间拼接的字符串
        // 用模板字符串拼接
        this.addressInfo = `${shippingVo.receiverName} ${shippingVo.receiverMobile} ${shippingVo.receiverProvince} ${shippingVo.receiverCity} ${shippingVo.receiverDistrict} ${shippingVo.receiverAddress}`
        this.orderItemVoList = res.orderItemVoList
      })
    },
    // 关闭微信弹框
    // 用户关闭弹窗，让用户选择支付状态
    // 因为此时可能因为网络问题，用户已经支付但未跳转。用户未支付。
    // 确实已经支付->查看订单！
    // 跳转到订单页面
    // 未支付->未支付
    // 关闭弹窗！
    closePayModal () {
      this.showPay = false
      this.showPayModal = true
      clearInterval(this.interval)
    },
    // 关闭微信确认弹窗
    closePayConfirm () {
      this.showPayModal = false
    },
    goOrderList () {
      this.$router.push('/order/list')
    },
    // 计数器轮询当前订单支付状态
    // 用户未关闭支付弹窗
    // 在定时器中调用接口查询支付状态，再根据接口返回不同状态处理。如果有支付成功状态就跳转到订单页面。
    loopOrderState () {
      this.interval = setInterval(() => {
        this.axios.get(`/orders/${this.orderNo}`).then((res) => {
          if (res.status === 20) {
            clearInterval(this.interval)
            this.goOrderList()
          }
        })
      }, 500)
    },
    // 支付
    paySubmit (payType) {
      this.payType = payType
      if (payType === 1) {
        window.open('/#/order/alipay?orderNo=' + this.orderNo, '_bank')
      } else {
        this.axios
          .post('/pay', {
            orderId: this.orderNo,
            orderName: 'Vue高仿小米商城',
            amount: 0.01, // 单位元
            payType: 2 // 1支付宝，2微信
          })
          .then(res => {
            // 先微信调用接口，利用插件提供字符转化语法，将字符串转base64图片
            QRCode.toDataURL(res.content)
              .then(url => {
                this.showPay = true
                this.payImg = url
                this.loopOrderState()
              })
              .catch(err => {
                console.error(err)
              })
          })
      }
    }
  },
  mounted () {
    this.getOrderDetail()
  }
}
</script>
<style lang="scss" scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
@import "assets/scss/config.scss";
.order-pay {
    .wrapper {
        background-color: #f5f5f5;
        padding-top: 30px;
        padding-bottom: 61px;
        .order-wrap {
            padding: 62px 50px;
            background-color: #fff;
            font-size: 14px;
            margin-bottom: 30px;
            .item-order {
                display: flex;
                align-items: center;
                .icon-succ {
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    background: url("/static/imgs/icon-gou.png") #80c58a
                        no-repeat center;
                    background-size: 60px;
                    margin-right: 40px;
                }
                .order-info {
                    margin-right: 248px;
                    h2 {
                        font-size: 24px;
                        color: #333333;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666666;
                        span {
                            color: #ff6700;
                        }
                    }
                }
                .order-total {
                    & > p:first-child {
                        margin-bottom: 30px;
                    }
                    span {
                        font-size: 28px;
                        color: #ff6700;
                    }
                    .icon-down {
                        display: inline-block;
                        width: 14px;
                        height: 10px;
                        background: url("/static//imgs/icon-down.png") no-repeat
                            center;
                        background-size: contain;
                        margin-left: 9px;
                        transition: all 0.5s;
                        cursor: pointer;
                        &.up {
                            transform: rotate(180deg);
                        }
                    }
                    .icon-up {
                        transform: rotate(180deg);
                    }
                }
            }
            .item-detail {
                border-top: 1px solid #d7d7d7;
                padding-top: 47px;
                padding-left: 130px;
                font-size: 14px;
                margin-top: 45px;
                .item {
                    margin-bottom: 19px;
                    .detail-title {
                        float: left;
                        width: 100px;
                    }
                    .detail-info {
                        display: inline-block;
                        img {
                            width: 30px;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
        .item-pay {
            padding: 26px 50px 72px;
            background-color: #ffffff;
            color: #333333;
            h3 {
                font-size: 20px;
                font-weight: 200;
                color: #333333;
                padding-bottom: 24px;
                border-bottom: 1px solid #d7d7d7;
                margin-bottom: 26px;
            }
            .pay-way {
                font-size: 18px;
                .pay {
                    display: inline-block;
                    width: 188px;
                    height: 64px;
                    border: 1px solid #d7d7d7;
                    cursor: pointer;
                    &:last-child {
                        margin-left: 20px;
                    }
                    &.checked {
                        border: 1px solid #ff6700;
                    }
                }
                .pay-ali {
                    background: url("/static//imgs/pay/icon-ali.png") no-repeat
                        center;
                    background-size: 103px 38px;
                    margin-top: 19px;
                }
                .pay-wechat {
                    background: url("/static/imgs/pay/icon-wechat.png")
                        no-repeat center;
                    background-size: 103px 38px;
                }
            }
        }
    }
}
</style>
