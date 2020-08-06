Component({
  properties: {
    data:Object
  },
  data: {

  },
  methods: {
    onA(e){
      let number = e.detail.count
      let _this = this
      let {data} = this.data
      'wx'.$request({
        url:"good.cartUpdate",
        data:{cart_id:data.id,number},
        success(){
          data.quantity = number
          _this.setData({
            data
          })
          _this.triggerEvent('myTap',data)
        },fail(){
          'wx'.toast("添加失败,请稍后再试")
          _this.setData({
            data
          })
        }
      })
    },
    onOut(e){
      if(e.detail.way=='icon'){
        'wx'.toast('宝贝数量不能再少啦~')
      }
    }
  }
})
