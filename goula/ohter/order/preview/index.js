Page({
  data: {
    payTotalMoney:0,
    first:true
  },
  onLoad (o) {
    let {goodId,goodNum,type,ids} = o;
    this.setData({
      goodId,goodNum,ids
    },this._showData)
  },
  onUnload(){
    'wx'.removeStore('selcetAddress')
  },
  onShow(){
    if(!this.data.first){
      this._showData()
    }
  },
  _showData(){
    let _this = this
    let {goodId,goodNum,ids} = this.data
    'wx'.$request({
      url:"order.preview",
      data:{goodId,goodNumber:goodNum,ids},
      async success(res){
        let selcetAddress = await 'wx'.getStore('selcetAddress')
        if (selcetAddress) {
            res.addressInfo=selcetAddress
        }
        _this.setData(res,_this._countPrice)
      },
      complete(){
        _this.data.first = false
      }
    })
  },
  _chooseAdress() {
    'wx'.toPage({
      url: '/goula/ohter/address/list/index?type=select'
    })
  },
  toCommit(e){
    let _this = this
    let data = 'wx'.getValues(e)
    let {goodNum,goodList,addressInfo,ids} = this.data
    data.goodNumber = goodNum||''
    data.goodId = goodList?goodList[0].id:''
    data.ids =ids||''
    data.addressId = addressInfo.id
    'wx'.$request({
      url:"order.create",
      toast:2,
      data,
      async success(res){
        'wx'.wxPay({
          res,success(re){
            'wx'.toPage({
              url:'/goula/ohter/order/list/index'
            })
            console.log(re)
          },fail(re){
            if(re.errMsg=="requestPayment:fail cancel"){
              'wx'.toPage({
                url:"/goula/ohter/order/list/index"
              })
            }
            console.log('失败',re)
          }})
      },
      fail(res){
        'wx'.toast(res.data.message)
        console.log(res)
      }
    })
    console.log('3333',data)
  },
  numberChange(e){
    this.setData({
      goodNum:e.detail.count
    },this._countPrice)
  },
  _countPrice(){
    let _this =this
    let {goodNum,goodList,cartList}  = this.data
    if(goodList){
      let price =  goodList[0].discount_price ||goodList[0].price
      this.setData({
        payTotalMoney:  Math.floor(parseFloat(price*goodNum*100))/100
      })
    }
    let price = 0
    if(cartList){
      cartList.forEach((item,index)=>{
        price +=  Math.floor(parseFloat(item.goods_price*item.quantity*100))/100
        if(index==cartList.length-1){
          _this.setData({
            payTotalMoney: price
          })
        }
      })
    }

   
  },
  onPullDownRefresh: function () {
    this._showData()
  },

})