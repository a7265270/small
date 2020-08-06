import { config } from '../config.js'; //基础配置文件、
//弹出确认框
function _confirmText(confirm, fail, complete) {
  return new Promise(async (resolve) => {
    if (confirm) {
      let re = await 'wx'.confirm(confirm);
      if (re != 1) {
        //点击取消按钮	
        fail &&
          fail({
            type: 'cancel'
          });
        complete &&
          complete({
            type: 'cancel'
          });
        resolve(false);
      } else {
        //点击确认按钮
        resolve(true);
      }
    } else {
      resolve(true);
    }
  });
}

// 隐藏loadding层、界面加载数据未渲染完成后隐藏
function _loadHide() {
  wx.xh && wx.xh.loadding && wx.xh.loadding({
    show: false,
  })
}

//修改loadding层的状态 
//network'无网络情况'
function _changeLoadType(type) {
  wx.xh.loadding({
    show: true,
    type
  })
}

// loadding层接口失效  重新刷新调用接口
function _refreshLoading(Fn) {
  wx.xh.refresh = () => {
    Fn()
    return this;
  };
}

//解析api里面的结构参数
async function _analyApi(url, newapi) {
  return new Promise((resolve) => {
    const urlArray = url.split('.');
    for (let i of urlArray) {
      newapi = newapi[i];
    }
    console.log({ newapi })
    return resolve(newapi);
  })

}


function _analyLoigin(login, token) {
  if (login == 1) {
    return true
  } else if (login == 2) {
    return token || false;
  } else if (login == 3) {
    // 暂时不放
    return false;
  }

}

function _loadRefresh(loadRefresh) {
  if (loadRefresh) {
    _changeLoadType('network')
    _refreshLoading(loadRefresh)
  }
}
//解析请求返回的结果  * toast					接口是否要提示（默认3） 1不提示 2 正确时候提示 3 错误时候提示  4 正确错误都提示
async function _analyRequest({ res, success, toast, showLoading }) {
  let {message} = res
  console.log({showLoading,toast})
  if (toast || showLoading) {
    //提示语显示一秒钟后在返回
    showLoading && 'wx'.hideMask();
    (toast == 2 || toast == 4 ||showLoading) && 'wx'.toast(message, 2000, showLoading);
    showLoading && (await 'wx'.sleep(1000));
    success && success(res, this._loadHide);
  } else {
    //直接返回
    success && success(res, this._loadHide);
  }
}

function _getPageResult({ total, data, pagesize }) {
  let list = []
  let lastPage = total % pagesize == 0 ? total / pagesize : total / pagesize + 1
  for (let i = 0; i < pagesize; i++) {
    list.push(data)
  }
  return {
    data: {
      lastPage,
      list,
      total,
      pagesize,
    }
  }
}


class Hutil {

}

Hutil._getPageResult = _getPageResult
Hutil._loadRefresh = _loadRefresh
Hutil._analyRequest = _analyRequest
Hutil._analyLoigin = _analyLoigin
Hutil._confirmText = _confirmText
Hutil._loadHide = _loadHide
Hutil._changeLoadType = _changeLoadType
Hutil._refreshLoading = _refreshLoading
Hutil._analyApi = _analyApi
export { Hutil };
