<template>
    <div>
        <div class="mui-numbox" data-numbox-min='1'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" ref="numbox" type="number" value="1" @change="countChanged" />
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
            // 每当文本框的数据被修改的时候, 立即把最新的数据, 通过事件调用, 传递给父组件
            this.$emit('getcount', parseInt(this.$refs.numbox.value));
        }
    },
    props: ["max"],
    watch: {
        "max": function(newVal, oldVal) {
            mui(".mui-numbox").numbox().setOption("max", newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
