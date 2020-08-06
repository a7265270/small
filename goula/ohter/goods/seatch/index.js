Page({
  data: {
    loadData:0,
    keywords:''
  },
  _showData() {
    let {type,keywords} = this.data
    this.setData({
      loadData:++this.data.loadData,
      pageData:{
        url:'good.typePageList',
        data:{type,keywords}
      },
      searchData:{
        bgColor:"#f3f3f3",
        value:keywords,
        name:'keywords',
        emptyText:"请输入关键字查询",
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
    let { type ,keywords=''} = o
    this.setData({
      keywords,
      type
    },this._showData)
    if(type=="new"){
      'wx'.title("新货上架")
    }else if(type=="hot"){
      'wx'.title("热卖商品")
    }
  },
})