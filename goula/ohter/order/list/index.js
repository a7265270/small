Page({

  data: {
    tabList:[
      {title:"全部",value:'all',num:0,pageData:{status:"all"}},
      {title:"待付款",value:'nopay',num:0,pageData:{status:"nopay"}},
      {title:"待发货",value:'undispatched',num:0,pageData:{status:"undispatched"}},
      {title:"待收货",value:'dispatched',num:0,pageData:{status:"dispatched"}},
      {title:"已完成",value:'finsh',num:0,pageData:{status:"finsh"}},
    ],
    loadData:0,
    active:0
  },
  _showData() {
    let {active,tabList} = this.data
    this.setData({
      loadData:999999,
      pageData:{
        url:'order.list',
        data:{status:tabList[active].value}
      },
      searchData:false,
      noData: {
        // image:'http://www.qianyisou.com/Content/Images/mbno_img.jpg',
        // describe:'这里数据空空如也~',
        bgColor:"#f3f3f3",
        type: "data"
      },
      errorData:{
        buttonText:'重新加载',
        describe:'网络出错啦,请点击按钮重新加载',
      }
    })
  },
  onShow () {
    this._showData()
  }
})