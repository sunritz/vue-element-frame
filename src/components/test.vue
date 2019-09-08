<template>


    <el-main>
      <div :id="rb.id"
           :data-value="rb.value"
           :data-size="rb.size"
           :data-font='rb.font'
           :data-color="rb.color"
           :data-bgcolor="rb.bgcolor">
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
          date: '2019-07-18',
          name: '唐老鸭',
          address: '武汉市洪山区花城大道 1518 弄'
        };
        return {
          rb:{
            id:'rbs',
            value:80,
            size:200,
            font:'34px',
            color:'green',
            bgcolor:'#eee'
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
