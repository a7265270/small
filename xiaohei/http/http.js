import { config } from '../config.js'; //基础配置文件、
import { api } from '../api/api.js'; //api接口文档
import { Hutil } from './util.js';
import { authParam } from './paramAuth.js';
/***
 * url          	api对应的接口名称
 * data         	要传到后台的数据
 * success     	  接口返回成功
 * fail        	  接口返回失败
 * complete    	  接口最终返回
 * confirm 				接口是否要弹出提示框的提示语
 * toast					接口是否要提示 1（默认）不提示 2 正确时候提示 3 错误时候提示4 正确错误都提示
 * showLoading		接口提交的时候显示遮罩层
 * loadType				search 查询中  默认不填则显示提交中
 * loadRefresh		加载失败要重新刷新界面的回调函数
 */
class HTTP {
	constructor(data) {
		this.api = api;
		this._paramRes(data);
	}
	//分解api参数
	async _paramRes(datas) {
		let { url: apiUrl, data, fail, success, complete, confirm, showLoading, loadRefresh, toast = 3 } = datas
		const that = this;
		let openid = await 'wx'.getStore('openid')
		// 获取自定义api参数 loing 1表示时刻调用接口  2登录才调用接口  3没有登录强制提醒登录
		let { param, url, method, login = 1,modData,modPage } = await Hutil._analyApi(apiUrl, this.api)
		//根据登录状态判断是否要调用接口/判断为false则直接不调用接口
		if (!Hutil._analyLoigin(login, openid)) {
			return
		}
		//校验参数
		authParam({
			param: param || false,
			data,
			// 参数是否正确
			async success(res) {
				//判断是否有确认语
				let confirmFlag = await Hutil._confirmText(confirm, fail, complete);
				//提示框点击取消
				if (!confirmFlag) {
					return false
				}
				if (config.debug) {
					// await 'wx'.sleep(2000);
					success(Hutil._getPageResult({data:modData,total:modPage.total,pagesize:modPage.pagesize}))
				} else {
					//是否要弹出遮罩层防止重复点击
					showLoading && 'wx'.showMask(showLoading);
					//开始请求
					that._request({
						url,
						method,
						data: res,
						fail,
						success,
						complete,
						toast,
						showLoading,
						loadRefresh,
						openid
					});
				}

			},
			fail(res) {
				complete && complete(res);
				fail && fail(res);
			}
		});
	}

	//发送请求
	async _request({ url, data, method = 'get', success, fail, complete, toast, showLoading, loadRefresh, openid }) {
		let userId = await 'wx'.getStore("userId")
		let contenttype  = 'application/x-www-form-urlencoded;charset=utf-8';
		if(method=='post'){
			contenttype = 'application/json'
		}
		wx.request({
			url: config.api_base_url + url,
			method,
			data,
			timeout: 10000,
			header: {
				version: config.version,
				openid: openid || '',
				userId:userId,
				apiFrom: 'minp',
				'content-type': contenttype,
				Accept: '*/*'
			},
			success: async (res) => {
				const code = res.statusCode.toString();
				if (code.startsWith('2')) {
					Hutil._analyRequest({ success, fail, res:res.data, toast, showLoading })
				} else {
					Hutil._loadRefresh(loadRefresh)
					fail && fail(res);
				}
			},
			// 请求出现问题报错，一般都是网络原因
			fail: (err) => {
				Hutil._loadRefresh(loadRefresh)
				if (err.errMsg == 'request:fail timeout') {
					'wx'.toast('请求超时，请重试')
				}
				fail && fail(err);
			},
			complete(res) {
				wx.stopPullDownRefresh({
				})
				complete && complete(res);
			}
		});
	}
}

export { HTTP };
