import  pageBev  from '../../../../../components/behavior/page.js';
Component({
  behaviors: [pageBev],
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  ready(){
    console.log('33333',this.data)
  },
  methods: {
    doActive(e) {
      let { type } = 'wx'.getParam(e)
      let { id } = this.data.data
      console.log('333',id);
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
    _commit(order_id) {
      let that = this
      'wx'.$request({
        url: 'order.submit',
        data: { order_id },
        confirm: '确认收货？',
        showLoading: true,
        success(res) {
          that.triggerEvent("toLoad")
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
        that.triggerEvent("toLoad")
      }
    })
  },
  async _pay(order_id) {
    let that = this
    let res = "";
    'wx'.$request({
      url: 'order.pay',
      data: { order_id },
      showLoading: true,
      success(res) {
        'wx'.wxPay({
          res,success(re){
            that.triggerEvent("toLoad")
            console.log(re)
          },fail(re){
            console.log('失败',re)
          }})
      }
    })
  },
  }
});
