<template>
    <div class="goodsinfo-container">

        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>        
        </transition>

        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价: <del>&yen;{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价: <span class="now_price">&yen;{{ goodsinfo.sell_price }}</span>
                    </p>
                    <p>购买数量: <numberbox :max="goodsinfo.stock_quantity" @getcount="getSelectedCount" class="numbox"></numberbox></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{ goodsinfo.goods_no }}</p>
                    <p>库存情况: {{ goodsinfo.stock_quantity }}</p>
                    <p>上架时间: {{ goodsinfo.add_time | dateFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../subconponents/swiper.vue'
import numberbox from '../subconponents/goodsinfo_numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotu: [],  // 轮播图数据
            goodsinfo: [], // 商品详情信息
            ballFlag: false, // 控制小球显示和隐藏标识符
            selectedCount: 1, 
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo();
    },
    mounted() {

    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getthumimages/' + this.id).then(result=>{
                if(result.body.status === 0) {
                    // 先循环轮播图的每一项, 为item 添加 img属性, 因为UN博图组件中, 只认识
                    // item.img, 不认识 item.src
                    result.body.message.forEach(item => {
                        item.img = item.src
                    })
                    this.lunbotu = result.body.message;
                }
            })
        },
        getGoodsInfo() {
            this.$http.get('api/goods/getinfo/' + this.id).then(result=>{
                if(result.body.status === 0) {
                    this.goodsinfo = result.body.message[0];
                }
            })
        },
        goDesc(id){
            // 点击使用个编程时导航跳转到图文详情页面
            this.$router.push({name: 'goodsdesc', params: {id}});
        },
        goComment(id){
            // 点击跳转到评论页面
            this.$router.push({name: 'goodscomment', params: {id}});
        },
        addToShopCar() {
            this.ballFlag = !this.ballFlag;
            // 拼接一个要保存到store中car数组的商品信息对象, 
            let goodsinfo = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsinfo.sell_price,
                selected: true
            };
            // 调用store中的mutations中的addToCar方法
            this.$store.commit('addToCar', goodsinfo);
        },
        beforeEnter(el){
            el.style.transform = "translate(0, 0)"
        },
        enter(el, done){
            el.offsetWidth;

            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById('badge').getBoundingClientRect();
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 0.5s ease";
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count;
        }
    }, 
    components: {
        swiper,
        numberbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo-container {
    background-color: #eee;
    overflow: hidden;

    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .numbox {
        display: inline;
    }
    .mui-card-footer {
        display: block;

        button{
            margin: 15px 0;
        }
    }
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 390px;
        left: 146px;
    }
}
</style>
