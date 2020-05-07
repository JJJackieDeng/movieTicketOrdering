<template>
    <!--公共顶部-->
    <div id="Header">
            <el-header>
                <!--                <div>-->
                <!--                    <input  class="input" type="text">-->
                <!--                </div>-->
                <div class="headerRight">
                    <el-dropdown>
                            <span style="color: #ffffff;">
                                 {{ name }}
                                <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                            </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item icon="el-icon-s-home" split-button="true">
                                <span @click="toHome">首页</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon="el-icon-user" split-button="true">
                                <span @click="logout">注销</span>
                            </el-dropdown-item>
                            <el-dropdown-item icon=" " @click.native="toPersonal" split-button="true">
                                <span> 个人中心</span>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
    </div>
</template>

<script>
    import {request} from "../../utils/request";

    let name = undefined
    let afterBase64 = new Array();
    var map = new Map();
    let Base64 = require('js-base64').Base64
    let token = sessionStorage.getItem("token");
    let arr = new Array();

    arr = (token || "").split('.');
    if (token !== null) {
        //解析token
        console.log(arr[1])
        afterBase64 = Base64.decode(arr[1]);
        const data = JSON.parse(afterBase64)
        name = data.userName
        console.log(afterBase64)
    }
    export default {
        name: "Header",
        data() {
            return {
                afterBase64,
                name
            };
        },
        methods:{
            toHome() {
                this.$router.push('/home')
            },

            logout() {
                let params = {
                    httpSession: this.token,
                };
                request({
                    url: 'api/logout',
                    method: 'post',
                    data: this.qsParam(params),
                    header: {'Content-Type': 'application/json'}
                }).then(res => {
                    if (res.code === 10004) {
                        this.$message("注销成功！请重新登录");
                        this.$router.push("/login")
                    } else {
                        this.$message("注销出现了一点问题，请重试~");
                    }
                }).catch(err => {
                    console.log(err);
                })
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
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