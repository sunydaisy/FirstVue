<template>
  <div class="login-box">
    <div class="login-form">
      <div class="logo-box">
        <p class="font-logo">LOGIN</p>
      </div>
      <div class="logo-box">
        <div class="inp-wrap">
          <input
            class="gy-input"
            type="text"
            placeholder="请输入账号"
            @focus="clearError"
            v-model="userName"
          >
        </div>
        <div class="span-login">
          <span v-show="userNameErrMsg !==''">请输入账号</span>
        </div>
        <div class="inp-wrap">
          <input
            class="gy-input"
            type="password"
            placeholder="请输入密码"
            @focus="clearError"
            v-model="password"
          >
        </div>
        <div class="span-login">
          <span v-show="pwdErrMsg !==''">请输入密码</span>
        </div>
        <div class="inp-wrap">
          <input type="button" value="登录" class="btn-login" @click="login">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: "",
      userNameErrMsg: "",
      pwdErrMsg: ""
    };
  },
  methods: {
    jumpPage(msg,loginThis){
      loginThis.$router.push({
            name: "FirstPage",
            params: {
              userName: this.userName+msg
         }   
      });
    },
    login() {
      let loginThis = this;
      if (!this.userName) {
        this.userNameErrMsg = "账号不能为空";
        return false;
      }
      if (!this.password) {
        this.pwdErrMsg = "密码不能为空";
        return false;
      }
      axios.post('http://112.74.174.102:88/api/first/login',{
        userName : this.userName,
        passWord : this.password
      }).then(function(data){
          loginThis.$options.methods.jumpPage(data,loginThis);
      }).catch(function(error){
          loginThis.$options.methods.jumpPage(error,loginThis);
      });
    },
    clearError() {
      this.userNameErrMsg = "";
      this.pwdErrMsg = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/login.png) no-repeat center center;
}
.login-form {
  width: 400px;
  height: 368px;
  box-sizing: border-box;
  padding: 33px 42px 50px 42px;
  background: #ffffff;
}
.font-logo {
  font-size: 30px;
  color: rgba(62, 61, 59, 0.94);
  text-align: center;
  font-weight: 600;
}
.inp-wrap {
  height: 50px;
  display: flex;
  align-items: center;
}
.gy-input {
  width: 100%;
  height: 100%;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  padding-left: 15px;
}
.btn-login {
  background: rgba(111, 111, 110, 0.94);
  color: #f9ebeb;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 20px;
}
.span-login {
  font-size: 14px;
  color: #fb4e18c2;
  height: 30px;
  line-height: 30px;
}
</style>
