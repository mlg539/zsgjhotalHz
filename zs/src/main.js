// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//2.引入axios组件库
  //1.引入指定组件 axios
import axios from "axios";
  //2.修改配置信息，跨域访问保存session值
axios.defaults.withCredentials=true;
  //3.注册指定组件
Vue.prototype.axios=axios;

Vue.config.productionTip = false
Vue.use(ElementUI);
//设置天数的过滤器
Vue.filter("datefilter",function(val){
  if(val.length>0){
  var day=(new Date(val[1])-new Date(val[0]))/24/60/60/1000;
 
  return `${day}天`
}

});
//设置房型的过滤器
Vue.filter("roomname",function(val){
  switch(val){
    case 'deluxebusinessroom':
      val="豪华商务房";
      break;
    case 'deluxeroom':
      val="豪华房";
      break;
    case 'executiveroom':
      val="行政房";
      break;
    case 'lakeviewroom':
      val="湖景房";
      break;
    case 'suite':
      val="公寓套房";
      break;
    case 'superiorroom':
      val="高级房";
      break;
    default:
      val="梦幻家庭房"
  }
 
  return val
}

)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
