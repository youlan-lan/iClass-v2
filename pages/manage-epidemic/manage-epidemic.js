// pages/manage-epidemic/manage-epidemic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteShow: false,
    uploadShow: false,
    epidemicInfoList: [
      {
        id: 1,
        date: '几月几日',
        place: '北京省、上海市、河北省、石家庄、广东省白云区',
        send_date: '2022/6/6'
      },
      {
        id: 2,
        date: '几月几日',
        place: '北京省、上海市、河北省、石家庄、广东省白云区',
        send_date: '2022/6/6'
      }
    ]
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