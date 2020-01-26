<template>
    <div class="login">
        <!-- <div class="container">
      <a href="/#/index"><img src="public/imgs/login-logo.png" alt=""></a>
        </div>-->
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">帐号登录</span>
                        <span class="sep-line">|</span>
                        <span>扫码登录</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="请输入帐号" v-model="username" />
                    </div>
                    <div class="input">
                        <input type="password" placeholder="请输入密码" v-model="password" />
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">
                            立即注册
                            <span>|</span>忘记密码？
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
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
                >微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
            </div>
            <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    // login () {
    //   // let {username, password} = this
    //   this.axios.post('/user/login',{})
    // }
    login () {
      // 因为data中这些量都是挂载到this上，this指vue实例。因此对this进行解构赋值,取出相应属性量，省变量定义。
      let { username, password } = this
      this.axios
        .post('/user/login', {
          // 形参不用定义
          // 在接口中传的参数左边为形参，因此不用定义。
          // 当左右相同，es6语法只需写一个。
          username,
          password
        })
        .then(res => {
          this.$cookie.set('userId', res.id, { expires: '1Y' })
          this.$router.push('/home')
          //   this.$store.dispatch('saveUserName', res.username)
          this.saveUserName(res.username)
        })
    },
    // 存储值
    ...mapActions([
      'saveUserName' // also supports payload `this.nameOfAction(amount)`
    ]),

    register () {
      let { username, password } = this
      this.axios
        .post('/user/register', {
          username,
          password
        })
        .then(res => {
          alert('注册成功')
        })
    }
  }
}
</script>
<style lang='scss' scoped>
.login {
    // &>.container{
    //   height:113px;
    //   img{
    //     width:auto;
    //     height:100%;
    //   }
    // }
    background-color: #000;
    .wrapper {
        // background:url('/imgs/login-bg.jpg') no-repeat center;
        .container {
            height: 576px;
            .login-form {
                position: relative;
                box-sizing: border-box;
                width: 442px;
                height: 510px;
                margin: auto;
                padding-left: 30px;
                padding-right: 30px;
                background-color: #eee;
                border: 1px solid #000;
                border-radius: 10px;
                // position:absolute;
                // bottom:29px;
                // right:0;
                h3 {
                    line-height: 23px;
                    margin: 40px auto 49px;
                    text-align: center;
                    font-size: 24px;
                    .checked {
                        color: #ff6600;
                    }
                    .sep-line {
                        margin: 0 32px;
                    }
                }
                .input {
                    display: inline-block;
                    width: 370px;
                    height: 50px;
                    border: 1px solid #e5e5e5;
                    background-color: white;
                    margin-bottom: 20px;
                    border-radius: 5px;

                    input {
                        width: 100%;
                        height: 100%;
                        border: none;
                        outline: none;
                        font-size: 17px;
                        border-radius: 5px;
                        padding-left: 10px;
                    }
                }
                .btn-box {
                    width: 100%;
                    line-height: 50px;
                    font-size: 16px;
                    background-color: #ff6600;
                    text-align: center;
                    border-radius: 25px;
                }
                .btn {
                    display: inline-block;
                    width: 100%;
                    line-height: 50px;
                    text-decoration: none;
                    color: #000;
                }
                .tips {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                    .sms {
                        color: #ff6600;
                    }
                    .reg {
                        color: #999999;
                        span {
                            margin: 0 7px;
                        }
                    }
                }
            }
        }
    }
    .footer {
        height: 100px;
        padding-top: 60px;
        color: #999999;
        font-size: 16px;
        text-align: center;
        .footer-link {
            a {
                color: #999999;
                display: inline-block;
            }
            span {
                margin: 0 10px;
            }
        }
        .copyright {
            margin-top: 13px;
        }
    }
}
</style>
