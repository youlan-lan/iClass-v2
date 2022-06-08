// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showClassEvent: 1,
    showEpidemicInfo: 0,
    flag: false,
    detail: {
      id: 1,
      title: 'xxx',
      info: '说明',
      deadline: '2022/6/6'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
  },

  handleClick() {     
    if(this.data.flag) return false;
    this.data.flag = true;
    if(this.data.showClassEvent) {
        this.animate('.class-event',
        [
            {top: '400rpx', opacity: 1}, 
            {top: '800rpx', opacity: 0}
        ], 500);
        let { showEpidemicInfo} = this.data;
        showEpidemicInfo = 1;
        this.setData({ showEpidemicInfo })
        setTimeout(() => {
            let { showClassEvent, flag } = this.data
            showClassEvent = 0;
            flag = false;
            this.setData({ showClassEvent, flag })
        }, 1000); 
    } else {
        this.animate('.class-event',
        [
            {top: '800rpx', opacity: 0}, 
            {top: '400rpx', opacity: 1}
        ], 500);
        let {showClassEvent} = this.data
        showClassEvent = 1;
        this.setData({ showClassEvent })
        setTimeout(() => {
            let { showEpidemicInfo, flag } = this.data;
            showEpidemicInfo = 0;
            flag = false;
            this.setData({ showEpidemicInfo, flag })
        }, 1000); 
    }
  },
  epidemicManage() {
    wx.navigateTo({
      url: '/pages/manage-epidemic/manage-epidemic',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})