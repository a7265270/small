import { _ } from '../../utils/load.js';

//睡眠时间
String.prototype.sleep = function (second) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, second);
	});
};
/**
 * num 后退层数
 * timeOut 多久后执行跳转
 * noTime  多次点击触发
 */
String.prototype.toPage = async function ({ url, type, num, success, fail, pageData, timeOut, noTime }) {
	timeOut = timeOut || 0;
	setTimeout(() => {
		_(
			function () {
				switch (type) {
					//关闭其他所有界面，跳转到tab界面
					case 'tab':
						console.log({url})
						wx.switchTab({
							url
						});
						break;
					//  关闭当前界面 ，返回
					case 'back':
						// 回退前 delta(默认为1) 页面 // 回退前 delta(默认为1) 页面
						num = num ? num : 1;
						const pageLen = getCurrentPages().length;
						if (pageLen > 1) {
							wx.navigateBack({
								delta: num,
								success(res) {
									success && success(res);
								},
								fail(res) {
									fail && fail(res);
								}
							});
						} else {
							wx.reLaunch({
								url,
								success(res) {
									success && success(res);
								},
								fail(res) {
									fail && fail(res);
								}
							});
						}

						break;
					//  关闭所有界面 ，跳转到某页
					case 'noback':
						wx.reLaunch({
							url,
							success(res) {
								console.log('成功', res)
								success && success(res);
							},
							fail(res) {
								console.log('失败', res)
								fail && fail(res);
							}
						});
						break;
					//  关闭当前界面 ，跳转到某页
					case 'redirect':
						wx.redirectTo({
							url,
							success(res) {
								console.log('success', res)
								success && success(res);
							},
							fail(res) {
								console.log('fail', res)
								fail && fail(res);
							}
						});
						break;
					default:
						wx.navigateTo({
							url,
							success(res) {

								success && success(res);
							},
							fail(res) {
								fail && fail(res);
							},
							complete(res) {
								console.log('结果', res)
							}
						});
						break;
				}
			},
			noTime ? 0 : 1000,
			true
		);
	}, timeOut);
};

//总体确认框
String.prototype.confirm = function (title, confirmText = '确认', cancelText = '取消') {
	if (!title) {
		return false;
	}
	return new Promise((resolve) => {
		wx.showModal({
			title: '提示',
			content: title,
			confirmText,
			cancelText,
			success(res) {
				if (res.confirm) {
					resolve(1);
				} else if (res.cancel) {
					resolve(2);
				}
			},
			fail(res) {
				console.log('失败', res)
			}
		});
	});
};

String.prototype.toPageUrl = function (e) {
	let { url, type, confirm, } = 'Wx'.getParam(e);
	type = type || '';
	'wx'.toPage({
		url, type, success(res) {
			console.log('成功', res)
		}, fail(res) {
			console.log('失败', res)
		}
	});
};

//获取界面的参数
String.prototype.getParam = function (e) {
	return e.currentTarget.dataset;
};

//获取表单值
String.prototype.getValues = function (e) {
	return e.detail.value;
};

/*********轻提示 **********/
String.prototype.toast = function (datas, second, mask) {
	mask = mask || false;
	if (typeof datas == 'string') {
		var title = datas;
	} else if (typeof datas == 'object') {
		var { title, second, success = false, fail = false } = datas;
	}
	second = second || 2000;
	title &&
		wx.showToast({
			mask,
			title: title,
			icon: 'none',
			duration: second,
			success(res) {
				success && success();
			},
			fail() {
				fail && fail();
			}
		});
};

//总体确认框
String.prototype.alert = function (title) {
	return new Promise((resolve) => {
		wx.showModal({
			title: '提示',
			content: title,
			showCancel: false,
			success(res) {
				if (res.confirm) {
					resolve(1);
				}
			}
		});
	});
};

/*********复制文字 **********/
String.prototype.copy = function (data, title) {
	data = data + ''
	wx.setClipboardData({
		data,
		success(res) {
			'wx'.toast(title || '复制成功');
		},
		fail(res) {
			'wx'.toast('复制失败');
		}
	});
};
/*********复制文字 **********/
/*********粘贴文字 **********/
String.prototype.paste = function () {
	wx.getClipboardData({
		success(res) {
			return res.data;
		}
	});
};
/*********粘贴文字 **********/

