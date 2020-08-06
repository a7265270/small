// pages/components/nav/pages/segment/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    scrollTop: 0,
    imagesTabs: [{
      tab: '客厅1',
      key: 'dining',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/dining-active.png',
        defaultImage: '/images/tab-icon/dining.png',
      },
      list: [
        { name: '客厅1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '卧室1',
      key: 'badroom',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/badroom-active.png',
        defaultImage: '/images/tab-icon/badroom.png',
      },
      brageCount: 2,
      list: [
        { name: '卧室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }, {
      tab: '厨房1',
      key: 'kichten1',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/kichten-active.png',
        defaultImage: '/images/tab-icon/kichten.png',
      },
      list: [
        { name: '厨房1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '浴室1',
      key: 'bathroom1',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/bathroom-active.png',
        defaultImage: '/images/tab-icon/bathroom.png',
      },
      list: [
        { name: '浴室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '客厅2',
      key: 'dining2',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/dining-active.png',
        defaultImage: '/images/tab-icon/dining.png',
      },
      list: [
        { name: '客厅1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '卧室2',
      key: 'badroom2',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/badroom-active.png',
        defaultImage: '/images/tab-icon/badroom.png',
      },
      brageCount: 2,
      list: [
        { name: '卧室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }, {
      tab: '厨房2',
      key: 'kichten2',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/kichten-active.png',
        defaultImage: '/images/tab-icon/kichten.png',
      },
      list: [
        { name: '厨房1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '浴室2',
      key: 'bathroom2',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/bathroom-active.png',
        defaultImage: '/images/tab-icon/bathroom.png',
      },
      list: [
        { name: '浴室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }, {
      tab: '客厅3',
      key: 'dining3',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/dining-active.png',
        defaultImage: '/images/tab-icon/dining.png',
      },
      list: [
        { name: '客厅1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '卧室3',
      key: 'badroom3',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/badroom-active.png',
        defaultImage: '/images/tab-icon/badroom.png',
      },
      brageCount: 2,
      list: [
        { name: '卧室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }, {
      tab: '厨房3',
      key: 'kichten3',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/kichten-active.png',
        defaultImage: '/images/tab-icon/kichten.png',
      },
      list: [
        { name: '厨房1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '浴室3',
      key: 'bathroom3',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/bathroom-active.png',
        defaultImage: '/images/tab-icon/bathroom.png',
      },
      list: [
        { name: '浴室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '客厅4',
      key: 'dining4',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/dining-active.png',
        defaultImage: '/images/tab-icon/dining.png',
      },
      list: [
        { name: '客厅1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '客厅6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '卧室4',
      key: 'badroom4',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/badroom-active.png',
        defaultImage: '/images/tab-icon/badroom.png',
      },
      brageCount: 2,
      list: [
        { name: '卧室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '卧室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }, {
      tab: '厨房4',
      key: 'kichten4',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/kichten-active.png',
        defaultImage: '/images/tab-icon/kichten.png',
      },
      list: [
        { name: '厨房1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '厨房6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    },
    {
      tab: '浴室4',
      key: 'bathroom4',
      picPlacement: 'top',
      image: {
        activeImage: '/images/tab-icon/bathroom-active.png',
        defaultImage: '/images/tab-icon/bathroom.png',
      },
      list: [
        { name: '浴室1', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室2', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室3', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室4', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室5', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
        { name: '浴室6', image: '/images/tab-icon/dining-active.png', detail: '详细描述' ,quanity:0},
      ]
    }
    ],
    brageCount: 5
  },

  onReady() {
    let _this = this
    let query = wx.createSelectorQuery()
    query.selectAll(".mainContent,.top").boundingClientRect(function (rect) {
      console.log(rect)
      let height = rect[0].height - rect[1].height
      _this.setData({
        style: 'height:' + height + 'px;'
      })
    }).exec()
    this._getHeight();
  },
  _getHeight() {
    let _this = this
    let query = wx.createSelectorQuery()
    let { imagesTabs } = this.data
    query.selectAll(".h-anchor").boundingClientRect(function (rect) {
      imagesTabs.forEach((v, k) => {
        v.height = rect[k].top-rect[0].top
      })
      _this.setData({
        rect,
        imagesTabs
      })
    }).exec()
  },
  changeTabs(e) {
    this.setData({
      activeKey: e.detail.activeKey
    })
  },
  onScrollPage(e) {
    'wx'._(() => {
      let { imagesTabs,activeKey } = this.data
      let top = e.detail.scrollTop
      
      let list = imagesTabs.filter((item)=>item.height<=top)
      console.log({top,list})
      let news = list.length?list[list.length-1].key:imagesTabs[0].key
      news!=activeKey && this.setData({
        tabActive:news
      })
    }, 300)
  },
  onPageScroll(options) {
    const scrollTop = options.scrollTop
    this.setData({
      scrollTop
    })
  }



})




