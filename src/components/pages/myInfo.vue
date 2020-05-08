<template>
    <div class="myInfo">
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="userInfo"
                 style="width: 400px;margin:0px auto;">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.userName" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.password" readonly="true"></el-input>
                <div
                        onmouseover="this.className='changePassBlur'"
                        onmouseout="this.className='changePass'"
                >修改密码
                </div>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="userInfo.phoneNumber" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="userInfo.age" readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="userInfo.sex" readonly="true"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import eventBus from "../../utils/eventBus";
    import * as getUserInfo from "../../api/user"
    export default {
        name: "myInfo",
        data() {
            return {
                isCollapse: false,
                labelPosition: 'right',
                userInfo: {},
                id: ''

            }
        },
        methods: {
            getUserIdFromHeader() {
                console.log("myInfo=====================================");
                // console.log(userId);
            },
            getUserInfo() {
                getUserInfo.selectUserByID({id: this.id}, 'get').then(res => {
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
                    this.id = data.userId;
                    console.log(afterBase64)
                    //console.log(Id);
                }
            }
        },
        created() {
            this.$emit('Header', false);
            this.$emit('Footer', false);
            this.init();
            this.getUserInfo();

        },

        mounted() {
            eventBus.$on("test", function (msg) {
                console.log(msg);
            });
        }
    }
</script>

<style scoped>
    .changePass {
        color: blue;
    }

    .changePassBlur {
        color: red;
    }
</style>