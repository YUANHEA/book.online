<template>
    <transition name="slide">
        <div class="modal" v-show="showMode">
          <div class="mask"></div>
          <div class="dialog">
              <div class="dialog-header">
                <span>{{title}}</span>
                <!-- a标签做点击外层/直接做点击元素比如btn -->
                <a class="icon-close" href="javascript:;" @click="cancel()"></a>
              </div>
              <div class="dialog-body">
                <slot name="body"></slot>
              </div>
              <div class="dialog-footer">
                <a class="btn" href="javascript:;" v-if="btnType==1" @click="surce()">{{sureText}}</a>
                <a class="btn" href="javascript:;" v-if="btnType==2" @click="cancel()">{{cancelText}}</a>
                <div class="btn-group" v-if="btnType==3">
                  <a class="btn" href="javascript:;"  @click="surce()">{{sureText}}</a>
                  <a class="btn" href="javascript:;" @click="cancel()">{{cancelText}}</a>
                </div>
              </div>
          </div>
      </div>
    </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // 弹框标题
    title: {
      type: String,
      default: '提示'
    },
    // 按钮类型：1、确定 2、取消 3、确定取消
    btnType: String,
    sureText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showMode: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    surce () {
      this.$emit('surce')
    },
    cancel () {
      // 在父组件定义的量，需要发消息到父组件中改动
      // this.showMode = false
      this.$emit('cancel')
    }
  }
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
</style>
