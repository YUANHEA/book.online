<template>
    <div id="app">
        <!-- <img src="./assets/logo.png" /> -->
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // vue-axios将axios挂载到vue上,这样就能通过this.axios获取到axios
    // public是根路径,不用public/,直接/
    // 请求static/mock
    // this.axios.get('/login.json').then((res) => {
    // // this.axios.get('api/user/login.json').then(res => {
    //   this.res = res
    //   console.log('res', this.res)
    // })
    // 利用mockjs请求mock/.json数据
    // this.axios.get('/user/login').then(res => {
    //   this.res = res
    //   console.log('res', this.res)
    // })
    // this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('/test1').then(res => {
        console.log('user', res)
      })
    },
    getCartCount () {
      this.axios.get('/carts').then(res => {
        // console.log('carts', res)
      })
    }
  }
}
</script>

<style lang='scss'>
@import "assets/scss/reset.scss";
@import "assets/scss/config.scss";
@import "assets/scss/button.scss";
@import "assets/scss/modal.scss";
</style>
