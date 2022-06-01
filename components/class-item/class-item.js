// components/class-item/class-item.js
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
    checked: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({ checked: event.detail });
    },
  }
})
