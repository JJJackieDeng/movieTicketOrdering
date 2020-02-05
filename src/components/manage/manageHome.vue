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
                <el-col :span="24">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>用户管理</span>
                            </template>
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
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
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
    .el-header, .el-footer {
        background-color: #ffffff;
        color: #333;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        > div {
            display: flex;
        }
    }

    .el-aside {
        background-color: #D3DCE6;
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