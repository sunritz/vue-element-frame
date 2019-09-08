import Mock from "mockjs";
Mock.mock("mock/indexList", {
  "list|5": [
    //随机返回5项
    {
      tabcon:{
        tabtit:"@ctitle(3)",
        percent:{id:"@string(5)",value:"@integer(0, 100)",size:150,font:"24px",color:"@color",bgcolor:"#efefef"},
        text:{t:"@cparagraph(30, 60)","pic|4":[{img:"@dataImage('375x255', '@cname')"}]},
      }
    }
  ]
});
