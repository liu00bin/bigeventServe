// 导入数据库操作模块
const db = require('../db/index')
// 获取文章列表的处理函数
exports.getArtList=(req,res)=>{
    const sql='select * from ev_articles where is_delete="0"'
    db.query(sql,(err, results)=>{
        if (err) return res.cc(err)
        console.log(results);
        res.send({
            status: 0,
            message: '获取文章分类列表成功！',
            data: results,
        })
    })
}
// 删除文章处理函数
exports.deleteArtList=(req,res)=>{
    const sql='update ev_articles set is_delete="1" where id=?'
    const id=req.params.id
    db.query(sql,id,(err, results)=>{
        if (err) return res.cc(err)
        res.send({
            status: 0,
            message: '获取文章分类列表成功！',
            data: results,
        })
    })
}