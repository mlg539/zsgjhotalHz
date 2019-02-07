const express=require("express")
//创建空的路由器
const router=express.Router();


//功能一  当选定日期时返回价格
router.get("/getprice/:range/:room",(req,res)=>{
    var range=req.params.range
    var room=req.params.room
    console.log(range,room)
    if(!range){
        res.send({code:-1,msg:"日期不存在"})
        return
    }
   var  tableData=[
        {date: '05-03',price: '479'},  
        {date: '05-03',price: '479'},  
        {date: '05-04',price: '479'},  
      ]

    res.send({code:1,data:tableData})
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
