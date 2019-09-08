<template id="main">


    <el-main>
      <div :id="rb.id"
           :type="rb.type"
           :data-value="rb.value"
           :data-color="rb.color"
           :data-bgcolor="rb.bgcolor"
           :data-font="rb.font"
           :data-size="rb.size">
      </div>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table>
    </el-main>

</template>

<script>
  import BC from 'rate-ball';
  export default {
    data()
      {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
          rb:{
            id:'rbsd',
            type:'hoop',
            value:90,
            size:200,
            font:'14px',
            color:'red',
            bgcolor:'#efefef'
          },
          tableData: Array(20).fill(item)
        }
      },
  mounted(){
    var args = [this.rb.id];
    BC.bc(args)
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
