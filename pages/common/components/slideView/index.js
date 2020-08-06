const navConfig=[
  {
    title: "基本案例",
    type: 0,
    config: {
      slideWidth: 200,
    }
  },
  {
    title: "禁止滑动",
    type: 1,
    config: {
      slideWidth: 200
    }
  },

  {
    title: "自定义阈值",
    type: 2,
    config: {
      slideWidth: 200,
      threshold: 50
    }
  },

  {
    title: "点击后自动关闭",
    type: 3,
    config: {
      slideWidth: 200
    }
  },


  {
    title: "开启和关闭事件",
    type: 4,
    config: {
      slideWidth: 200
    }
  },
  {
    title: "通过按钮关闭",
    type: 5,
    config: {
      slideWidth: 200
    }
  },

  {
    title: "经典案例",
    type: 6,
    config: {
      slideWidth: 200
    }
  }
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    close: false,
    navConfig: navConfig,
    currentConf: {

    }
  },

  // 点击左边
  onSlideTap(e) {
    console.log(e)
  },

  // 关闭slide
  onCloseTap(e) {
    wx.showToast({
      title: 'handle close',
      icon: 'none'
    })
  },

  // 打开slide
  onOpenTap(e) {
    wx.showToast({
      title: 'handle open',
      icon: 'none'
    })
  },

  // 关闭第五个slide
  onCloseFiveTap(e) {
    this.setData({
      close: true
    })
  },

  // 打开购物车菜单栏
  onSlideOpenTap(e) {
    const id = e.currentTarget.dataset.id
    if(id == 1) {
      this.setData({
        close2: true,
        close3: true,
      })
    } else if(id == 2) {
      this.setData({
        close1: true,
        close3: true,
      })
    } else {
      this.setData({
        close1: true,
        close2: true,
      })
    }

  },

})