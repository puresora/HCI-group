<template>
    <div id="body">
        <h1>点击左侧菜单,开始使用系统</h1>
    </div>
</template>

<script>
    export default {
        name: "DefaultPage"
    }
</script>

<style scoped>
    #body{
        height: 650px;
        border: 1px solid #eee;
        background-image: url("../assets/images/back.jpg");
    }
    h1{
        /* 垂直居中 */
        line-height: 650px;
        /* 水平居中 */
        text-align: center;
        cursor: pointer;
        color: white;
        font-size: 30px;

    }
</style>