//设置本地缓存
String.prototype.setStore = function (k, v) {
	return new Promise((resolve) => {
		wx.setStorage({
			key: k,
			data: v,
			success(res) {
				resolve(true);
			},
			fail() {
				resolve(false);
			}
		});
	});
};

//移除指定本地缓存
String.prototype.removeStore = function (k, v) {
	return new Promise((resolve) => {
		wx.removeStorage({
			key: k,
			success(res) {
				resolve(true);
			},
			fail() {
				resolve(false);
			}
		});
	});
};

//清除所有的缓存
String.prototype.clearStore = function () {
	return new Promise((resolve) => {
		wx.clearStorage({
			success(res) {
				resolve(true);
			},
			fail() {
				resolve(false);
			}
		});
	});
};

//得到指定缓存
String.prototype.getStore = function (k, v) {
	return new Promise((resolve) => {
		wx.getStorage({
			key: k,
			success(res) {
				resolve(res.data);
			},
			fail() {
				v = v || false;
				resolve(v);
			}
		});
	});
};

String.prototype.title = function (title) {
	wx.setNavigationBarTitle({
		title
	})
};
String.prototype.showMask = function (title, flag) {
	wx.showLoading({
		title: title,
		mask: true
	});
	if (!flag) {
		setTimeout(() => {
			wx.hideLoading();
		}, 10000);
	}
};


/**获取当前路径上的参数 */
String.prototype.getPageParam = function () {
	const pages = getCurrentPages(); //获取加载的页面
	return pages[pages.length - 1].options;
};


/****** 提示用户有更新*******/
String.prototype.isNewVer = function () {
	const updateManager = wx.getUpdateManager();
	updateManager.onCheckForUpdate(function (res) {
		console.log('版本更新', res);
		if (res.hasUpdate) {
			updateManager.onUpdateReady(function () {
				wx.showModal({
					title: '更新提示',
					content: '版本已更新，建议您退出小程序重新登录，否则可能会出现异常的问题',
					success(res) {
						if (res.confirm) {
							updateManager.applyUpdate();
						}
					}
				});
			});
		}
	});
	updateManager.onUpdateFailed(function () {
		wx.showModal({
			title: '已经有新版本了',
			content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~'
		});
	});
};

function showConfrim(content, type) {
	wx.lin.showDialog({
		type: 'confirm',
		title: '提示',
		content,
		confirmText: '开启',
		confirmType: type || 'openSetting',
		cancelText: '取消',
		success: (res) => {
			if (res.confirm) {
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});
}
//关闭LOADDING
String.prototype.hideLoadding = function (content) {
	wx.xh && wx.xh.loadding({
		show: false,
	})
}



//获取用户地址
String.prototype.getLocation = function (flag) {
	return new Promise((resolve) => {
		wx.getLocation({
			type: 'gcj02',
			success(res) {
				const lat = res.latitude;
				const lng = res.longitude;
				resolve({ lat, lng });
			},
			fail(res) {
				console.log('定位失败原因', res)
				'wx'.openSetting('需要获取定位授权,请到小程序设置中打开授权或打开手机定位')
				resolve(false);
			}
		});
	});
};

//获取用户手机的宽高
String.prototype.getSize = function () {
	return new Promise((resolve) => {
		wx.getSystemInfo({
			success: function (res) {
				resolve({ height: res.windowHeight, width: res.windowWidth, brand: res.brand, model: res.model });
			},
			fail() {
				resolve(false);
			}
		});
	});
};

String.prototype.hideMask = function (title) {
	wx.hideLoading();
};


// 开启定位权限
String.prototype.openSetting = function (content) {
	wx.lin.showDialog({
		type: 'confirm',
		title: '是否打开设置页',
		content,
		confirmText: '确定',
		confirmType: 'openSetting',
		cancelText: '取消',
		success: (res) => {
			if (res.confirm) {
			} else if (res.cancel) {
			}
		}
	});
};