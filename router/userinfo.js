const express=require('express')
const router=express.Router()
const userinfo_handler=require('../router_handler/userinfo')
// 导入验证数据合法性的中间件
const expressJoi=require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_userinfo_schema,update_password_schema } = require('../schema/user')
const { update_avatar_schema } = require('../schema/user')
// 获取用户信息
router.get('/userinfo',userinfo_handler.getUserinfo)
// 更新用户的基本信息
router.post('/userinfo',expressJoi(update_userinfo_schema),userinfo_handler.updateUserinfo)
// 更改密码
router.post('/updatepwd',expressJoi(update_password_schema),userinfo_handler.updatePassword)
// 更新用户头像的路由
router.post('/update/avatar',  expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)

module.exports=router