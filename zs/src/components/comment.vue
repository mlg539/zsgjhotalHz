<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>酒店点评</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
  </div>
  <el-rate v-model="value5"  text-color="#ff9900" score-template="{value}"></el-rate>
  <el-input v-model="input" type="textarea" placeholder="请输入评论内容"></el-input>
  <div v-for="(o,i) in list" :key="i" class="text item" >
    <p>{{o}}</p>

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
      list:[],
      input:'',
      value5: 0,
    };
  },
  created(){
      this.getmessage()
  },
  methods:{
      getmessage(){
        var url="http://127.0.0.1:3000/comment/getcomment";
        this.axios.get(url).then((res)=>{
            this.list=res.data.data;
            console.log(this.list)
        })
      }
  }
}
</script>