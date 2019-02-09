<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>酒店介绍</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
  </div>
  <div v-for="o in list" :key="o" class="text item" >
    <p>{{o.details}}</p>
    <p>{{o.phone}}</p>
    <p>{{o.address}}</p>
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img1" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img2" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img3" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img4" alt="">
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
        var url="http://127.0.0.1:3000/index/getmessage";
        this.axios.get(url).then((res)=>{
            this.list=res.data.data;
            console.log(this.list)
        })
      }
  }
}
</script>