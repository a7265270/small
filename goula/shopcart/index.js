import deviceUtil from "../../miniprogram_npm/lin-ui/utils/device-util"
Page({
  data: {
    first:true,
    loadData: 0,
    totalPrice:0,
    capsuleBarHeight: deviceUtil.getNavigationBarHeight(),
  },
  toShop(){
    'wx'.toPage({
      url:'/goula/category/index',
      type:'tab'
    })
  },
  onShow(){
    if(!this.data.first){
      this.setData({
        initData:true,
      },_this._countPrice)
    }
  },
  onLoad: function (options) {
    'wx'.title('购物车')
    this.setData({
      loadData: ++this.data.loadData,
      pageData: {
        url: 'good.cartPageList',
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
        {name:'删除',type:'error',bgColor:'',icon:'',iconSize:'',iconColor:''}
      ]
    })
    this.data.first = false
  },
  slideTap(e){
    console.log(e)
    let id = e.detail.data.id
    let _this = this
    'wx'.$request({
      url:"good.deleteCart",
      confirm:"确认删除?",
      data:{cart_ids:id},
      success(){
        _this.setData({
          checkList:[],
          initData:true,
          checkAll:false
        },_this._countPrice)
      }
    })

  },
  onCheckBox(e){
    let list = e.detail
    let {total} = this.data
    this.setData({
      checkList:list,
      slectAll:list.length == total
    },this._countPrice)
  },
  toUpdateNum(e){
    this._countPrice(e.detail)
  },
  _countPrice(data){
    let _this = this
    let{checkList} = this.data
    if(checkList.length==0){
      _this.setData({
        totalPrice:0
      })
      return
    }
    let price = 0
    checkList.forEach((item,index)=>{
      if(data&&data.id==item.id){
        price+=data.goods_price*data.quantity
      }else{
        price+=item.goods_price*item.quantity
      }
      if(index==checkList.length-1){
        price = Math.floor(parseFloat(price*100))/100;
        _this.setData({
          totalPrice:price
        })
      }
    })
    
  },

  toFinsh(e){
    let {checkList} = this.data
    if(checkList.length==0){
      'wx'.toast('您还没有勾选商品哦~')
      return
    }
    let ids = checkList.map(item=>{
      return item.id
    })
    'wx'.toPage({
      url:"/goula/ohter/order/preview/index?type=cart&ids="+ids.join(',')
    })

  },
  onAfter(e){
    this.setData({
      list:e.detail.list,
      total:e.detail.total
    })
  },
  // 全选按钮
  checkboxChange(e){
    let value = 'wx'.getValues(e)
    let checkAll = value.length===0
    if(!checkAll){
      this.setData({
        checkAll:!checkAll,
        checkList:[]
      },this._countPrice)
    }else{
      this.setData({
        checkAll:!checkAll
      })
    }
    

  },
  onShow: function () {

  },
})