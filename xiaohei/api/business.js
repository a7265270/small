

import { businessData } from './data.js';
const business = {
  // 通用组件api 
  common:{
    list:{
      remark:'通用组件',
      url:'',
      param:[{name:'keywords'}],
      modData:businessData.list,
      modPage:{total:10,pagesize:10}
    }
  },
  // 商城
  shopping:{
    cart:{
      remark:'商城组件购物车列表',
      url:'',
      param:[{name:'keywords'}],
      modData:businessData.shopping.cart,
      modPage:{total:3,pagesize:3}
    }
  }
};
export default business ;
