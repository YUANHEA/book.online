<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../../../public/imgs/logo-footer.png" alt />
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a>
            <span>|</span>
            <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a>
            <span>|</span>
            <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a>
            <span>|</span>
            <a
                href="https://coding.imooc.com/class/343.html"
                target="_blank"
            >微信支付专项课程（H5+小程序+Node+Mongo）</a>
        </div>
        <div class="footer-copyright">
            Copyright ©2019 <span>mi.futurefe.com</span> All Rights Reserved.
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavFooter',
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
.footer{
    background-color: $colorB;
    font-size: 16px;
    padding: 50px 0;
    text-align: center;
    color: $colorD;
    &-logo{
        margin-bottom: 31px;
        img{
            text-align: center;
            width: 53px;
            height: 36px;
            margin-bottom: 16px;
        }
        p{
            text-align: center;
            color: $colorD;
        }
    }
    &-link{
        margin-bottom: 13px;
        a{
            color: $colorD;
        }
    }
}
</style>
