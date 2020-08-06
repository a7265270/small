//index.js
import naviConfigs from './nav.js';
Page({
  data: {
    naviConfigs: naviConfigs
  },

  onLoad: function() {
  },

  onShareAppMessage() {

  },

  onNaviCard(e) {
    let {
      title,
      navigatemark
    } = 'wx'.getParam(e)
    wx.navigateTo({
      url: '/pages/common/content/index?title=' + title + '&navigatemark=' + navigatemark
    });
  },

  onCard() {
    // const path = e.target.dataset.path
    let {
      title,
      navigatemark
    } = 'wx'.getParam(e)
    wx.navigateTo({
      url: '/pages/common/content/index?title=' + title + '&navigatemark=' + navigatemark
    });
  }
});