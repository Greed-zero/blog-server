//index.js
const Koa= require("koa");
const router = require("koa-router")();
const app = new Koa();
const articleModel = require("./models/article")
const tagsModel = require("./models/tags")
const userModel = require("./models/user")
const cors = require("koa2-cors")
router.get("/article",async ctx=>{
    var data = await articleModel.find();
    ctx.body = {
        code:200,
        res:data,
        msg:"GET /article  success"
    }
})
router.get("/tags",async ctx=>{
    var data = await tagsModel.find();
    ctx.body = {
        code:200,
        res:data,
        msg:"GET /tags  success"
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
app.use(cors())
app.use(router.routes());
app.listen(8080);
console.log('server running at http://localhost:8080')