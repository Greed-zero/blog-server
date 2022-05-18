//index.js
const Koa= require("koa");
const router = require("koa-router")();
const app = new Koa();
const articleModel = require("./models/article")
const bodyParser = require('koa-bodyparser')
const tagsModel = require("./models/tags")
const userModel = require("./models/user")
const cors = require("koa2-cors")

app.use(cors())
app.use(bodyParser())
app.use(router.routes());

app.listen(8080);
console.log('server running at http://localhost:8080')

router.get("/article",async ctx=>{
    var data = await articleModel.find();
    ctx.body = {
        code:200,
        article:data,
        msg:"GET /article  success"
    }
})
router.post("/article/add",async ctx=>{
    article=ctx.request.body.article
    articleModel.create(
        {
            time:article.time,
            title:article.title,
            description:article.description,
            tags:article.tags,
            updatetime:article.updatetime,
            text:article.text
        },(err,doc)=>{
            if(!err,doc){
                console.log("添加成功")
                console.log(doc)
            }
        })
    ctx.body = {
        code:200,
        msg:"Add  article  success"
    }
})
router.post("/article/delete",async ctx=>{
    deleteAll = ctx.request.body.deleteAll
    if(deleteAll){
        ids = ctx.request.body.ids 
            res = await articleModel.deleteMany({ _id: { $in: ids } })
    }else{
        _id = ctx.request.body._id
        res = await articleModel.deleteOne({_id});
        console.log(res)
    }
    ctx.body = {
        code:200,
        msg:"Delete  article  success"
    }
})
router.post("/article/update",async ctx=>{
    var _id = ctx.request.body.article._id
    let res =await articleModel.updateOne({'_id':_id},ctx.request.body.article)
    console.log(res)
    ctx.body = {
        code:200,
        msg:"update  article  success"
    }
})
router.get("/tags",async ctx=>{
    var data = await tagsModel.find();
    ctx.body = {
        code:200,
        tags:data,
        msg:"Get  tags  success",
    }
})
router.post("/tags/add",async ctx=>{
    tag = ctx.request.body.tag
    console.log(tag)
    tagsModel.create(
        {tag:tag},(err,doc)=>{
            if(!err,doc){
                console.log("添加成功")
                console.log(doc)
            }
        })
    ctx.body = {
        code:200,
        msg:"Add  tag  success"
    }
})
// router.get("/user",async ctx=>{
//     var data = await userModel.find();
//     ctx.body = {
//         code:200,
//         res:data,
//         msg:"GET /user  success"
//     }
// })
