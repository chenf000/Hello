<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" ref="numbox" type="number" :value="initcount" @change="countChanged" readonly />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.js"
export default {
    data(){
        return {}
    },
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged(){
            // 每当数量改变, 立即把最新的数量同步到购物车的store中
            this.$store.commit("updateGoodsInfo", {
                id: this.goodsid,
                count: this.$refs.numbox.value
            })
        }
    },
    props: ["initcount", "goodsid"],
    watch: {
        
    }
}
</script>

<style lang="scss" scoped>

</style>
