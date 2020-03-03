<template>
    <!--公共顶部-->
    <div id="Header">
            <el-header>
                <div class="headerRight">
                    <el-dropdown>
                                <span>
                                    <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                                    <!--todo 目前获取不 了,需要访问登录状态-->
                                 {{this.userName}}
                                </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user" split-button="true">
                                <span @click="logout">注销</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon=" " split-button="true">
                                <span @click="toLogin">修改资料</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon=" " split-button="true">
                                <span @click="toLogin">我的订单</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            logout() {
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
                this.$router.push("/login")
            },
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #000000;
        color: #ffffff;
        text-align: right;
        line-height: 60px;
        /*position: absolute;*/
        right: 20px;
        vertical-align: middle;
        align-items: center;
    }
</style>