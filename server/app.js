//zs_server 服务器
const express = require("express");
const cors = require("cors");
const bodyParser=require('body-parser');
const session = require("express-session");
const orderRouter=require("./route/order")

var app = express();
app.listen(3000,()=>{
	console.log("服务器创建成功")
});
const pool = require("./pool");

//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors

//2:配置cors
app.use(cors({
	origin: ["http://127.0.0.1:8080",
		"http://localhost:8080"],//允许列表
	credentials: true   //是否验证
}))
//3:加载第三方模块express-session

//4:配置模块
app.use(session({
	secret: "128位随机字符串", //安全令牌--计算sessionID
	resave: false,   //请求保存  无需每次重新设置
	saveUninitialized: true, //初始化
	cookie: {
		maxAge: 1000 * 60 * 60 * 24  //session保存时间  1天
	}
}))

app.use(bodyParser.json());
app.use(express.static("public"));
//挂在路由
app.use("/order",orderRouter)




