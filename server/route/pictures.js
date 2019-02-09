const express=require("express")
//创建空的路由器
const router=express.Router();
const fs=require("fs")

//功能一  当选定日期时返回价格
router.get("/getpictures",(req,res)=>{
    fs.readdir("./public/img/hotel",(err,data)=>{
        if(err) throw err
        console.log(data)
        res.send({code:1,data:data})

    })


})


module.exports=router;
