<template>
  <div>
    <div :class="$style.full">
      <p style="text-align:center;">欢迎使用后台管理系统</p>
      <div>
        <el-input v-model="uName" placeholder="帐号"></el-input>
      </div>
      <div>
        <el-input v-model="pwd" placeholder="密码" type="password"></el-input>
      </div>
      <div>
        <el-button type="success" :class="$style.login" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      uName: '',
      pwd: ''
    }
  },
  created () {
    // 判断是否登录，已经登录直接跳转到主页
    if (this.Cookie.get('user')) {
      this.$router.replace('/')
    } else {
    }
  },
  methods: {
    login () {
      const that = this
      this.Cookie.set('user', {
        name: that.uName,
        pwd: that.pwd
      })

      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus" module>
.full {
  display: block;
  width: 500px;
  height: 500px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  border: 1px solid #e5e5e5;
  border-radius: 20px;
  box-sizing: border-box;
  padding-top: 100px;

  div {
    width: 90%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
}

.login {
  width: 80%;
  height: 50px;
  margin: 0 auto;
}
</style>
