import request from './request';

/* 获取当前用户班级通知列表	 */
export const getClassNoticeList = (option) => {
  /**
  * @param {Number} status - 状态
  * @param {Number} type - 类型
  * @option {Number} page limit 
  */
  return request({
    method: 'GET',
    url: '/api/v1/class/:class_id/notices?status=1&type=1&page=1&limit=10',
    params: option
  })
}