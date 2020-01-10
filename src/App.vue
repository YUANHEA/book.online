<template>
  <div id="app">
    <img src="./assets/logo.png" />
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
    this.axios.get('api/login.json').then((res) => {
    // this.axios.get('api/user/login.json').then((res) => {
      this.res = res
      console.log('res', this.res)
    })
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
