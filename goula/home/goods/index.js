// components/spu-scroll/index.js
Component({
  /**
   * 组件的属性列表
   */
  externalClasses:['l-class'],
  properties: {
    spuList:Array,
    title:String,
    listType:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    console.log(this.data)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCart(e){
      let _this = this
      let {record,index} = 'wx'.getParam(e)
      console.log({index})
      'wx'.$request({
        url:"good.addCart",
        data:{goodId:record.id,number:1},
        toast:2,
        success(res){
         'wx'.setCartNum()
        }
      })
    },
    toPage(e){
      'wx'.toPageUrl(e)
    }
  }
})
