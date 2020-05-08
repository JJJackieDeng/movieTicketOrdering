<template>
    <div class="home">
        <el-main>
            <div class="welcome">欢迎您！{{this.userName}}</div>
            <el-divider></el-divider>
        </el-main>


    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts');
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name: "manageHome",
        data() {
            return {
                userName: '',
                msg: '欢迎来到电影院订票系统后台管理系统'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
        }
    }

</script>

<style scoped>
    .welcome {
        text-align: center;
        margin: 20px 0 0 0;
    }
</style>