import amapFile from '../../../../libs/gaode/gaode.js';
Page({
	/**
   * 页面的初始数据
   */
	data: {
		searching: false,
		keywords: '',
		scale: 13,
		location: '',
		addValue: '',
		selectIndex: 0,
		hideMap: false,
		tips: []
	},
	bindInput: function (e) {
		var that = this;
		var keywords = e.detail.value;
		let location = this.data.location;

		if (keywords == '') {
			this.toClear();
			return;
		} else {
			this.setData({
				hideMap: true
			});
		}
		var key = 'wx'.$config.amapKey;
		var myAmapFun = new amapFile.AMapWX({ key });
		myAmapFun.getInputtips({
			keywords: keywords,
			location,
			success: function (data) {
				if (data && data.tips) {
					let tips = data.tips.filter((element) => element.location.length > 0);
					that.setData({
						tips
					});
				}
			}
		});
	},
	toClear() {
		this.setData({
			addValue: '',
			tips: [],
			hideMap: false
		});
	},
	bindSearch: function (e) {
		let { record } = 'Wx'.getParam(e);
		this.data.location = record.location;
		this.setData({ hideMap: false, tips: [] });
		this.selectAddress();
	},
	async _showData() {
		const that = this;
		const location = that.data.location;
		let res = await 'wx'.GDmap(location);
		if (res) {
			this.setData({ selectAdd: res[0], tips: [] });
		} else {
			let that = this
			this.setData({
				isShow: true
			}, async () => {
				let re = await 'wx'.confirm('位置信息获取失败,请选择重新获取或使用当前位置.', '重新获取', '当前位置')
				if (re == 1) {
					that._getLocation()
				} else {
					await 'wx'.setStore('addressNo', '请补充详细地址');
					await 'wx'.setStore('selectAddress', '默认当前省市县');
					await 'wx'.setStore('applicationAddress', '默认当前省市县');
					await 'wx'.setStore('applicationLocation', location);
					'wx'.toPage({ type: 'back' });
				}
			})


		}

	},

	//获取定位信息
	async _getLocation() {
		let res = await 'wx'.getLocation();
		if (res) {
			this.setData(res);
			this.data.location = res.lng + ',' + res.lat;
			this._showData();
		}
	},
	async _getHeight() {
		let { height } = await 'wx'.getSize();
		this.setData({ winHeight: height });
	},
	onShow: function () {
		'wx'.title('地址选择')
		this._getLocation();
		this._getHeight();
	},
	selectAddress(e) {
		let storelist = [];
		let location = this.data.location;
		storelist.push({
			latitude: location.split(',')[1],
			longitude: location.split(',')[0]
		});
		this.mapCtx.includePoints({
			padding: [10],
			points: storelist
		});
		this._showData();
	},

	async toSelect() {
		let { selectAdd } = this.data;
		let location = this.data.location;
		let addressInfo = selectAdd.regeocodeData.addressComponent;
		console.log(selectAdd)
		let address = addressInfo.province + addressInfo.city + addressInfo.district;
		let selectAddress = addressInfo.province + ',' + addressInfo.city + ',' + addressInfo.district;
		let addressNo = selectAdd.regeocodeData.formatted_address.split(address)[1]
		await 'wx'.setStore('addressNo', addressNo);
		await 'wx'.setStore('selectAddress', selectAddress);
		await 'wx'.setStore('applicationAddress', address);
		await 'wx'.setStore('applicationLocation', location);
		'wx'.toPage({ type: 'back' });
	},

	/**
   * 生命周期函数--监听页面初次渲染完成
   */
	onReady: function () {
		this.mapCtx = wx.createMapContext('map');
	},

	regionchange(e) {
		// 地图发生变化的时候，获取中间点，也就是用户选择的位置toFixed
		if (e.type == 'end' && (e.causedBy == 'scale' || e.causedBy == 'drag')) {
			var that = this;
			this.mapCtx.getCenterLocation({
				type: 'gcj02',
				success: function (res) {
					that.data.location = res.longitude + ',' + res.latitude;
					that._showData();
				}
			});
		}
	},
	onPullDownRefresh() {
		this._getLocation()
	}
});
