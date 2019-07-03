<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <!-- 九宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/photolist">
		                    <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-rank"></span>
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-extra mui-icon-extra-computer"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>

    </div>
</template>

<script>
import swiper from '../subconponents/swiper.vue'
import { Toast } from 'mint-ui'

export default {
    data() {
        return {
            lunbotuList: [],
        }
    }, 
    created() {
        this.getLunbotu()
    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getlunbo').then(result=>{
                // console.log(result.body)
                if(result.body.status === 0) {
                    this.lunbotuList = result.body.message;
                } else {
                    // 请求失败
                    Toast('加载轮播图失败...')
                }
            })
        }
    },
    components: {
        swiper
    }
}
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
    color: #fff!important;
    &:nth-child(1) {
        span {
            background-color: rgb(18, 136, 18);
            border-radius: 5px;
        }
    }
    &:nth-child(2) {
        span {
            border-radius: 5px;
            background-color: rgb(194, 13, 13);
        }
    }
    &:nth-child(3) {
        span {
            border-radius: 5px;
            background-color: rgb(23, 112, 214);
        }
    }
    &:nth-child(4) {
        span {
            border-radius: 5px;
            background-color: rgb(16, 172, 224);
        }
    }
    &:nth-child(5) {
        span {
            border-radius: 5px;
            background-color: orangered;
        }
    }
    &:nth-child(6) {
        span {
            border-radius: 5px;
            background-color: orange;
        }
    }
}
.mui-media-body {
    font-size: 13px!important;
}

</style>
