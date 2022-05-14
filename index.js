//index.js
const Koa= require("koa");
const router = require("koa-router")();
const app = new Koa();
router.get("/top250",async ctx=>{
    ctx.body = "hello world"
})
app.use(router.routes());
app.listen(8080);
console.log('server running at https://localhost:8080')