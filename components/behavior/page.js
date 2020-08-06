const pageBev = Behavior({
	properties: {
		data: {
			type: Object
		},
		beginTime: {
			type: String,
			value: ''
		},
		endTime: {
			type: String,
			value: ''
    },
    otherData:{
      type:[Object,String],
      value:''
    },
		tapSelf: {
			type: Boolean,
			value: false
		},
		path:{
			type: String,
			value: ''
		},
		index:Number,
		list:Array
	},
	methods: {
		toPage(e) {
			'wx'.toPageUrl(e);
		}
	}
});

export default pageBev ;
