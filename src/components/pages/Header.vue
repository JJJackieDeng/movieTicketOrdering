<template>
    <!--公共顶部-->
    <div id="Header">
            <el-header>
                <div class="commonHeader">
                    <div class="choseInput">
                        <el-input placeholder="找影视剧、影院" v-model="searchInfo" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" @click="toSearchMap"></el-button>
                        </el-input>
                    </div>

                    <div class="headerRight">
                        <el-dropdown>
                            <span style="color: #ffffff;">
                                 {{name}}
                                <i class="el-icon-s-custom" style="font-size:20px; margin-right:10px"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-s-home" @click.native="toHome" split-button="true">
                                    <span>首页</span>
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
                </div>
                <!--                <form action="/query" class="search">-->
                <!--                    <input type="search">-->
                <!--                    <input type="submit">-->
                <!--                </form>-->

            </el-header>
    </div>
</template>

<script>
    import {request} from "../../utils/request";


    export default {
        name: "Header",
        data() {
            return {
                //afterBase64,
                name: '',
                searchInfo: ''
            };
        },
        methods:{
            toHome() {
                this.$router.push('/home')
            },

            logout() {
                // let params = {
                //     httpSession: this.token,
                // };
                request({
                    url: 'api/user/logout',
                    method: 'get',
                    //data: this.qsParam(params),
                    header: {'Content-Type': 'application/json'}
                }).then(res => {
                    this.$router.push("/login")
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
            },
            toSearchMap() {
                this.$router.push('/searchMap');
            },
            init() {
                let afterBase64 = new Array();
                var map = new Map();
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
                    let Id = data.userId;
                    console.log(afterBase64)
                    //console.log(Id);
                }
            }
        },

        mounted() {
            this.init();
        }


    }
</script>

<style scoped>
    .commonHeader {
        display: flex;
        align-self: center;
        justify-content: flex-end;
        width: 100%;
    }
    .el-header {
        background-color: #262626;
        color: #ffffff;
        /*text-align: right;*/
        line-height: 60px;
        /*position: absolute;*/
        /*right: 20px;*/
        /*vertical-align: middle;*/
        /*align-items: center;*/
        vertical-align: middle;
        display: flex;
        align-items: center;
    }

    .headerRight {
        right: 20px;
        text-align: right;
    }

    .input {
        border-radius: 2px;
    }

    .choseInput {
        margin-right: 20px;
    }

</style>