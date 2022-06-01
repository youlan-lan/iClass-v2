// components/add-epidemic/add-epidemic.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showArea: false,
  },

  /**
   * 组件的方法列表
   */
  methods: { 
    onClickHide() { 
      this.triggerEvent('onClickHide');
    }
  }
})
