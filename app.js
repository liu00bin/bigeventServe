// 导入express
const express = require('express')
const app = express()
// 导入加密密钥
const config = require('./config')
// 导入并使用用户信息路由模块
const userinfoRouter = require('./router/userinfo')
// 导入解析 token 的中间件
const expressJWT = require('express-jwt')
// 导入路由模块
const userRouter = require('./router/user')
// 导入cors中间件 跨域
const cors = require('cors')
// 导入并使用文章分类路由模块
const artCateRouter = require('./router/artcate')
// 导入并使用文章路由模块
const articleRouter = require('./router/article')
app.use(cors())
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// 统一响应
app.use(require("./send/send"))
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] }))
// 接口
app.use('/api', userRouter)
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use('/my', userinfoRouter)
// 为文章分类的路由挂载统一的访问前缀 /my/article
app.use('/my/article', artCateRouter)
// 为文章的路由挂载统一的访问前缀 /my/article
app.use('/my/article', articleRouter)
// 托管静态资源文件
app.use('/uploads', express.static('./uploads'))
// 错误中间件
app.use(require("./error/error"))
// 
app.listen(3007, () => console.log('api server runnning at http://127.0.0.1:30007'));