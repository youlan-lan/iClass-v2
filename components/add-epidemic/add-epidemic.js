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
  
  methods: { 
    onClickHide() { 
      console.log(this.formData);
      this.triggerEvent('onClickHide');
    },
    getData(e) {
      const result = e.detail;
      const formData = this.formData ? this.formData : { 
        date: '',
        place: ''
      };  
      result.place && (formData.place = result.place);
      result.date && (formData.date = result.date);
      this.formData = formData; 
    }
  }
})
