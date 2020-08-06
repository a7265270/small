require("./xiaohei/wxUtil/common.js");
App({
  async onLaunch() {
    'wx'.wxLogin()
  },
  onError(e){
  },
  globalData: {
    userInfo: null
  }
})