

const order = {
  // 通用组件api 
  preview:{
      remark:'订单查看',
      url:'minp/order/preview',
      param:[{name:'goodId'},{name:'goodNumber'},{name:'ids'}],
  },
  pay:{
    remark:"订单id支付",
    url:"minp/order/pay",
    param:[{name:'order_id'}],
  },
  create:{
    remark:"创建订单",
    url:"minp/order/create",
    param:[{name:'good_id',map:"goodId"},{name:'good_number',map:"goodNumber"},{name:'address_id',map:"addressId"},{name:'remark'},{name:'cart_ids',map:'ids'}],
    method:'post'
  },
  list:{
    remark:"订单列表",
    url:"minp/order/list",
    param:[{name:'status'}]
  },
  detail:{
    remark:'订单详情',
    url:"minp/order/detail",
    param:[{name:'order_id'}]
  },
  cancel:{
    remark:'取消订单',
    url:"minp/order/cancel",
    param:[{name:'order_id'}]
  },
  submit:{
    remark:'确认收货',
    url:"minp/order/submit",
    param:[{name:'order_id'}]
  }
};
export default order ;
