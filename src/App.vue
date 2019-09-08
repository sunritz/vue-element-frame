<template>
  <el-container>
    <el-header>
      <div class="logo">logo</div>
      <div>
        <el-dropdown>
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span style="font-size: 12px;white-space: nowrap; margin: 20px 0;">王小虎</span>
      </div>
    </el-header>
    <el-container>

        <app-menu v-if="leftmenu" @addtab="addtab" @firstab="fixtabac"></app-menu>
        <el-container class="is-vertical">
            <app-head @toggle="aside" :titName="tab" :firstab="fixtab"></app-head>
            <router-view></router-view>
        </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data()
      {
        return {
          leftmenu: 1,
          tab:{},
          fixtab:0
        }
      },
    methods: {
      aside() {
        this.leftmenu==1?this.leftmenu=0:this.leftmenu=1;
      },
      addtab(t){
        this.tab=t;
      },
      fixtabac(){
        this.fixtab=1;
      }
   }
  };
</script>

<style lang="scss" scoped type="text/css">
  .el-main{margin-top:60px;}
  .el-container{
    height: 100vh;
    overflow-y: hidden;
    .el-header {
      background-color: #B3C0D1;
      color: #fff;
      display: flex;
      justify-content:space-between;
      line-height: 60px;
      .logo{
        font-size: 25px;
        font: 30px 700 arial;
      }
    }
    .el-aside {
      color: #333;
    }
  }

</style>
