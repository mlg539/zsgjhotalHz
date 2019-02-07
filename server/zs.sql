/** 中山国际大酒店数据库2.0**/
SET NAMES UTF8;
DROP DATABASE IF EXISTS zs;
CREATE DATABASE wanqu CHARSET=UTF8;
USE zs;
/**用户表**/
CREATE TABLE user(
	uid INT PRIMARY KEY AUTO_INCREMENT,		#用户id（自增）
	uname VARCHAR(16),				#用户名
	password VARCHAR(32),				#用户密码
	gender BOOL,						#用户性别(1-->男 0-->女)
	email VARCHAR(16),				#用户邮箱
	phone CHAR(11),					#联系电话
	user_name VARCHAR(50)	,			#用户真实姓名
	avatar VARCHAR(50),				#用户头像
	level BOOL						#用户级别  1->管理员   0->普通用户  
);

CREATE TABLE message(
	mid INT PRIMARY KEY AUTO_INCREMENT,	#点评id(自增)
	uname VARCHAR(16),				#留言用户名
	level INT,					#评价等级1-5	
	time DATETIME,					#留言时间
	content VARCHAR(10000),				#留言内容
	aid INT,					#订单编号
	img1 VARCHAR(255),					#留言图片 
	img2 VARCHAR(255),					#留言图片 
	img3 VARCHAR(255),					#留言图片 
	img4 VARCHAR(255),					#留言图片 
	img5 VARCHAR(255),					#留言图片 
	img6 VARCHAR(255),					#留言图片 
	img7 VARCHAR(255),					#留言图片 
	img8 VARCHAR(255),					#留言图片 
	img9 VARCHAR(255)					#留言图片 

);

CREATE TABLE hotel(
	hotel VARCHAR(16),				#酒店名称
	phone CHAR(11),					#酒店电话
	address VARCHAR(255),				#酒店地址
	details VARCHAR(10000),				#酒店介绍
	area VARCHAR(255),				#酒店区域
	img1 VARCHAR(255),					#酒店图片 
	img2 VARCHAR(255),					#酒店图片 
	img3 VARCHAR(255),					#酒店图片 
	img4 VARCHAR(255)					#酒店图片 

);
CREATE TABLE rooms(
	basic VARCHAR(255),		#基本房型
	num   VARCHAR(12),		#房间总的数量
	floor VARCHAR(36),		#房间的楼层
	area VARCHAR(12),		#房间面积
	bed VARCHAR(12),		#床型的大小
	person char(1),			#入住人数
	img1 VARCHAR(255),					#酒店图片 
	img2 VARCHAR(255),					#酒店图片 
	img3 VARCHAR(255),					#酒店图片 
	img4 VARCHAR(255)					#酒店图片 

);
CREATE TABLE pictures(
	img1 VARCHAR(255),					#酒店图片 
	img2 VARCHAR(255),					#酒店图片 
	img3 VARCHAR(255),					#酒店图片 
	img4 VARCHAR(255)					#酒店图片 
);
CREATE TABLE pictures(
	img1 VARCHAR(255),					#酒店图片 
	img2 VARCHAR(255),					#酒店图片 
	img3 VARCHAR(255),					#酒店图片 
	img4 VARCHAR(255)					#酒店图片 
);
CREATE TABLE superiorRoom(				#高级房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE deluxeRoom(				#豪华房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE deluxeBusinessRoom(			#豪华商务房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE executiveRoom(				#行政房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE lakeViewRoom(				#湖景房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE suite(					#套房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);
CREATE TABLE familysuite(				#家庭套房
	day DATE,
	price DECIMAL(6,2),
	breakfast Bool
);