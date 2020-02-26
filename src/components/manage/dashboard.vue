<template>
    <div class="page">
        <el-header>
            <div class="headerTitle">电影票务系统后台管理系统</div>
            <div class="headerRight">
                <el-dropdown>
                <span>
                    <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                    <!--todo 目前获取不了-->
                {{this.userName}}
                </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-user" split-button="true">
                            <span @click="toLogin">注销</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </el-header>
        <div class="leftSide">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-menu-item index="1"  @click="toManageHome">
                <i class="el-icon-menu"></i>
                <span slot="title">系统首页</span>
            </el-menu-item>
            <el-menu-item index="2"  @click="toUser">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="3"  @click="toMovie">
                <i class="el-icon-menu"></i>
                <span slot="title">电影管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="toOrders">
                <i class="el-icon-setting"></i>
                <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="5" @click="toOrders">
                <i class="el-icon-setting"></i>
                <span slot="title">影院管理</span>
            </el-menu-item>
            <el-menu-item index="6" @click="toOrders">
                <i class="el-icon-setting"></i>
                <span slot="title">评分管理</span>
            </el-menu-item>
        </el-menu>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data(){
            return{
                isCollapse: false
            }
        },
        methods: {
            toManageHome(){
                this.routes.push('manageHome')
            },
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
            },
            toLogin(){
              this.$router.push({
                  path: '/login'
              })
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            this.$router.push('/dashboard/manageHome')
        }
    }
</script>

<style scoped lang="scss">
    .headerRight{
        position: absolute;
        right: 20px;
        vertical-align: middle;
        align-items: center;
    }
    .page {
        height: 100%;
        width: 100%;


        .leftSide {
            width: 250px;
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