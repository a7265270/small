Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  externalClasses: ['h-list','h-content','h-checkbox-color','list-item','item-left'],
  properties: {
    loadData: {
      type: Number,
      value: 0
    },
    pageData: Object,
    list: {
      type: Array,
      value: []
    },
    path: {
      type: String,
      value: ''
    },
    errData: {
      type: [Object, Boolean],
      value: false
    },
    searchData: {
      type: [Object, Boolean],
      value: false
    },
    slideItems:{
      type:Array,
      value:[]
    },
    noData: {
      type: Object,
      value: {
        // bgColor 背景颜色
        // buttonText 空数据按钮显示
        // image  空数据显示的图片路径
        // describe 空数据显示的描述
        // type 空数据附带的类型  cart
      }
    },
    checkName:{
      type:String,
      value:''
    },
    checkbox:{
      type:Boolean,
      value:false
    },
    checkAll:{
      type:Boolean,
      value:false,
      observer(newValue,oldValue){
        console.log({newValue,oldValue})
      
      }
    },
    tabList:{
      type:Array,
      value:[]
    },
    active:{
      type:Number,
      value:0
    },
    initData:{
      type:Boolean,
      value:false,
      observer(newValue,oldValue){
        if(newValue){
          this.setData({
            initData:false
          })
          this._initData()
        }
      } 
    }
  },
  observers: {
    checkAll:function(newValue){
      console.log({newValue})
      let {list} = this.data
      list.forEach((item)=>{
        item.checked = newValue
      })
      
      this.setData({
        list
      },()=>{this._getChecked(newValue)})
    },
    loadData: function (data) {
      let {
        hasMore,
        isloadding,
        pageData
      } = this.data;
      //没有更多了  正在请求中
      if (data == 0 || !pageData || !hasMore || isloadding) {
        return;
      }
      this._setError(false);
      console.log('33333',data)
      if (data == 999999) {
        this._initData();
        return;
      }
      ++this.data.page;
      this._showData();
    }
  },
  lifetimes: {
    ready() {
      console.log(this.data)
    }
  },
  data: {
    isloadding: false,
    hasMore: true, 
    page: -1,
    errData: false,
    isRefresh: false
  },
  methods: {
    changeTabs(e){
      this.setData({
        active:e.detail.currentIndex,
      },this._initData)
    },
    _getChecked(flag){
      let {list} = this.data
      this.triggerEvent('checkboxChange',flag?list:[])
    },
    // chebox选择
    checkboxListChange(e){
      console.log('单选',e)
      let values = 'wx'.getValues(e)
      let {list} = this.data
      let selectList = []
      values.forEach((item)=>{
        selectList.push(list[item])
      })
      console.log({selectList})
      this.triggerEvent('checkboxChange',selectList)
    },
    toMyTap(e){
      console.log('333',e)
      let {list} = this.data
      let index = list.findIndex((value) => {
        return value.id == e.detail.id
      })
      console.log(index)
      this.data.list[index].quantity = e.detail.quantity
      this.triggerEvent('myTap',e.detail)
    },
    // 滑动点击
    onSlideOpenTap(e){
      let {index} = 'wx'.getParam(e)
      let {list} = this.data
      let open = []
      list.forEach(v=>{
        open.push(false)
      })
      open[index] = true
      this.setData({
        open
      })
    },
    slideTap(e){
      let {type,data} = 'wx'.getParam(e)
      this.triggerEvent('slideTap',{
        data,
        type
      })
    },
    _showData() {
      let that = this;
      this._isLoadding(true);
      let { pageData, page, searchData,tabList,active } = this.data;
      var { url, data = {} } = pageData;
      if(tabList.length>0){
        data = tabList[active].pageData
      }
      if (searchData) {
        data[searchData.name || 'keywords'] = searchData.value
      }
      data.page = page;
      'wx'.$request({
        url,
        data,
        success(res) {
          console.log({ res })
          let searchData = data
          that._concatList(res, searchData);
        },
        fail(res) {
          that._stopPull();
          that._setError(true);
          that._isLoadding(false);
          that.triggerEvent('onError', res);
        }
      });
    },
    //连接数据
    _concatList(res, searchData) {
      let that = this;
      let { resultPage, page, list } = this.data;
      let {count,total,items} = res;
      
      let lastPage =total===0?0:total%count===0?parseInt(total/count)-1:parseInt(total/count);
      let datas = resultPage ? res[resultPage] : items;
      if (total == 0) {
        list = [];
        this._hasMore(false);
      } else {
        page >=lastPage && this._hasMore(false);
        list = list.concat(datas);
      }
      that._isLoadding(false);
      that._setError(false);
      that._stopPull();
      this.setData({
        list
      });
      this.triggerEvent('toMore', {
        searchData,
        data: res,
        total,
        list
      });
    },
    _initData() {
      this.setData({
        list: [],
        loadData: 0,
        page: 0,
        isloadding: false,
        hasMore: true,
      }, this._showData)
    },
    _hasMore(hasMore) {
      this.setData({
        hasMore
      });
    },
    _isLoadding(isloadding) {
      this.setData({
        isloadding
      });
    },
    _setError(flag) {
      let { errData } = this.data
      errData = errData || {
        buttonText: '重新加载',
        describe: '网络不给力，请重试',
        type: 'error'
      }
      this.setData({
        errData: flag && errData
      })
    },
    _stopPull() {
      this.setData({
        isRefresh: false
      })
    },
    // 下拉加载数据
    onAddData() {
      this.setData({
        loadData: ++this.data.loadData
      })
    },
    // 查询
    onSearch(e) {
      this._search('wx'.getValues(e))
    },
    // 清除查询
    onClearSearch() {
      this._search('')
    },
    _search(value) {
      let searchKey = 'searchData.value'
      this.setData({
        [searchKey]: value
      }, this._initData)
    },
    // 触发下拉刷新
    async onPullRefresh(e) {
      this._initData()
    },
    // 数据为空的按钮点击
    onStatusButton(e) {
      this.triggerEvent("noDataTap");
    },
    onErrorButton() {
      // 错误界面的按钮点击
      this._initData()
    },

  }
})
