const joi = require('@hapi/joi')
// 用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()
// id、nickname、Email验证规则
// const id=joi.number().integer().min(1).required()
const nickname=joi.string().required()
const email=joi.string().email().required()
// dataUri() 指的是如下格式的字符串数据
const avatar = joi.string().dataUri().required()
// 注册和登录表单的验证规则对象
exports.reg_login_schema = {
  // 表示需要对 req.body 中的数据进行验证
  body: {
    username,
    password,
  },
}
// 更改用户信息验证规则
exports.update_userinfo_schema={
 body:{
  nickname,
  email
 }
}
// 更改密码验证规则
exports.update_password_schema={
  body:{
    oldPwd:password,
    newPwd:joi.not(joi.ref('oldPwd')).concat(password)
  }
}
// 验证规则对象 - 更新头像
exports.update_avatar_schema = {
  body: {
    avatar,
  },
}