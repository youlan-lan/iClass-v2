// pages/manage-epidemic/manage-epidemic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteShow: false,
    uploadShow: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onClickRight() {
    const {deleteShow} = this.data;
    this.setData({ deleteShow: !deleteShow })
  },
  onClickShow() {
    this.setData({ uploadShow: true });
  }, 
  onClickHide() {
    this.setData({ uploadShow: false });
  }, 
})