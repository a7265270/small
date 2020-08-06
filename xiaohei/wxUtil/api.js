//微信登录
String.prototype.wxLogin = function (flag) {
	const that = this;
	return new Promise((resolve) => {
		wx.login({
			async success(res) {
				if (res.code) {
					'wx'.$request({
						url: 'wx.login',
						data: { code: res.code },
						async success(re) {
							await 'wx'.setStore('openid', re.openid);
							await 'wx'.setStore('session_key', re.sessionKey);
							await 'wx'.setStore('userId', re.userId);
							resolve(re.sessionKey);
						},
						fail(re) {
							resolve(false);
						}
					});
				} else {
					resolve(false);
				}
			}
		});
	});
};



//微信登录
String.prototype.wxPay = function ({res,fail,success}) {
		wx.requestPayment({
			timeStamp:res.time_stamp,
			nonceStr: res.nonce_str,
			package: res.package_value,
			signType:res.sign_type,
			paySign: res.pay_sign,
			success,
			fail
		})
};