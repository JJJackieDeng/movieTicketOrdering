<template>
    <!--公共顶部-->
    <div id="Header">
            <el-header>
                <!--                <div>-->
                <!--                    <input  class="input" type="text">-->
                <!--                </div>-->
                <div class="headerRight">
                    <el-dropdown>
                            <span v-if="base64">
                                <!--todo 目前获取不 了,需要访问登录状态-->
                                 {{this.afterBase64}}
                                <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                            </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-user" split-button="true">
                                <span @click="toHome">首页</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon="el-icon-user" split-button="true">
                                <span @click="logout">注销</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon=" " split-button="true">
                                <span @click="toPersonal"> 个人中心</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
    </div>
</template>

<script>
    let afterBase64 = new Array();
    let Base64 = require('js-base64').Base64
    let token = sessionStorage.getItem("token");
    let arr = new Array();
    arr = token.split(".");
    if (token !== null) {
        //解析token
        afterBase64 = Base64.decode(arr[1]);
        console.log(afterBase64)
        // for (var i=0;i<arr.length;i++){
        //     afterBase64 = Base64.decode(arr[i]);
        //     console.log("----------------------------");
        //     console.log(i)
        //     console.log(afterBase64);
        //
        // }
    }
    // console.log(arr);
    // console.log(token);
    export default {
        name: "Header",
        data() {
            return {};
        },
        methods:{
            toHome() {
                this.$router.push('/home')
            },
            logout() {
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
                this.$router.push("/login")
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            toPersonal() {
                this.$router.push('/personal');
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #262626;
        color: #ffffff;
        /*text-align: right;*/
        line-height: 60px;
        /*position: absolute;*/
        /*right: 20px;*/
        vertical-align: middle;
        align-items: center;
    }

    .headerRight {
        right: 20px;
        text-align: right;
    }

    .input {
        border-radius: 2px;
    }
</style>