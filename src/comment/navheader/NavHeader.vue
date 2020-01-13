<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="#">小米商城</a>
                    <a href="#">MUI</a>
                    <a href="#">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="#">登录</a>
                    <a href="#">我的订单</a>
                    <a href="#" class="my-cart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header"></div>
    </div>
</template>

<script>
export default {}
</script>

<style lang ='scss' scoped>
.header {
    .nav {
        &-topbar {
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container {
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                justify-content: space-between;
                a {
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
            }
        }
    }
    .my-cart{
        width: 110px;
        height: 39px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff !important;
        .icon-cart{
            display: inline-block;
            width: 16px;
            height: 12px;
            background: url("/imgs/icon-cart-checked.png") no-repeat center;
            background-size: contain;
            margin-right: 4px;
        }
    }
}
</style>
