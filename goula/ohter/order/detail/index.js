Page({
  data: {

  },
  onLoad(o) {
    'wx'.title('订单详情')
    let { orderId } = o
    this.setData({
      orderId
    }, this._showData)
  },
  toCopy(e) {
    let { value } = 'wx'.getParam(e)
    'wx'.copy(value)
  },
  onShow(){
    this._showData()
  },  
  _showData() {
    let that = this
    let { orderId } = this.data
    'wx'.$request({
      url: 'order.detail',
      data: { order_id:orderId },
      success(res, loadFn) {
        that.setData(res, loadFn)
      }
    })
  },
  toPage(e){
    'wx'.toPageUrl(e)
  },
  doActive(e) {
    let { type } = 'wx'.getParam(e)
    let { id } = this.data
    switch (type) {
      //立即支付
      case 'pay':
        this._pay(id)
        break;
      // 取消订单
      case 'cancel':
        this._cancel(id)
        break;
      // 确认收货
      case 'commit':
        this._commit(id)
        break;
    }
  },
  
  //确认收货
  _commit(orderId) {
    let that = this
    'wx'.$request({
      url: 'order.submit',
      data: { orderId },
      confirm: '确认收货？',
      showLoading: true,
      success(res) {
        that._showData()
      }
    })
  },
  //取消订单
  _cancel(order_id) {
    let that = this
    'wx'.$request({
      url: 'order.cancel',
      data: { order_id },
      confirm: '确认取消订单？',
      showLoading: true,
      success(res) {
        that._showData()
      }
    })
  },
  async _pay(orderId) {
    'wx'.toPage({
      url:'/subpackages/common/good/pay/index?orderId='+orderId
    })
  },
  onPullDownRefresh(){
    this._showData()
  }
})