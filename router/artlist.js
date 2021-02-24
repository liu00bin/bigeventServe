// 文章列表
// 导入repress
const express=require('express')
// 创建路由对象
const router = express.Router()
// 导入文章列表的路由处理函数模块
const artlist_handler = require('../router_handler/artlist')
// 获取文章的列表数据
router.get('/list', artlist_handler.getArtList)
// 删除文章的数据
router.get('/delete/:id', artlist_handler.deleteArtList)
// 向外共享路由对象
module.exports = router