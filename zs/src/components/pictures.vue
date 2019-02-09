<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>酒店图片</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
  </div>
  <div v-for="o in list" :key="o" class="text item" >
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o" alt="">
  </div>
</el-card>
</template>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 75%;
    margin:0 auto;
  }
</style>

<script>
export default {
  data() {
    return {
      list:[]
    };
  },
  created(){
      this.getmessage()
  },
  methods:{
      getmessage(){
        var url="http://127.0.0.1:3000/pictures/getpictures";
        this.axios.get(url).then((res)=>{
          var pic=res.data.data[0]
          console.log(pic)
            var row=[]

            this.list=row;
            console.log(row)
            console.log(this.list)
        })
      }
  }
}
</script>