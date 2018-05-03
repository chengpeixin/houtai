<template>
  <div>
    <el-table :data="qutionList" stripe border style="width: 100%">
      <el-table-column type="index" :index="indexMethod" label="序号" align="center" width="100px" sortable>
      </el-table-column>
      <el-table-column prop="wjName" align="center" label="问卷名称">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      qutionList: []
    }
  },
  created () {
    this.getQution()
  },
  methods: {
    getQution () {
      const that = this
      this.$http
        .post('/api/getproblem')
        .then(res => {
          try {
            if (res.status !== 200 && res.status.statusText !== 'OK') {
              alert('接口获取错误,请重试')
              return;
            }
            that.qutionList = res.data.data
          } catch (error) {
            alert(error)
          }
        })
        .catch(err => {
          alert(err)
        })
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      this.qutionList.splice(index, 1)
      console.log(index, row)
    }
  }
}
</script>

<style scoped>

</style>
