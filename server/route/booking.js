const express=require("express")
//创建空的路由器
const router=express.Router();
const pool = require("../pool");



//功能一  当天日期时返回价格
router.get('/getprice',(req,res)=>{
    var output={};
    var i=0;
    pool.query(`SELECT price , breakfast FROM deluxebusinessroom where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.deluxebusinessroom=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM deluxeroom where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.deluxeroom=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM executiveroom where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.executiveroom=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM familysuite where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.familysuite=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM lakeviewroom where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.lakeviewroom=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM suite where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.suite=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT price , breakfast FROM superiorroom where day=curdate();`,(err,result)=>{
        if(err) throw err;
        output.superiorroom=result[0];
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
    pool.query(`SELECT * FROM rooms ;`,(err,result)=>{
        if(err) throw err;
        console.log(result)
        output.rooms=result;
        i+=10;
        if(i==80){
            res.send(output)
        }
    })
});
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

