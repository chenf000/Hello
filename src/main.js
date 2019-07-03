// 这是main.js  是我们项目的js入口文件

import Vue from 'vue'

// 导入路由的包, 启用路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'


// 导入vuex模块并启用
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入网站, 肯定会调用main.js, 在岗调用的时候, 先从本地存储中, 把购物车的数据读出来, 放到store中
let car = JSON.parse(localStorage.getItem("car") || '[]')
const store = new Vuex.Store({
    state: { // this.$store.state.***
        car: car // 将购物车中的商品的数据, 存储在car中, {id:1, count: 1, price: 10, selected: false}
    },
    mutations: { // this.$store.commiat('方法名', '唯一参数')
        addToCar(state, goodsinfo) {
            // 点击加入购物车, 把商品信息保存到store的car数组中
            // 如果购物车中之前就有了这个对应的商品, 那么只需要跟新数量
            // 如果没有, 则直接把商品数据, push到 car中即可
            let flag = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }

            // 当 更新 car之后, 把car数组, 存储到本地的localstorage中
            localStorage.setItem('car', JSON.stringify(state.car))
        },
    },
    getters: { // this.$state.getters.***
        getAllCount(state) {
            let c = 0;
            state.car.forEach(item => {
                c += item.count;
            });
            return c;
        }
    }
})

// 导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置 post 时候表单数据格式组织形式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 导入mui的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// import preview from 'vue-photo-preview'
// import 'vue-photo-preview/dist/skin.css'
// Vue.use(preview)

// 导入容器样式
import './css/index.css'

// 导入App根组件
import app from './App.vue'

// 定义全局的过滤器
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})

var vm = new Vue({
    el: '#app', 
    render: c => c(app),
    router,
    store, 
})