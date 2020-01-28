<template>
    <div class="product-param" :class="{'is-fixed': isFixed}">
        <div class="container">
            <div class="pro-title">小米9</div>
            <div class="pro-param">
                <a href="javascript:;">概述</a>
                <span>|</span>
                <a href="javascript:;">参数</a>
                <span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProductParam',
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight () {
      let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop
      if (scrollTop > 152) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.initHeight)
  }
}
</script>

<style lang="scss" scoped>
@import "assets/scss/config.scss";
@import "assets/scss/mixin.scss";
@import "assets/scss/base.scss";
.is-fixed {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
}
.product-param {
    background-color:$colorG;
    .container {
        @include flex();
        height: 70px;
        line-height: 70px;
        border-top: 1px solid $colorH;
        .pro {
            &-title {
                font-size: $fontH;
                color: $colorB;
                font-weight: bold;
            }
            &-param {
                font-size: $fontJ;
                span {
                    margin: 0 10px;
                }
                a {
                    color: $colorC;
                }
            }
        }
    }
}
</style>
