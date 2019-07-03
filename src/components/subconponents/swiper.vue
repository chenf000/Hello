<template>
    <div>
        <mt-swipe :auto="1000">
            <!-- 在组件中使用v-for, 一定要使用key -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
                <img :src="item.img" alt="" :class="{'full':isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["lunbotuList", "isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        text-align: center;
        img {
            height: 100%;
            // width: 100%;
            
        }
    }
}
.full {
    width: 100%;
}
</style>
