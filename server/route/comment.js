const express=require("express")
//创建空的路由器
const router=express.Router();
const pool = require("../pool");


//功能一  获取点评信息
router.get("/getcomment",(req,res)=>{
    var sql="SELECT * FROM message"
    pool.query(sql,(err,result)=>{
        if(err) throw err
        if(result.length>0){
            console.log(result)
            res.send({code:1,data:result})
   
        }else{
            res.send({code:-1,msg:"信息不存在"})
        }
    })

})
//功能二  接收客人的订单信息
router.post("/confirm",(req,res)=>{
    var text=req.body

    console.log(text)
    if(!text){
        res.send({code:-1,msg:"信息不存在"})
        return
    }


    res.send({code:1,msg:"订单预订成功！"})
})

module.exports=router;
