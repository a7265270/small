

const address = {
  // 通用组件api 
  list:{
      remark:'我的收货地址',
      url:'minp/address/list',
  },
  add:{
    remark:"新增收货地址",
    url:'minp/address/add',
    method:'post',
    param:[{name:'name'},{name:'phone'},
          {name:'lat'},{name:'lng'},{name:'province'},
          {name:'city'},{name:'district'},{name:'detail'},{name:'is_defalut'}]
  },
  detail:{
    remark:"地址详情",
    url:'minp/address/detail',
    param:[{name:'id'}]
  },
  edit:{
    remark:"编辑收货地址",
    method:'post',
    url:'minp/address/edit',
    param:[{name:'name'},{name:'phone'},
          {name:'lat'},{name:'lng'},{name:'province'},
          {name:'city'},{name:'district'},{name:'detail'},{name:'is_defalut'},{name:'id'}]
  },
  delte:{
    remark:"编辑收货地址",
    url:'minp/address/del',
    param:[{name:'id'}]
  }
};
export default address ;
