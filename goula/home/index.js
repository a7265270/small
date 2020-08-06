Page({
  data: {

    swiper: [{
      imageUrl: "/images/goula/del/banner.jpg"
    }],
    goods: [{
      title: "热卖商品",
      list: [{
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      },
      {
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      },
      {
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      },
      {
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      }
      ]
    },
    {
      title: "新到商品",
      list: [{
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      }]
    },
    {
      title: "促销商品",
      list: [{
        image: '/images/goula/del/test.jpg',
        name: '测试商品1',
        price: '10.00'
      }]
    }
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    userInfo: {},
    menuList: [{
      name: '首页',
      img: '/images/goula/home.png',
      imgActive: '/images/goula/home_active.png',
      num: 0,
      refresh: false
    },
    {
      name: '全部商品',
      img: '/images/goula/category.png',
      imgActive: '/images/goula/category_active.png',
      num: 0,
      refresh: false
    },
    {
      name: '购物车',
      img: '/images/goula/shop.png',
      imgActive: '/images/goula/shop_active.png',
      num: 0,
      refresh: false
    },
    {
      name: '我的',
      img: '/images/goula/user.png',
      imgActive: '/images/goula/user_active.png',
      num: 0,
      refresh: false
    },
    ],
    first: true,
    active: 0
  },
  onPullDownRefresh() {
   this._showData()
  },
  onLoad(o) {
    this._showData()
  },
  _getCartNum(){
    'wx'.setCartNum()
  },
  _getGoodList(){
    let _this = this
    'wx'.$request({
      url:'good.typeList',
      data:{type:'new,hot'},
      success(res){
        _this.setData({
          goodList:res
        })
        console.log('3',res)
      }
    })
  },
  async _showData() {
    this._getGoodList()
    wx.hideShareMenu()
    let userInfo = await 'wx'.getStore('userInfo')
    this.setData({
      first: false,
      active: userInfo ? this.data.active : 0,
      refresh: true,
      userInfo,
      userId: userInfo.userId || ''
    })
    this._getCartNum()
  },
  async onShow() {
    if (!this.data.first) {
      this._showData()
    }
  },
  toPage(e) {
    'wx'.toPageUrl(e);
  },
})