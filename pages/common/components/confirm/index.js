// pages/view/pages/dialog/index.js
const navConfig = [
  {
    title: "提示框",
    type: 0,
    config: {
      show: true,
      type: "alert",
      title: "标题",
      showTitle: true,
      locked: false,
      content: "这个是提示框",
      confirmText: '确定',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "确认框",
    type: 1,
    config: {
      show: true,
      type: "confirm",
      showTitle: true,
      title: "标题",
      content: "这个是确认框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },

  {
    title: "无标题提示框",
    type: 2,
    config: {
      show: true,
      type: "alert",
      showTitle: false,      
      content: "这个是无标题提示框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "无标题确认框",
    type: 3,
    config: {
      show: true,
      type: "confirm",
      showTitle: false,
      content: "这个是无标题确认框",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  {
    title: "自定义按钮文字",
    type: 4,
    config: {
      show: true,
      type: "confirm",
      title: "提问",
      showTitle: true,
      content: "PHP是最好的语言吗？",
      confirmText: 'yes~',
      confirmColor: '#f60',
      cancelText: 'no~',
      cancelColor: '#999'  
    }
  },
  {
    title: "传入自定义标签",
    type: 5,
    config: {
      show: true,
      type: "confirm",
      showTitle: true,
      title:'标题',
      content: "",
      confirmText: '确定',
      confirmColor: '#3683d6',
      cancelText: '取消',
      cancelColor: '#999'   
    }
  },
  
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navConfig: navConfig,
    currentConf: {

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onA(){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗'
    })
  },

  // 确定按钮
  onConfirmTap(e){
    console.log(e)
    setTimeout(() => {
      wx.showToast({
        title: '点击了确定～',
        icon: 'none'
      })
    }, 100)

  },

  // 取消按钮
  onCancelTap(e) {
    setTimeout(()=> {
      wx.showToast({
        title: '点击了取消～',
        icon: 'none'
      })
    },100)
  },

  // dio 点击事件
  onDialogTap() {
    const type = this.data.type
    if (type === 4) {
      wx.showToast({
        title: '请点击按钮取消！',
        icon: 'none'
      })
    }
  },

  // 显示 dio
  onShowDioTap(e) {
    console.log(e)
    const type = e.currentTarget.dataset.type
    const config = JSON.parse(JSON.stringify(this.data.navConfig[type].config))
    console.log(type)
    this.setData({
      currentConf: config,
      type
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})