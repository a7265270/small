import  pageBev  from '../../../../../components/behavior/page.js';
Component({
  behaviors: [pageBev],
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  data: {

  },
  methods: {
    addCart(){
      'wx'.toast('加入购物车成功');
    }
  }
})
