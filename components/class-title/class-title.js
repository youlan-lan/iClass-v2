// components/class-title/class-title.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
      handleTap: (e) => { 
          wx.navigateTo({
            url: '/pages/class-manage/class-manage',
          })
      }
  }
})
