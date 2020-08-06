Page({
  data: {
   
  },
  async onLoad (o) {
    this._showData()
  },

  async _showData(){
    let _this = this
    let {lat,lng} = await 'wx'.getLocation()
    console.log('我的位置',{lat,lng})
    'wx'.$request({
      url:"store.detail",
      data:{lat,lng},
      success(res){
        res.img = res.img.split(",")
        let markers =  [{
          iconPath: "/images/goula/logo.jpeg",
          id: 1,
          latitude: res.lat,
          longitude: res.lng,
          callout:{
            content:"购辣量贩食品工厂",
            color:"#fff",
            bgColor:"#d81e06",
            borderRadius:"20",
            padding:5,
            anchorY	:-5,
            display:"ALWAYS",
            textAlign:"center"
          },
          width: 20,
          height: 20
        }];
        res.markers = markers
        _this.setData(res)
      }
    })
  },
  onPullDownRefresh: function () {

  },
})