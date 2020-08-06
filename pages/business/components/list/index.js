Page({
  data: {
    loadData:0
  },
  _showData() {
    this.setData({
      loadData:++this.data.loadData,
      pageData:{
        url:'business.common.list',
      },
      searchData:{
        bgColor:"#f3f3f3",
        value:'',
        name:'keywords',
        emptyText:"请输入关键字",
      },
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
  onLoad(o) {
    this._showData()
  },
})