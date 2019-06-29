// 这是main.js  是我们项目的js入口文件

import Vue from 'vue'

// 导入路由的包, 启用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入容器样式
import './css/index.css'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app', 
    render: c => c(app),
    router,
})