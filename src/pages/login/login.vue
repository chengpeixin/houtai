<template>
  <div>

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
      this.getUserName()
    }
  },
  methods: {
    getUserName () {
      const that = this
      this.uName = window.prompt('输入用户名')
      if (this.uName === '' || this.uName == null) {
        alert('不能为空')
      } else {
        this.$prompt('请输入密码', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          that.pwd = value
          that.submit()
        })
      }
    },
    submit () {
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

<style scoped>

</style>
