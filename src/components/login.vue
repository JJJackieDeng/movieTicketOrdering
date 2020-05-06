<template>
    <body id="poster">
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="head_box">
                <img src="../assets/img/Luffy.jpg" alt>
                <!--<img src="../assets/logo.png">-->
            </div>
            <!--登录表单区域-->
            <el-form ref="loginFormRef" :model='loginForm' :rules="loginFormRules" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont iconyonghu"
                              placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont iconmima1" type="password"
                              placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <span
                            class="change"
                            onmouseover="this.className='changed'"
                            onmouseout="this.className='change'"
                            @click="toRegister"
                            style="justify-content: left">注册新帐号</span>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm" plain>重置</el-button>
                    <span
                            class="change"
                            onmouseover="this.className='changed'"
                            onmouseout="this.className='change'"
                            @click="toForgotPass">忘记密码？
                    </span>
                </el-form-item>
            </el-form>
        </div>
    </div>
    </body>

</template>

<script>
    import * as Qs from "qs";

    export default {
        data() {
            return {
                //登录表单的数据绑定对象
                loginForm: {
                    username: '',
                    password: ''
                },
                loginFormRules: {
                    username: [
                        {required: true, message: "请输入用户名", trigger: "blur"},
                        {min: 3, max: 11, message: "请输入3~11个字符", trigger: "blur"}
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 6, max: 18, message: "密码长度不小于6且不超过18", trigger: "blur"}
                    ]
                }
            };
        },
        methods: {
            resetLoginForm() {
                this.$refs.loginFormRef.resetFields();
            },
            login() {
                // this.$axios.post("http://localhost:8080/login",this.User).then(res=>{
                //     alert(res.data);
                // });
                this.$refs.loginFormRef.validate((valid) => {
                    if (valid) {
                        let password = this.$md5(this.loginForm.password);
                        fetch('/front/api/user/dologin',
                            {
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                                method: 'post',
                                body: Qs.stringify({
                                    userName: this.loginForm.username,
                                    password: password //md5一次加密传输
                                })
                            }
                        ).then(res => {
                            // console.log(res);
                            return res.json();
                        }).then(res => {

                            if (res.code === 200) {
                                this.$message.success("登录成功！");
                                //使用sessionStorage保存token
                                sessionStorage.setItem("token", res.data)
                                console.log(sessionStorage);
                                this.$router.push({path: '/home'})
                            } else if (res.code === 10001) {
                                this.$message.error("登录失败！请联系管理员")
                            } else if (res.code === 10002) {
                                this.$message.error("认证失败！")
                            } else {
                                this.$message.error("登录接口错误！")
                            }
                        }).catch(err => {
                            console.log(err);
                            this.$message.error("登录出现了一点问题~")
                        })
                    } else {
                        this.$message.error("请填写正确的账号或密码")
                    }
                });
            },
            toForgotPass() {
                this.$router.push({path: "/forgotPass"})
            },
            toRegister() {
                this.$router.push({path: "/register"})
            }
        },
        created() {
            this.$emit('Header', false);
        }
    };
</script>

<style lang="scss" scoped>
    #poster {
        background: url("../assets/img/Xujinjiang.jpg") no-repeat center;
        height: 100%;
        width: 100%;

    }

    .change {
        color: #cecece;
    }

    .changed {
        color: #0ea5ff;
    }

    .login_container {
        background-color: #0052ff;
    }

    .login_box {
        background-color: #fff;
        width: 450px;
        height: 300px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .head_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        box-shadown: 0 0 10px #ddd;

        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eeeeee;
            left: 50%;
            transform: translate(-50%, -6%);
            position: absolute;
            /*            transform: translate(-50%);*/
        }
    }

    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

    }

    .btns {
        display: flex;
        text-align: center;
        justify-content: center;
    }
</style>