<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span></span>预约维修服务</li>
                <li><span></span>7天无理由退货</li>
                <li><span></span>15天免费换货</li>
                <li><span></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ServiceBar',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang ='scss' scoped>
@import "assets/scss/mixin.scss";
@import "assets/scss/config.scss";
@import "assets/scss/base.scss";
.service{
    padding: 33px 0;
    font-size: 16px;
    color: $colorC;
    .container{
        ul{
            display: inline-block;
            @include flex();
            li{
                display: inline-block;
                flex: 1;
                text-align: center;
                border-right: 1px solid #e5e5e5;
                &:last-child{
                    border-right: none;
                }
            }
        }
    }
}
</style>
