import { HTTP } from '../http/http.js';
import { config } from '../config.js';
require("./wx.js")
require("./api.js")
import amapFile from '../../libs/gaode/gaode.js';
import { _ } from '../../utils/load.js';

// 封装请求
String.prototype.$request = (data) => new HTTP(data);

// 全局获取配置参数
String.prototype.$config = config;

//防止重复操作     
//   举例  再300毫秒进行多次点击或操作的时候 只会调用一次
//   'wx'._(() => {
//        执行的方法
//   }, 300)
String.prototype._ = _;


String.prototype.setCartNum = async function(num,flag){
	
};

String.prototype.setCartNum = async function(num,flag){
	if(flag){
		if(num>0){
			wx.setTabBarBadge({
				index: 2,
				text: num+''
			})
		}else{
			wx.removeTabBarBadge({
				index: 2,
			})
		}
	}else{
		'wx'.$request({
      url:"good.cartCount",
      success(res){
				if(res>0){
					wx.setTabBarBadge({
						index: 2,
						text: res+''
					})
				}else{
					wx.removeTabBarBadge({
						index: 2,
					})
				}
      }
    })
	}
	
};


// 添加历史搜索
String.prototype.setHistory = async function(value,max=10){
	let historyTags = await 'wx'.getStore('history')
	historyTags = historyTags||[]
	if(historyTags.findIndex(item=>item==value)<0){
		historyTags.unshift(value)
		if(historyTags.length==max){
			historyTags.pop()
		}
	  'wx'.setStore('history',historyTags)
	}
};




/*********高德 **********/
String.prototype.GDmap = function (location) {
	location = location || false;
	return new Promise((resolve) => {
		var myAmapFun = new amapFile.AMapWX({ key: config.amapKey });
		myAmapFun.getRegeo({
			location,
			success: function (data) {
				resolve(data);
			},
			fail: function (info) {
				resolve(false);
			}
		});
	});
};
/*********高德 **********/


