// components/add-epidemic/epidemic-place/epidemic-place.js
import { areaList } from '@vant/area-data'; 
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
    place: '',
    areaList
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onDisplay() {
      this.setData({ show: true });
    },
    onCancel() {
      this.setData({ show: false });
    }, 
    formatPlace(place) {
      let res = ''
      place.forEach(key => { res += key.name + ''; })
      return res;
    },
    onConfirm(event) { 
      this.setData({
        show: false,
        place: this.formatPlace(event.detail.values),
      });
    },
  }
})
