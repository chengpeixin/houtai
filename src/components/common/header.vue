<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-mune" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu index="2" style="float:right;">
        <template slot="title">我</template>
        <el-menu-item index="userInfo">个人信息</el-menu-item>
        <el-menu-item index="SignOut">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
    <el-col :span="12" style="width:200px;">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">问卷管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (key === 'SignOut') {
        this.Cookie.remove('user')
        window.location.reload()
        // this.$router.replace('/login')
      }
      console.log(key)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="styl">
.el-mune {
  border: none;
}
</style>
