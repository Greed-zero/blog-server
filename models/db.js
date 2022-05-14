const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/blog', {useNewUrlParser: true,useUnifiedTopology: true},function(err){
    if(err){
        console.warn('数据库连接失败');
    }else {
        
    }
});
module.exports = mongoose