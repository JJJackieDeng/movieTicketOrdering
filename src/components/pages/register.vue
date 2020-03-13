<template>
    <body id="poster">
    <div class="registerContainer">
        <div class="registerBox">
            <el-container>
                <el-main>
                    <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="用户名" prop="userName">
                            <el-input type="text" v-model="ruleForm.userName" auto-complete="off"
                                      @input="userNameLimit"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input
                                    type="password"
                                    v-model="ruleForm.password"
                                    auto-complete="off"
                                    placeholder="请输入6~18个字符"
                                    @input="userPasswordLimit">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="性别" prop="">
                            <el-radio v-model="ruleForm.sex" label="1">男</el-radio>
                            <el-radio v-model="ruleForm.sex" label="2">女</el-radio>
                        </el-form-item>
                        <el-form-item label="手机号码" prop="phoneNumber">
                            <el-input v-model.number="ruleForm.phoneNumber"></el-input>
                        </el-form-item>
                        <el-form-item class="btns">
                            <span class="change"
                                  onmouseover="this.className='changed'"
                                  onmouseout="this.className='change'"
                                  @click="tologin()">返回登录</span>
                            <el-button type="primary" @click="register">提交</el-button>
                            <el-button @click="resetForm()">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-main>
            </el-container>
        </div>
    </div>
    </body>
</template>

<script>
    import * as Qs from "qs";

    export default {
        name: "register",
        data() {
            let checkPhoneNumber = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
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
                responseResult: '',
                ruleForm: {
                    userName: '',
                    password: '',
                    checkPass: '',
                    phoneNumber: '',
                    sex: '',
                },
                rules2: {
                    pass: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur'}
                    ],
                    checkPhoneNumber: [
                        {validator: checkPhoneNumber, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            register() {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        fetch('/api/user/add',
                            {
                                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                                method: 'post',
                                body: Qs.stringify({
                                    userName: this.ruleForm.userName,
                                    password: this.ruleForm.password,
                                    sex: this.ruleForm.sex,
                                    phoneNumber: this.ruleForm.phoneNumber
                                })
                            }
                        ).then(res => {
                            return res.json();
                        }).then(data => {
                            if (data.code === 200) {
                                this.$message.success("注册成功！请登录")
                                this.$router.push({path: '/login'})
                            }
                        })
                            .catch(err => {
                                console.log(err);
                                this.$message("注册失败！请再试一下")
                            })
                    }
                })

            },
            resetForm() {
                this.$refs.ruleForm.resetFields();
            },
            tologin() {
                this.$router.push("login")
            }
        }
    }


</script>

<style scoped>
    #poster {
        background: url("../../assets/img/Luffy2.jpg") no-repeat center;
        height: 100%;
        width: 100%;

    }

    .registerBox {
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
    .change{
        color: #cecece;
    }
    .btns {
        display: flex;
        text-align: center;
        justify-content: center;
    }
</style>