

import { businessData } from './data.js';
const good = {
  // 通用组件api 
  detail:{
      remark:'通用组件',
      url:'minp/spu/detail',
      param:[{name:'id'}],
  },
  typeList:{
    remark:'获取类型的商品列表',
    url:'minp/spu/typeList',
    param:[{name:'type',remark:"可传多个new hot discount 用逗号隔开"}],
  },
  typePageList:{
    remark:'获取类型产品列表分页',
    url:'minp/spu/typePageList',
    param:[{name:'type'},{name:'keywords'}],
  },
  addCart:{
    remark:"添加到购物车",
    url:"minp/cart/add",
    param:[{name:'goodId'},{name:'number'}],
  },
  cartList:{
    remark:"购物车列表",
    url:"minp/cart/list",
  },
  cartPageList:{
    remark:"购物车分页列表",
    url:"minp/cart/pageList",
  },
  cartCount:{
    remark:"购物车数量",
    url:"minp/cart/count",
  },
  cartUpdate:{
    remark:"购物车数量",
    url:"minp/cart/update",
    param:[{name:"cart_id"},{name:"number"}]
  },
  deleteCart:{
    remark:"删除购物车",
    url:"minp/cart/delte",
    param:[{name:"cart_ids"}]
  },
  listBycategory:{
    remark:"通过分类加载数据",
    url:"minp/spu/categoryList",
    param:[{name:'category_id'}]
  },
  hotSearch:{
    remark:"商品热门搜索",
    url:"minp/spu/hotSearch"
  }
};
export default good ;
