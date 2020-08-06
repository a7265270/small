Page({
  data: {
    loadData: 0,
  },
  onLoad: function (options) {
    this.setData({
      loadData: ++this.data.loadData,
      pageData: {
        url: 'business.shopping.cart',
      },
      searchData: false,
      noData: {
        // image:'http://www.qianyisou.com/Content/Images/mbno_img.jpg',
        // describe:'这里数据空空如也~',
        bgColor: "#f3f3f3",
        type: "cart"
      },
      errorData: {
        buttonText: '重新加载',
        describe: '网络出错啦,请点击按钮重新加载',
      },
      slideItems:[
        {name:'删除',type:'error',bgColor:'',icon:'',iconSize:'',iconColor:''},
        {name:'编辑',type:'default',bgColor:'',icon:'',iconSize:'',iconColor:''},
      ]
    })
  },
  slideTap(e){
    console.log('点击滑动按钮',e)
  },
  onShow: function () {

  },
})