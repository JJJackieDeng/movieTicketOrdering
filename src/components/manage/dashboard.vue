<template>
    <div class="page">
        <div class="">
            <el-header>
                <div class="headerTitle">电影票务系统后台管理系统</div>
                <div class="headerRight">
                    <el-dropdown>
                <span>
                    <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                {{this.name}}
                </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user" split-button="true">
                                <span @click="toLogin">注销</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <div style="height: 1000px">
                <div class="leftSide  al-height-100" style="margin-top: 20px">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
                             @close="handleClose"
                             :collapse="isCollapse">
                        <el-menu-item index="1" @click="toManageHome">
                            <i class="el-icon-menu"></i>
                            <span slot="title">系统首页</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="toUser">
                            <i class="el-icon-user"></i>
                            <span slot="title">用户管理</span>
                        </el-menu-item>
                        <el-menu-item index="3" @click="toMovie">
                            <i class="el-icon-menu"></i>
                            <span slot="title">影片管理</span>
                        </el-menu-item>
                        <el-menu-item index="4" @click="toOrders">
                            <i class="el-icon-goods"></i>
                            <span slot="title">订单管理</span>
                        </el-menu-item>
                        <el-menu-item index="5" @click="toCinema">
                            <i class="el-icon-setting"></i>
                            <span slot="title">影院管理</span>
                        </el-menu-item>
                        <el-menu-item index="6" @click="toScore">
                            <i class="el-icon-star-off"></i>
                            <span slot="title">评分管理</span>
                        </el-menu-item>
                        <el-menu-item index="7" @click="toSchedule">
                            <i class="el-icon-setting"></i>
                            <span slot="title">场次管理</span>
                        </el-menu-item>
                    </el-menu>
                </div>
                <div style="height: 1000px" class="al-overflow-scroll al-overflow-scroll-hide-bar">
                    <router-view class=""></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard",
        data() {
            return {
                isCollapse: false,
                userName: '',
                Id: '',
                userInfo: '',
                name: '',
            }
        },
        methods: {
            getUserInfo() {
                getUserInfo.selectUserByID({id: this.Id}, 'get').then(res => {
                    return res.json()
                }).then(res => {
                    this.userInfo = res;
                    if (res.sex == 1) {
                        this.userInfo.sex = "男"
                    } else {
                        this.userInfo.sex = "女"
                    }


                })
            },
            init() {
                let afterBase64 = new Array();
                let Base64 = require('js-base64').Base64
                let token = sessionStorage.getItem("token");
                console.log(token)
                let arr = new Array();

                arr = (token || "").split('.');
                if (token !== null) {
                    //解析token
                    console.log(arr[1])
                    afterBase64 = Base64.decode(arr[1]);
                    let data = JSON.parse(afterBase64)
                    this.name = data.userName;
                    this.Id = data.userId;
                    console.log(afterBase64)
                    //console.log(Id);
                }
            },
            toManageHome() {
                this.$router.push('manageHome');
            },
            toUser() {
                this.$router.push('user');
            },
            toMovie() {
                this.$router.push('movie');
            },
            toScore() {
                this.$router.push('score');
            },
            toOrders() {
                this.$router.push('orders');
            },
            toCinema() {
                this.$router.push('cinema');
            },
            toSchedule() {
                this.$router.push('schedule');
            },
            toLogin() {
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
            this.$router.push('/dashboard/manageHome');
        },
        created() {
            this.$emit('Header', false);
            // this.$emit('Footer', false);
        }
    }
</script>

<style scoped lang="scss">
    .headerRight {
        position: absolute;
        right: 20px;
        vertical-align: middle;
        align-items: center;
    }

    .page {
        height: 100%;
        width: 100%;


        .leftSide {
            /*width: 250px;*/
            width: auto;
            height: 100%;
            background-size: contain;
            background-position: center center;
            /*position: relative;*/
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
        background-color: rgb(9, 107, 190);
        font-size: 22px;
        color: #000000;
        vertical-align: middle;
        display: flex;
        align-items: center;
        border: #00c788;

    }
</style>