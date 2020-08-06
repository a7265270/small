// pages/components/nav/pages/segment/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    goodC:{},
    categoryC:{},
    tabActive:0,
    scrollTop: 0,
    i:0,
    brageCount: 5
  },
  onLoad(){
    this._showData()
    'wx'.title('全部商品')
  },
  _showData(){
    let _this = this;
    'wx'.$request({
      url:"category.list",
      success(res){
        _this.setData({
          imagesTabs:res
        },_this.getGoodList)
      }
    })
  },
  onShow(){
    this._getCart()
  },
  _getCart(){
    let {imagesTabs} = this.data
    let _this = this;
    'wx'.$request({
      url:"good.cartList",
      success(res){
      let categoryC={},goodC = {};
      console.log({categoryC,goodC})
        res.forEach(item=>{
          if(categoryC[item.goods_category_id]>0){
            ++categoryC[item.goods_category_id]
          }else{
            categoryC[item.goods_category_id] = 1
          }
          if(goodC[item.good_id]>0){
            goodC[item.good_id] += parseInt(item.quantity)
          }else{
            goodC[item.good_id] = parseInt(item.quantity)
          }
        })
        _this.setData({
          goodC,categoryC
        })
        _this._setTabNum(res.length)
      }
      })

  },

  _setTabNum(num){
    'wx'.setCartNum(num,true)
  },
  getGoodList(){
    let {imagesTabs,tabActive} = this.data
    let _this = this
    'wx'.$request({
      url:"good.listBycategory",
      data:{category_id:imagesTabs[tabActive].id},
      success(res){
        let change = `imagesTabs[${tabActive}].list`
        _this.setData({
          [change]:res
        })
      }
    })
  },
  onReady() {
    let _this = this
    let query = wx.createSelectorQuery()
    query.selectAll(".mainContent,.top").boundingClientRect(function (rect) {
      let height = rect[0].height - rect[1].height
      _this.setData({
        style: 'height:' + height + 'px;'
      })
    }).exec()
  },
  
  addCart(e){
    let _this = this
    let {record,index} = 'wx'.getParam(e)
    console.log({index})
    'wx'.$request({
      url:"good.addCart",
      data:{goodId:record.id,number:1},
      toast:2,
      success(res){
        _this._getCart()
      }
    })
  },
  changeTabs(e) {
    console.log(e)
    this.setData({
      activeKey: e.detail.activeKey,
      tabActive:e.detail.currentIndex
    },this.getGoodList)
  },
  toPage(e){
    'wx'.toPageUrl(e)
  },
  onPageScroll(options) {
    const scrollTop = options.scrollTop
    this.setData({
      scrollTop
    })
  }



})




