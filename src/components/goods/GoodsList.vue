<template>
    <div class="goods-list">
        <!-- <router-link :to="'/home/goodsinfo/' + item.id" class="goods-item" v-for="item in goodslist" :key="item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">{{ item.sell_price }}</span>
                    <span class="old">{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link> -->

        <!-- 在网页中, 有两种跳转方式
        1. 使用a标签, 叫做标签跳转
        2. 使用window.location.href 的形式, 叫做编程时导航 -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">&yen;</span>{{ item.sell_price }}</span>
                    <span class="old">&yen;{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>

        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
		return {
            goodslist: [],  // 存放商品列表的数组
			pageindex: 1  // 分页页码
		}
    },
    created() {
        this.getGoodsList();
    },
	methods: {
		getGoodsList(){
            // 获取商品列表
            this.$http.get("api/getgoods?pageindex" + this.pageindex).then(result=>{
                if(result.body.status === 0){
                    this.goodslist = this.goodslist.concat(result.body.message);
                }
            })
        }, 
        getMore(){
            this.pageindex++;
            this.getGoodsList();
        }, 
        getDetail(id) {
            // q区分 this.$route 和 this.$router
            // 前者是路由参数对象, 所有路由中的参数, 飘然模式, query都属于塔
            // 后者是一个路有导航对象, 用它可以方便的使用js代码, 实现路由的前进后退, 跳转到新的url地址
            // 1. 最简单的
            // this.$router.push("/home/goodsinfo/" + id)
            // 2. 传递对象
            // this.$router.push({path: "/home/goodsinfo"+id})
            // 3. 传递命名的路由
            this.$router.push({name: "goodsinfo", params: {id: id}});
        }
	}
}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>
