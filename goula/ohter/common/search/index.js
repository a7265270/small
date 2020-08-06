// pages/search/search.js
Page({

    data: {
      historyTags:[],
      hotTags:[]
        
    },
    onLoad: async function (options) {
        'wx'.title("搜索商品")
    },
    onShow(){
        this._showData()
    },
    async _showData(){
        let historyTags = await 'wx'.getStore('history')
        historyTags = historyTags ||[]
        let _this = this
        'wx'.$request({
            url:'good.hotSearch',
            success(res){
                res = res.map(item=>{
                    return {title:item,highlight:true}
                })
                _this.setData({
                    historyTags,
                    hotTags:res
                })
            }
        })
    },

    async onSearch(event) {
        let keywords = event.detail.value || event.detail.name
        'wx'.toPage({
            url:"../../goods/seatch/index?keywords="+keywords
        })
        'wx'.setHistory(keywords)
    },

    onCancel(event) {
        this.setData({
            search: false
        })
    },

    bindItems(data) {
        if (data.accumulator.length !== 0) {
            this.setData({
                items: data.accumulator
            })
        }
    },

    onDeleteHistory(event) {
        'wx'.removeStore('history')
        this.setData({
            historyTags: []
        })
    }

})