<template>
  <div>

    <div :class="$style.toolbar">
      <el-input placeholder="请输入内容" v-model="search" clearable :class="$style.search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" @click="addqution" :class="$style.addQution">添加问卷</el-button>
    </div>
    <el-table :data="qutionList" stripe border style="width: 100%;height:100%;">
      <el-table-column type="index" label="序号" align="center" width="100px" sortable>
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
  name: 'qution',
  data () {
    return {
      qutionList: [],
      search: ''
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
      this.$router.push({
        path: 'wenti',
        query: {
          row
        }
      })
    },
    handleDelete (index, row) {
      const that = this
      this.$confirm('是否删除此张问卷?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          that.$http.post('/api/removeqution', { id: row.id }).then(res => {
            console.log(res)
            that.qutionList.splice(index, 1)
            that.$notify({
              title: '删除成功',
              message: `${row.wjName}问卷已成功删除`,
              type: 'success'
            })
          })
        })
        .catch(() => {})
    },
    addqution () {
      this.$prompt('输入要添加的问卷', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$message({
            type: 'success',
            message: `添加成功` + value
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
    }
  }
}
</script>

<style lang="stylus" module>
.toolbar {
  width: 100%;
  height: 40px;
  margin: 10px 0px;
  overflow-x: hidden;

  .addQution {
    float: right;
    margin-right: 100px;
  }

  .search {
    float: left;
    width: 300px;
    margin-left: 100px;
  }
}
</style>
