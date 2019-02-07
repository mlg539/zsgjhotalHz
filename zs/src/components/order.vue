<template>
    <div>
        <h2>订单确认</h2>
        <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="18">
                    <div class="grid-content ">
                        <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="酒店名称">
                                  <el-input v-model="form.name"  readonly ></el-input>
                                </el-form-item>
                                <el-form-item label="房间类型">
                                  <el-input v-model="form.room"  readonly ></el-input>
                                </el-form-item>
                                <el-form-item label="入住日期">
                                   <el-date-picker
                                     v-model="form.range"
                                     type="daterange"
                                     format="yyyy 年 MM 月 dd 日"
                                     value-format="yyyy-MM-dd"
                                     start-placeholder="入住日期"
                                     @change="getprice"
                                     end-placeholder="离店日期">
                                   </el-date-picker>
                                   <span>{{form.range|datefilter}}</span>
                                </el-form-item>                              
                                <el-form-item label="预订间数">                        
                                        <el-input-number v-model="form.roomNum" controls-position="right" :min="1" :max="10"></el-input-number>                                                               
                                        预订人数   
                                        <el-input-number v-model="form.personsNum" controls-position="right" :min="1" :max="10"></el-input-number>                                 
                                </el-form-item>                              
                                <el-form-item v-if="tableData.length">
                                        <el-table
                                        :data="tableData"
                                        show-summary
                                        style="width: 48%">
                                        <el-table-column
                                          prop="date"                                   
                                          width="180">
                                        </el-table-column>     
                                        <el-table-column
                                          prop="price"                              
                                          width="180">
                                        </el-table-column>
                                      </el-table>
                                </el-form-item>                              
                                <el-form-item label="温馨提示" style="color: red;text-align: left">                                 
                                      <p>1、修改入住和离店日期后请留意价格的变动！</p>
                                      <p>2、晚上21：00至8：30为预订中心非工作时间，此时间段的订单将于隔日上班后优先处理！</p>
                                </el-form-item>                             
                            </el-form>
                    </div>
                </el-col>
        </el-row>

        <el-row type="flex" class="row-bg" justify="center">
                <el-col :span="18">
                    <div class="grid-content ">                          
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                    <el-form-item label="入住人姓名" prop="name">                                   
                                            <el-input v-model="ruleForm.name"></el-input>
                                            <span>预订几间填写几个人姓名，用空格隔开</span>
                                    </el-form-item>
                                    <el-form-item label="手机号码" prop="phone">                                   
                                            <el-input v-model="ruleForm.phone"></el-input>
                                            <span>我们将以短信息的形式发送确认信息(酒店名称、地址、前台电话)</span>
                                    </el-form-item>
                                    <el-form-item label="邮件" prop="email">                                   
                                            <el-input v-model="ruleForm.email"></el-input>
                                            <span> 外宾请填写E-mail，以便发送确认邮件</span>
                                    </el-form-item>
                                    <el-form-item label="证件类型" prop="region" >
                                            <el-select v-model="ruleForm.region" placeholder="请选择">
                                                <el-option label="内宾(持大陆身份证)" value="idcard"></el-option>
                                                <el-option label="港澳台(持回乡证/台胞证等)" value="tho"></el-option>
                                                <el-option label="侨胞(持中国护照)" value="tho"></el-option>
                                                <el-option label="护外国护照的外宾" value="tho"></el-option>
                                            </el-select>
                                            <span>请选择您有效证件类型，便于酒店前台登记</span>
                                    </el-form-item>
                                    <el-form-item label="预订提示" required>                                   
                                                  <span style="color: red;"> 本酒店最晚保留到18点,超过18点请在特殊要求内注明具体到达时间及原因</span>
                                          </el-form-item>
                                    <el-form-item label="到店时间" required>
                                        <el-form-item prop="date2">
                                          <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                                        </el-form-item>
                                    </el-form-item>
                                    <el-form-item label="特殊要求">
                                          <span style="color: red;"> (请输入特殊要求，我们会与酒店确认，但因酒店原因你的一些要求不能保证实现，或酒店可能额外收费)</span>
                                    </el-form-item>
                                    <el-form-item  prop="desc">
                                      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                                    </el-form-item>
                                    <el-form-item>
                                      <el-button type="primary" @click="submitForm('ruleForm','form')">立即预订</el-button>
                                      <el-button @click="resetForm('ruleForm')">重置</el-button>
                                    </el-form-item>
                            </el-form>
                    </div>
                </el-col>
        </el-row>
    </div>
</template>

  <script>
    export default {
      data() {
        return {
          tableData: [],  
          form: {
            name: '中山国际大酒店',
            room:"豪华商务双床房",
            range:"",
            roomNum:1,
            personsNum:1,
            delivery: false,
          },
          ruleForm: {
               name: '',
               phone:"",
               email:"",
               region: '',
               date2: '13',
               delivery: false,
               resource: '',
               desc: ''
          },
          rules: {
             name: [
               { required: true, message: '请输入入住人姓名', trigger: 'blur' },
               { min: 2,  message: '姓名不得少于2个字', trigger: 'blur' }
             ],
             phone: [
               { required: true, message: '请输入手机号', trigger: 'blur' },
               { min: 11, max: 13, message: '请输入正确的手机号码', trigger: 'blur' }
             ],
             email: [
               { required: false, message: '请输入邮箱', trigger: 'blur' },
               { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
             ],
             region: [
               { required: true, message: '请选择证件类型', trigger: 'change' }
             ],
             date2: [
               { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
             ],
             desc: [
               { required: false, message: '请填写特殊情况', trigger: 'blur' }
             ]
          }   
      
          }
         },
      created(){
        console.log(this.form)
   
      },
      methods: {
        submitForm(formName,formName1) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.form)
            console.log(this.ruleForm)
            var url="http://127.0.0.1:3000/order/confirm"
            var body={aa:this.form,bb:this.ruleForm,cc:this.tableData}
           this.axios.post(url,body).then((res)=>{
             console.log(res)
             alert(res.data.msg)
           })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      getprice(){
       console.log(this.form.range)
       var url="http://127.0.0.1:3000/order/getprice/"+this.form.range+'/'+this.form.room
       this.axios.get(url).then((res)=>{
         this.tableData=res.data.data
       })
      }
      }
    }
  </script>
  <style>
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-table__header-wrapper{
    display:none;
  }
  h2{
    text-align: center;
  }
</style>
