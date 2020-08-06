Page({
  data: {
    goodNum:1
  },
  onLoad (o) {
    let {goodId} = o
    let pageLength = getCurrentPages().length
    this.setData({
      goodId,
      pageLength
    },this._showData)
    
  },
  _showData(){
    let _this = this
    let {goodId} = this.data
    'wx'.$request({
      url:"good.detail",
      data:{id:goodId},
      success(res){
        _this.setData(res)
      }
    })
  },  
  toCart(){
    let _this = this
    let {goodId,goodNum} = this.data
    'wx'.$request({
      url:"good.addCart",
      data:{goodId,number:goodNum},
      success(res){
        'wx'.toast(res.message)
        _this.setData({
          showBuy:false,
          goodNum:1
        })
      }
    })
    
  },
  toBuy(e) {
    let {type} = 'wx'.getParam(e)
    this.setData({ showBuy: true,buyType:type })
    
  },
  toPage(e){
    'wx'.toPageUrl(e)
  },
  toConfirmBuy(){
    let {goodId,goodNum} = this.data
    'wx'.toPage({
          url:`/goula/ohter/order/preview/index?goodId=${goodId}&goodNum=${goodNum}`
    })
  },
  toChange(e) {
    let { cname, cvalue } = 'wx'.getParam(e)
    let data = this.data
    data[cname] = cvalue
    this.setData(data)
  },
  onShow: function () {

  },
  numberChange(e){
    this.setData({
      goodNum:e.detail.count
    })
  },
  onPullDownRefresh: function () {
    this._showData()
  },
  onShareAppMessage: function () {

  }
})