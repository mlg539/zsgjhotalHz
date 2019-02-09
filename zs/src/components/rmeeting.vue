<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>在线预订会议室</span>
  </div >
  <div v-for="o in list" :key="o" class="text item" >
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img2" alt="">
    <img style="width:48%" :src="'http://127.0.0.1:3000/'+o.img3" alt="">
  </div>
  <div class="rmeeting-details">
    <el-form  :model="formInline" class="demo-form-inline">
      <el-form-item label="联系人">
        <el-input v-model="formInline.user" placeholder="请填写姓名，如：张先生"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="formInline.phone" placeholder="请填写手机号，方便联系"></el-input>
      </el-form-item>     
      <el-form-item label="会议人数">
        <el-select v-model="formInline.rmeetingnum" placeholder="请选择会议人数">
          <el-option label="50人以内" value="50"></el-option>
          <el-option label="150人以内" value="150"></el-option>
          <el-option label="500人以内" value="500"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会议类型">
        <el-select v-model="formInline.rmeetingtype" placeholder="请选择会议类型">
          <el-option label="公司年会" value="公司年会"></el-option>
          <el-option label="公司培训" value="公司培训"></el-option>
          <el-option label="客户答谢会" value="客户答谢会"></el-option>
          <el-option label="私人派对或宴请" value="私人派对或宴请"></el-option>
          <el-option label="其他会议活动" value="其他会议活动"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细说明">
        <el-input v-model="formInline.details"  type="textarea" placeholder="请填写详细要求"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :plain="true" @click="onSubmit">立即预订</el-button>
        <el-button type="primary" :plain="true" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
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
    text-align: center;
  }
  .rmeeting-details{
    display: flex;
    justify-content: space-around;
  }
  .el-form-item__label{
    display: inline-block;
  }
</style>

<script>
export default {
  data() {
    return {
      list:[],
      formInline: {
          user: '',
          rmeetingnum: '',
          phone:'',
          rmeetingtype:'',
          details:''
        }
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
      },
      onSubmit() {
        var url="http://127.0.0.1:3000/index/getmessage";
        this.axios.get(url).then((res)=>{
            this.formInline=res.data.data;
            alert(res.data.msg)
        })
      }
    }
  
}
</script>