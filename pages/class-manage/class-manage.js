// pages/class-manage/class-manage.js 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: ['班长', '团支书', '副班长', '组织委员', '宣传委员', '心理委员'], 
    showPickTask: 0,
    flag: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },  

  hideAnimation() {
    if(this.data.flag) return false;
    this.data.flag = 1;
    this.animate('.pickTask', 
    [ {bottom: 0, opacity: 1}, {bottom: '-400rpx', opacity: 0} ], 500) 
    setTimeout(() => { 
      this.setData({ showPickTask: 0, flag: 0 })
    }, 500);
  },
  showAnimation() {
    if(this.data.flag) return false;
    this.data.flag = 1;
    this.animate('.pickTask', 
    [ {bottom: '-400rpx', opacity: 0}, {bottom: '0', opacity: 1} ], 500) 
    setTimeout(() => { 
      this.setData({ showPickTask: 1, flag: 0 })
    }, 500);
  },
  onCancel() {
    this.hideAnimation();
  },
  onConfirm() {
    this.hideAnimation(); 
  },
  onChange() {
    // console.log(e);
  },
  changeTask() { 
      this.data.showPickTask? 
      this.hideAnimation(): 
      this.showAnimation(); 
  } 
})