<template>
  <div id="app">
    <el-container>
        <el-header>
          <h3>杭州中山国际大酒店</h3>
            <div class="nav">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
                   <el-menu-item index="/"><a>网站首页</a></el-menu-item>
                   <el-menu-item index="introduce"><a>酒店介绍</a></el-menu-item>
                   <el-menu-item index="rooms"><a>酒店房型</a></el-menu-item>
                   <el-menu-item index="rmeeting"><a>预订会议室</a></el-menu-item>
                   <el-menu-item index="traffic"><a>服务交通</a></el-menu-item>
                   <el-menu-item index="pictures"><a>酒店图片</a></el-menu-item>
                   <el-menu-item index="around"><a>周边酒店</a></el-menu-item>
                   <el-menu-item index="comment"><a>酒店点评</a></el-menu-item>
                </el-menu>
                <div class="line"></div>
            </div>
            <img src="./assets/b2.jpg" alt="" style="width:100%">
 
      </el-header>
      <el-main> <router-view/></el-main>
      <el-footer>Footer</el-footer>
    </el-container>

   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      activeIndex: '1',
    }
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }

}
</script>

<style>
*{
  margin:0;
  padding: 0;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
 .el-header, .el-footer {
    color: #333;
    text-align: left;
    line-height: 60px;
    padding:0;
    background: #e9eef3;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .nav{
    width: 75%;
    height:60px;
    margin:0 auto;
    overflow: hidden;

  }
  .nav ul{
    background: #e9eef3;
    
  }
  header{
    height: 560px !important;
  }
  


</style>
