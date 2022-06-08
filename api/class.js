import request from './request';

export const createClass = (option) => {
  /**
  * @param {String} class_name - 班级名称
  * @param {String} class_avatar - 班级头像
  */
  return request({
    method: 'POST',
    url: '/api/v1/class',
    data: option
  })
}

export const modifyClass = (option) => {
  /**
  * @param {String} class_name - 班级名称
  * @param {String} class_avatar - 班级头像
  */
  return request({
    method: 'PUT',
    url: '/api/v1/class',
    data: option
  })
}

export const joinClass = (option) => {
  /**
  * @param {String} class_token - 
  * @param {String} extra_token - 可选
  */
  return request({
    method: 'POST',
    url: '/api/v1/class/join',
    data: option
  })
}

export const getCode = (option) => {
  /**
  * @param {Number} class_id - 班级id
  */
  return request({
    method: 'GET',
    url: '/api/v1/class/:class_id/Invitation',
    params: option
  })
}

export const deleteUser = (option) => {
  /**
  * @param {Number} class_id - 班级id
  * @param {Number} user_id - 用户id
  */
  return request({
    method: 'DELETE',
    url: '/api/v1/class/:class_id/user/:user_id',
    data: option
  })
}
