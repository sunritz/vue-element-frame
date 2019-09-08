<template>
  <div class="header headwidth">
    <el-header>
      <div style="width:300px;display: inline-block">
        <i class="el-icon-s-fold  el-icon-s-unfold" @click="aside($event)"></i>
        <div class="fixtab" @click="fixtabshow">固定栏位</div>
      </div>

    </el-header>

    <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="tabClick" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        >
        <div class="tabcontent" v-show="tabcontentshow">
          {{item.content.t}}
          <div style="margin-top: 10px">
            <div v-for="it in item.content.pic" style="display: inline-block;margin-right: 5px"><img :src="it.img" /></div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    props:['titName','firstab'],
    data(){
        return {
          tabname:"",
          newtab:0,
          tabcontent:{},
          newtabcontent:{},
          tabcontentshow:0,
          editableTabsValue: '1',
          editableTabs: [
//          {
//            title: 'Tab 1',
//            name: '1',
//            content: 'Tab 1 content'
//          }, {
//            title: 'Tab 2',
//            name: '2',
//            content: 'Tab 2 content'
//          }
          ],
          tabIndex: 0
        }
      },
      methods:{
        addcss(){
          var d = document,css = d.createElement('style');
          css.setAttribute('id','othertablinecolor');
          var rhcss=`
                    .el-tabs--card>.el-tabs__header .el-tabs__item{
                      border-bottom-color:#eee;
                    }`;
          css.innerHTML=rhcss;
          d.body.appendChild(css);
        },
        addTab(targetName) {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title:this.titName.tabtit,
//            title: this.titName.substring(0,this.titName.indexOf("-")),
            name: newTabName,
            content:this.titName.text
          });

          this.editableTabsValue = newTabName;
          let d=document,c=d.getElementsByClassName('el-tabs__item'),f=c.length;
          for(let i=0;i<=f-1;i++){
            if(f>0){
              this.addcss();
            }
          }
          d.getElementsByClassName('header')[0].classList.add('headerheight');
          document.getElementsByClassName('fixtab')[0].style.borderBottomColor='#eee'
          this.tabcontentshow=1;

        },
        tabClick(){
          this.tabcontentshow=1;
          let d = document;
          d.getElementsByClassName('fixtab')[0].style.borderBottomColor='#eee';
          let tc=d.getElementsByClassName("tabcontent"),tcl=tc.length;
          if(d.getElementsByClassName('el-icon-s-fold')[0]==undefined){
            for(let i=0;i<=tcl-1;i++){
              tc[i].classList.add('tabcontentfull');
              tc[i].style.display='block';
            }
          }else{
            for(let i=0;i<=tcl-1;i++){
              tc[i].classList.remove('tabcontentfull');
              tc[i].style.display='block';
            }
          }
        },
        removeTab(targetName) {
          this.tabname="";
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        if(tabs.length<=1){
          let d = document;
          d.getElementsByClassName('el-tabs__header')[0].style.borderWidth=0;
          d.getElementsByClassName('fixtab')[0].style.borderBottomColor='#fff'

        }
      },
      fixtabshow:function(){
        let d=document,c=d.getElementsByClassName('el-tabs__item'),l=c.length;
        this.tabcontentshow=0;
        d.getElementsByClassName('fixtab')[0].style.borderBottomColor='#fff';
        for(let i=0;i<=l-1;i++){
          c[i].classList.remove('is-active')
        }
      },
      aside:function(event){
          this.$emit('toggle');
          event.currentTarget.classList.toggle('el-icon-s-fold');
          let d=document,h=d.getElementsByClassName("header")[0];
          if(JSON.stringify(this.tabcontentshow)==1){
            let tc=d.getElementsByClassName("tabcontent"),tcl=tc.length;
            for(let i=0;i<=tcl-1;i++){
              tc[i].classList.toggle('tabcontentfull');
            }
            h.classList.toggle('headwidthfull');
          }else{
            h.classList.toggle('headwidthfull');
          }
        }
      },
      watch:{
        firstab:{
          handler:function(n,o){
            if(n!=0){
              this.tabcontentshow=0;
              this.fixtabshow()
              //document.getElementsByClassName('fixtab')[0].style.borderBottomColor='#fff';
            }
          }
        },
        titName:{
          handler:function(n,o){
//            this.addTab();
//            document.getElementsByClassName('el-tabs__nav')[0].style.background="#fff";
            let t=n.tabtit;
//            let c=n.substring(0,d);
            let tits = JSON.parse(JSON.stringify(this.editableTabs));
            for(let i=0;i<=tits.length-1;i++){
              if(tits[i].title==t){
                this.tabname=t;
                this.$message({
                  message: '已经在窗口中打开',
                  type: 'warning'
                });
                break;
              }
            }
            if(this.tabname!=t){
              this.addTab();
              document.getElementsByClassName('el-tabs__header')[0].style.borderWidth="1px";
              document.getElementsByClassName('el-tabs__nav')[0].style.background="#fff";
            }
          }
        }
      }
  }
  ;
</script>

<style lang="scss" scoped type="text/css">
  .el-tabs--card{
    .el-tabs__header {
      .el-tabs__item{
        border-bottom-color:#eee ;
      }
    }
  }
.headwidth {
  width:calc(100% - 200px);
}
.headwidthfull {
  width:100%;
}
.headerheight{
  height:calc(100vh - 60px);
}
.header{
  position: fixed;
  z-index: 2;
  background: #fff;
  height:60px;
  .fixtab{
    width:98px;
    border:1px solid #eee;
    border-bottom:1px solid #fff;
    background: #fff;
    display: inline-block;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 4px 4px 0 0;
    margin: 18px 0 0 0;
    font-size: 14px;
    cursor: pointer;
    .active{
      color: #409EFF;
    }
  }
  .tabcontent{
    width:calc(100% - 240px);
    height: calc(100vh - 100px);
    position: fixed;
    left:200px;
    z-index: 9999;
    background: #fff;
    top:120px;
    overflow-y: auto;
    padding: 20px;
  }
  .tabcontentfull{
    width:calc(100% - 40px);
    left:0px;
  }
  .el-header{
    display: flex;
    justify-content:space-between;
    background: #efefef;
  }
  .el-icon-s-fold,.el-icon-s-unfold {
    margin: 20px 0;
    font-size: 20px;
    cursor: pointer;
    display: inline-block;
  }
  .el-tabs{
    position: relative;
    top: -41px;
    left: 150px;
    width: calc(100% - 260px);
  }
  .el-dropdown{
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
  }
  .el-alert{
    width:200px;
    margin:0 auto;
  }
}
</style>
<style>
  .el-tabs--card>.el-tabs__header{
    border-width: 0;
  }
</style>
