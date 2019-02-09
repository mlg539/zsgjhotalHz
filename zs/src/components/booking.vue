<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>酒店房型</span>
    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
  </div>
  <div style="text-align:center">
    <el-date-picker
      v-model="range"
      type="daterange"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      start-placeholder="入住日期"
      @change="getprice"
      end-placeholder="离店日期">
    </el-date-picker>
    <el-button type="primary" :plain="true" @click="getprice">查询</el-button>
  </div>



<template>
      <el-table
          :data="tableData5"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="房间类型">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="楼层">
                  <span>{{ props.row.floor }}</span>
                </el-form-item>
                <el-form-item label="面积">
                  <span>{{ props.row.area }}</span>
                </el-form-item>
                <el-form-item label="床大小">
                  <span>{{ props.row.bed }}</span>
                </el-form-item>
                <el-form-item label="住宿人数">
                  <span>{{ props.row.person }}</span>
                </el-form-item>
                <el-form-item label="图片">
                  <span>{{ props.row.img1 }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="房型"
            prop="id">
          </el-table-column>
          <el-table-column
            label="首日价格(元)"
            prop="price">
          </el-table-column>
          <el-table-column
            label="日均价(元)"
            prop="price">
          </el-table-column>
          <el-table-column
            label="早餐">
            双早
          </el-table-column>
          <el-table-column
            label="预订"
            prop="booking"
            >
            <el-button type="primary" :plain="true">预订</el-button>
          </el-table-column>
    </el-table>
</template>
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
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
export default {
  data() {
    return {
      list:[],
      range:'',
      tableData5: [{
          id: '',
          floor:'',
          area: '',
          bed: '',
          person:'',
          img1: '',
        }]
      }
    
 
  },
  created(){
      this.getprice()
  },
  methods:{
    getprice(){
       var url="http://127.0.0.1:3000/booking/getprice"
       this.axios.get(url).then((res)=>{
         var row=[];
         var details=res.data.rooms
         console.log(details)
          for(var key in res.data){
            if(key=="rooms"){
              continue
            }
            res.data[key].id=key
            row.push(res.data[key])
          }
          row.forEach((val)=>{
            switch(val.id){
               case 'deluxebusinessroom':
                 val.id="豪华商务房";
                 break;
               case 'deluxeroom':
                 val.id="豪华房";
                 break;
               case 'executiveroom':
                 val.id="行政房";
                 break;
               case 'lakeviewroom':
                 val.id="湖景房";
                 break;
               case 'suite':
                 val.id="公寓套房";
                 break;
               case 'superiorroom':
                 val.id="高级房";
                 break;
               default:
                 val.id="梦幻家庭房"
             }
          })
        this.tableData5=row;
       })
      }
  }
}
</script>