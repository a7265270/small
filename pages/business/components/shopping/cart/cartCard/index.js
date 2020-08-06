Component({
  properties: {
    data:Object
  },
  data: {

  },
  methods: {
    onA(e){
      console.log('点击按钮事件',e)
    },
    onOut(e){
      // console.log('值超出范围',e)
    }
  }
})
