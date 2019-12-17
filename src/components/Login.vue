<template>
    <div class="login_container">
        <div class="login_box">
            <!--头像区域-->
            <div class="avatar_box">
                <img src="../assets/img/Luffy.jpg">
                <!--<img src="../assets/logo.png">-->
            </div>
            <!--登录表单区域-->
            <el-form ref="loginFormRef" :model='loginForm' :rules="loginFormRules" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="iconfont iconyonghu" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont iconmima1" type="password" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm" plain>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                //登录表单的数据绑定对象
                loginForm:{
                    username:'',
                    password:''
                },
                loginFormRules:{
                    username:[
                        {   require: true,message:"请输入用户名",trigger: "blur"},
                        {min:3,max:11,message:"请输入3~11个字符",trigger: "blur"}
                    ],
                    password: [
                        {   require: true,message:"请输入密码",trigger: "blur"},
                        {min:6,max:18,message: "密码长度不小于3且不超过18",trigger: "blur"}
                    ]
                }
            };
        },
        methods:{
            resetLoginForm(){
                this.$refs.loginFormRef.resetFields();
            },
            login(){
                this.$refs.loginFormRef.validate((valid) => {
                    if (!valid)
                        return;
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
    .login_container{
    background-color: #0052ff;
    }
    .login_box{
        background-color: #fff;
        width: 450px;
        height: 300px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        box-shadown: 0 0 10px #ddd;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eeeeee;
            left: 50%;
            transform: translate(-50%,-6%);
            position: absolute;
/*            transform: translate(-50%);*/
        }
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;

    }
    .btns{
        display: flex;
        justify-content: flex-end;
    }
</style>