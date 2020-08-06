Component({
	options: {
		addGlobalClass: true
	},
	properties: {
		type: String,
		phone: String,
		lat: Number,
		lng: Number,
		name: String,
		address: String,
		url: String,
		list: Array
	},
	data: {},
	methods: {
		onClick() {
			let { type, phone, lat, lng, name, address, url, list } = this.data;
			switch (type) {
				case 'call':
					wx.makePhoneCall({
						phoneNumber: phone
					});
					break;
				case 'map':
					wx.openLocation({
						latitude: lat,
						longitude: lng,
						scale: 14,
						name,
						address
					});
					break;
				case 'image':
					let index = 0
					for(let v of list){
						if(v.indexOf('http')==-1){
							list[index] = 'wx'.$config.downUrl +v
						}
						index++
					}
					if(list.length==0){
						list = [url]
					}

					console.log(url,list)
					wx.previewImage({
						current: url, // 当前显示图片的http链接
						urls: list // 需要预览的图片http链接列表
					});
					break;
			}
		}
	}
});
