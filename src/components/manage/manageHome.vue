<template>
    <el-container>
        <el-header>
            <div align="right" style="float:right">
<!--                    之后进行调整，左边题目-->
<!--                    <img src="../assets/logo.png" alt="">-->
                <span>电影院订票后台管理系统</span>
            </div>
                <el-button round @click="logout">注销</el-button>
        </el-header>
        <el-container>
            <el-aside width="250px">
                 <el-row class="tac">
                <el-col>
<!--                    default-active="2"-->
<!--                    class="el-menu-vertical-demo"-->
<!--                    @open="handleOpen"-->
<!--                    @close="handleClose"-->
                    <el-menu
                            background-color="#ffffff"
                            text-color="#000000"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <!--一级菜单-->
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户管理</span>
                            </template>
                             <!--二级菜单-->
                            <el-menu-item index="1-1">
                                <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>用户管理</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">选项1</el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>

<!--                        <el-menu-item index="2">-->
<!--                            <i class="el-icon-menu"></i>-->
<!--                            <span slot="title">电影管理</span>-->
<!--                        </el-menu-item>-->

<!--                        <el-menu-item index="3">-->
<!--                            <i class="el-icon-setting"></i>-->
<!--                            <span slot="title">订单管理</span>-->
<!--                        </el-menu-item>-->

<!--                        <el-menu-item index="4">-->
<!--                            <i class="el-icon-setting"></i>-->
<!--                            <span slot="title">影院管理</span>-->
<!--                        </el-menu-item>-->
                    </el-menu>
                </el-col>
            </el-row></el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "manageHome",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    html,body,#app{
        background-color: #0ea5ff;
    }
    .el-header, .el-footer {
        background-color: #f5f6f6;
        color: #000000;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 600px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>