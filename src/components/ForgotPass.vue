<template>
    <div id="poster">
        <div class="forgotPass">
            <el-container>
                <el-main>
                    <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input type="text" v-model="ruleForm.userName" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码" prop="phoneNumber">
                            <el-input v-model.number="ruleForm.phoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item label="验证码" prop="code">
                            <el-input v-model="ruleForm.code"></el-input>
                            <el-button @click="getCode" class="code-btn" :disabled="!show">
                                <span v-show="show">获取验证码</span>
                                <span v-show="!show" class="count">{{count}}s</span>
                            </el-button>
                        </el-form-item>
                        <el-form-item label="新密码" prop="password">
                            <el-input
                                    type="password"
                                    v-model="ruleForm.password"
                                    auto-complete="off"
                                    placeholder="请输入6~18个字符">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确认新密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <span class="btns">
                    <el-button type="info" @click="tologin()">返回登录</el-button>
                    <el-button type="primary" @click="update">提交</el-button>
                </span>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
    import {request} from "../utils/request";

    export default {
        name: "ForgotPass",
        data() {
            let checkPhoneNumber = (rule, value, callback) => {
                const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
                if (regMobile.test(value)) {
                    //合法的手机号码
                    return callback()
                }
                callback(new Error('手机号码格式不正确'))
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                /*是否弹出重置密码界面*/
                dialogVisible: true,
                count: null,
                show: true,
                ruleForm: {
                    userName: '',
                    password: '',
                    checkPass: '',
                    phoneNumber: '',
                    code: ''
                },
                rules2: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    phoneNumber: [
                        {validator: checkPhoneNumber, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            tologin() {
                this.$router.push("login")
            },
            // 获取短信验证码
            getCode() {
                console.log(this.ruleForm.phoneNumber);
                // 验证码倒计时
                if (!this.timer) {
                    this.count = 60;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= 60) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000);
                }
                let params = {
                    userName: this.ruleForm.userName,
                    phone: this.ruleForm.phoneNumber
                };
                request({
                    url: '/api/user/sendForgotMsg',
                    method: 'post',
                    data: this.qsParam(params),
                    header: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(res => {
                    console.log(res);
                    if (res.data.code === 501) {
                        this.$message.error("服务端错误，验证码发送失败");
                    } else if (res.data.code === 502) {
                        this.$message.error("客户端错误，验证码发送失败");
                    } else if (res.data.code === 503) {
                        this.$message.error("未知错误！请联系开发者");
                    } else if (res.data.code === 10000) {
                        this.$message.warning("用户名或手机号码不匹配");
                    }
                    this.result = res.data;
                }).catch(err => {
                    console.log(err);
                });
            },
            update() {
                console.log("正在发送修改请求");
                let params = {
                    userName: this.ruleForm.userName,
                    phone: this.ruleForm.phoneNumber,
                    code: this.ruleForm.code,
                    password: this.$md5(this.ruleForm.password),
                    confirmPassword: this.$md5(this.ruleForm.checkPass)
                };
                request({
                    url: '/api/user/checkForgetSms',
                    method: 'post',
                    // data: this.qsParam(params),
                    data: this.qsParam(params),
                    header: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(res => {
                    console.log(res);
                    if (res.data.code === 200) {
                        this.$message.success("密码重置成功");
                        this.$router.push({path: '/login'});
                    } else if (res.data.code === 400) {
                        this.$message.error("两次输入的密码不一致");
                    } else if (res.data.code === 10002) {
                        this.$message.error("验证码错误");
                    } else if (res.data.code === 10003) {
                        this.$message.error("用户名或手机号码不匹配");
                    } else if (res.data.code === 500) {
                        this.$message.error("密码重置失败");
                    }
                    this.result = res.data;
                }).catch(err => {
                    console.log(err);
                });
            }

        },
        created() {
            this.$emit('Header', false);
        }
    }
</script>

<style scoped>
    #poster {
        background: url("../assets/img/Luffy2.jpg") no-repeat center;
        height: 100%;
        width: 100%;

    }

    /* 短信验证码css */
    .code-btn {
        width: 100px;
        height: 20px;
        position: absolute;
        top: 10px;
        right: 5px;
        z-index: 222;
        color: #ef8466;
        font-size: 14px;
        border: none;
        border-left: 1px solid #bababa;
        padding-left: 10px;
        background-color: #fff;
        cursor: pointer;
    }

    .forgotPass {
        background-color: #ffffff;
        width: 600px;
        height: 400px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: #751489;
    }

    .btns {
        display: flex;
        text-align: center;
        justify-content: center;
    }

</style>