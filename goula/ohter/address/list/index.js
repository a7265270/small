Page({
  data: {

  },
  onLoad (o) {
    let {type} = o;
    this.setData({
      type
    })
  },
  onShow(){
    this._showData()
  },  
  _showData(){
    let _this = this
    'wx'.$request({
      url:"address.list",
      success(res){
        _this.setData({list:res,close:true})
      }
    })
  },
  async toSelect(e){
    let {record} = 'wx'.getParam(e)
    let {type} = this.data
    if(type){
      await 'wx'.setStore('selcetAddress',record)
      'wx'.toPage({
        type:'back'
      })
    }
  },
  _delte(e){
    let {id}= 'wx'.getParam(e)
    let _this = this
    'wx'.$request({
      url:"address.delte",
      data:{id},
      confirm:"确认删除该地址？",
      showLoading:true,
      success(res){
        _this._showData()
      }
    })
  },
  toPage(e){
    'wx'.toPageUrl(e)
  },
  onPullDownRefresh: function () {
    this._showData()
  },

})