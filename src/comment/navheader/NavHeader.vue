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
                    <a href="#" class="my-cart">
                        <span class="icon-cart"></span>购物车
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <!-- 用a标签做logo图片块级元素，因为能在一行inline-block，自带point -->
                    <a href="#"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <!-- 如果文字就用span做块级 -->
                        <span>小米手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" />
                        <a href></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>
<style lang ='scss' scoped>
/* 一般用前后对接，如果多个子级则往前。公共、独特用单个写。最内层多直接对标签设置样式。
    之前分模块再&,控制三级之内，公共、独特用单个写。*/
.nav-topbar {
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
.nav-header {
    height: 112px;
    line-height: 112px;
    .container {
        width: 1226px;
        height: 112px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .header-logo {
            display: inline-block;
            width: 55px;
            height: 55px;
            /* overflow: hidden; */
            background-color: #ff6600;
            a {
                display: inline-block;
                width: 110px;
                height: 55px;
                /* overflow: hidden; */
                &:before {
                    /* 伪类是没有内容，但需要占位。
                    content:' '很重要 */
                    content: " ";
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    background: url("../../../public/imgs/mi-logo.png")
                        no-repeat center;
                    background-size: 55px;
                    transition: margin 0.2s;
                }
                &:after {
                    content: " ";
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url("../../../public/imgs/mi-home.png")
                        no-repeat center;
                    background-size: 55px;
                }
                &:hover:before {
                    margin-left: -55px;
                    transition: margin 0.2s;
                }
            }
        }
        .header-menu {
            display: inline-block;
            width: 643px;
            padding-left: 209px;
            .item-menu{
                display: inline-block;
                color: #333333;
                line-height: 112px;
                font-weight:bold;
                font-size:16px;
                margin-right: 20px;
            }
        }
        .header-search {
            .wrapper{
                height: 50px;
                border: 1px solid #e0e0e0;
                display:   flex;
                align-items: center;
                input{
                    display: inline-block;
                    height: 100%;
                    border: none;
                    border-right: 1px solid #e0e0e0;
                    padding-left: 13px;
                    box-sizing: border-box;
                }
                a{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background: url('../../../public/imgs/icon-search.png') no-repeat center;
                    background-size: 19px 19px;
                }
            }
        }
    }
}
.my-cart {
    width: 110px;
    height: 39px;
    background-color: #ff6600;
    text-align: center;
    color: #ffffff !important;
    .icon-cart {
        display: inline-block;
        width: 16px;
        height: 12px;
        background: url("../../../public/imgs/icon-cart-checked.png") no-repeat
            center;
        background-size: contain;
        margin-right: 4px;
    }
}
</style>
