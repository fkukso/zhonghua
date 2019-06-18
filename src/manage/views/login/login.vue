<style scoped>
  .Login {
    padding: 0 24px;
  }

  .login-logo {
    text-align: center;
    padding-top: 80px;
    padding-bottom: 30px;
  }

  .login-item {
    display: block;
    padding: 10px 0;
  }

  .login-input {
    padding: 0 15px;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    color: #606266;
    height: 40px;
    line-height: 40px;
    outline: 0;
    width: 100%;
    font-size: 14px;
  }

  .login-button {
      margin-top: 30px;      
      border-radius: 4px;
      width: 100%;
  }

</style>


<template>
  <div class="Login">

    <div class="login-logo">
      <img alt="Vue logo" src="./logo.jpg">
    </div>
    

    <div class="login-item">
      <input class="login-input" type="text" name="username" placeholder="请输入用户名" v-model="username">
    </div>

    <div class="login-item">
      <input class="login-input" type="password" name="passwd" placeholder="请输入密码" v-model="pwd">
    </div>

    <van-button type="info login-button" @click="login">登录</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@m/components/HelloWorld.vue'

export default {
  name: 'login',
  components: {
    // HelloWorld
  },
  data() {
    return {
      username: "",
      pwd: ""
    }
  },
  methods: {
    login() {
      // if (!this.username.length) {
      //   return alert("用户名不能为空")
      // }

      // if (!this.pwd.length) {
      //   return alert("密码不能为空")
      // }
    
      if (this.username === 'zh') {
        this.$router.push("/ads/list")
      } else {
        this.$router.push("/cbs/list")
      }
    }
  },
  created() {
    setDocTitle("登录")
  }
}
</script>
