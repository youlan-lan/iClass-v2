// components/add-epidemic/epidemic-date/epidemic-date.js
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
    show: false,
    date: '', 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDisplay() {
      this.setData({ show: true });
    },
    onClose() {
      this.setData({ show: false });
    },
    formatDate(date) {
      date = new Date(date);
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(event) { 
      const date = this.formatDate(event.detail);
      this.triggerEvent('getData', { date })
      this.setData({
        show: false,
        date,
      });
    },
  }
})
