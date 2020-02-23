<template>
    <div class="page">
        <el-header>
            <div class="headerTitle">电影票务系统后台管理系统</div>
        </el-header>
        <div class="leftSide">
            <div class="change" @click="toUser">用户管理</div>
            <div class="change" @click="toMovie">电影管理</div>
            <div class="change" @click="toMovieInfo">影片信息管理</div>
            <div class="change" @click="toOrders">订单管理</div>

        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        methods: {
            toUser() {
                this.$router.push('user');
            },
            toMovie() {
                this.$router.push('movie');
            },
            toMovieInfo() {
                this.$router.push('movieInfo');
            },
            toOrders() {
                this.$router.push('orders');
            }
        },
        mounted() {
            this.$router.push('/dashboard/user')
        }
    }
</script>

<style scoped lang="scss">
    .page {
        width: 100%;
        height: 100%;
        background-color: #E9EEF3;

        .leftSide {
            width: 300px;
            height: 100%;
            background-size: contain;
            background-position: center center;
            position: relative;
            float: left;
            background-color: #ffffff;

            .change {
                /*margin: 10px 0;*/
                width: 100%;
                height: 50px;
                background-color: #ffffff;
                cursor: pointer;
            }
        }
    }

    .el-header {
        background-color: #F5F6F6;
        font-size: 22px;
        color: #000000;
        vertical-align: middle;
        display: flex;
        align-items: center;

    }
</style>