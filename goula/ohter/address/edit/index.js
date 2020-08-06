Page({
  data: {
    region: false,
    is_defalut: 0,
    applicationLocation:''
  },
  toPage(e) {
    'wx'.toPageUrl(e)
  },

  async toBind(){
    let userInfo = await 'wx'.getStore('userInfo')
    this.setData({
      recipientsMobilePhone:userInfo.mobileNo
    })
  },
  async onLoad(o) {
    'wx'.title(o.id?'编辑地址':'新增地址')
    if (o.id) {
      this.setData({
        id: o.id,
      }, this._showData)
    }
  },
  async onShow() {
    let addressNo = await 'wx'.getStore('addressNo')
    let selectAddress = await 'wx'.getStore('selectAddress')
    let applicationAddress = await 'wx'.getStore('applicationAddress')
    let applicationLocation = await 'wx'.getStore('applicationLocation')
    if (addressNo) {
      this.setData({
        detail:addressNo,
        selectAddress:selectAddress,
        applicationAddress,
        applicationLocation
      }, async () => {
        'wx'.removeStore('addressNo')
        'wx'.removeStore('selectAddress')
        'wx'.removeStore('applicationAddress')
        'wx'.removeStore('applicationLocation')
      })
    }
  },
  _showData() {
    let that = this
    let { id } = this.data
    'wx'.$request({
      url: 'address.detail',
      data: { id },
      success(res) {
        let data = res
        data.selectAddress = data.province+','+ data.city+','+data.district
        data.applicationLocation = data.lng+','+data.lat
        that.setData(data)
      }
    })
  },
  toCommit(e) {
    let that = this
    let data = 'wx'.getValues(e)
    let { is_defalut, deliveryId ,applicationLocation,id} = this.data
    let region = data.selectAddress?data.selectAddress.split(','):''
    applicationLocation = applicationLocation?applicationLocation.split(','):''
    data.province = region[0];
    data.city = region[1];
    data.district = region[2];
    data.lat =applicationLocation[1]||''
    data.lng =applicationLocation[0]||''
    data.is_dhuefalut = is_defalut
    let url = 'address.add'
    let confirm = "确认新增收货地址？"
    if (id) {
      data.id = id
      url = 'address.edit'
      confirm = "确认修改收货地址？"
    }

    
    'wx'.$request({
      url,
      data,
      confirm,
      showLoading: true,
      success(res) {
        'wx'.toPage({
          type: 'back'
        })
      }
    })
  },
  toChange(e) {
    this.setData({
      is_defalut: 'wx'.getValues(e).length > 0 ? 1 : 0
    })
  },
  //选择地区
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value,
      regionCode: e.detail.code
    })
  },
  toAddress() {
    'wx'.chooseAddress((res) => {
      console.log(res)
      this.setData({
        recipientsName: res.userName,
        recipientsMobilePhone: res.telNumber,
        region: [res.provinceName, res.cityName, res.countyName],
        recipientsDetailAddress: res.detailInfo
      }, this._getNode)
    })
  },
  _getNode() {
  }
})