import config from './config.js'

Page({
  onLoad: function(options) {
    let {
      title,
      navigatemark
    } = options
    this.setData({
      title,
      config: config[navigatemark]
    })
    'wx'.title(title)
  },
})