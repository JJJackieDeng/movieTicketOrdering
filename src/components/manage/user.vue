<template>
    <div class="user">
        <div>
            <!--            <el-breadcrumb separator-class="el-icon-arrow-right">-->
            <!--                <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>-->
            <!--                <el-breadcrumb-item>用户管理</el-breadcrumb-item>-->
            <!--            </el-breadcrumb>-->
        </div>
        <el-container>

            <el-main>
                <div>
                    <!--                    <el-button type="danger" plain>批量删除</el-button>-->
                    <el-form
                            ref="searchForm"
                            :inline="true"
                            :model="searchMap"
                            style="margin-top: 20px;margin-left: 0px">
                        <el-form-item prop="companyName">
                            <el-input>
                                <template slot="prepend">用户名</template>
                            </el-input>
                        </el-form-item>
                        <el-button icon="el-icon-search"></el-button>
                    </el-form>
                </div>
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="userName"
                            label="用户名"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="sex"
                            label="性别"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="password"
                            label="密码"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="phoneNumber"
                            label="手机号码"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="createTime"
                            label="创建时间"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="modifiedTime"
                            label="修改时间">
                    </el-table-column>

                    <el-table-column label="操作" width="200px">
                        <el-dialog
                                title="用户修改"
                                :visible.sync="dialogVisible"
                                width="30%"
                                :before-close="handleClose">
                            <el-form ref="form" :model="tableData" label-width="80px">
                                <el-form-item label="用户名" prop="userName">
                                    <el-input type="text" v-model="userForm.userName"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input v-model="userForm.password"></el-input>
                                </el-form-item>
                                <el-form-item label="确认密码" prop="password">
                                    <el-input v-model="userForm.password"></el-input>
                                </el-form-item>
                                <el-form-item label="性别" prop="sex">
                                    <el-radio v-model="userForm.sex" label="1">男</el-radio>
                                    <el-radio v-model="userForm.sex" label="2">女</el-radio>
                                </el-form-item>
                                <el-form-item label="电话号码" prop="phoneNumber">
                                    <el-input v-model="userForm.phoneNumber"></el-input>
                                </el-form-item>
                            </el-form>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>
                        <el-button type="success" @click="openGet">修改</el-button>
                        <el-button type="danger" @click="toDelete">删除</el-button>
                    </el-table-column>
                </el-table>

                <!--分页值的输入-->
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5,10,20,30]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                ></el-pagination>
                <!--修改用户信息-->
                <div v-if="flag" class="getInfo1">
                    <h2>用户信息修改</h2>
                    <div class="update">
                        <el-form ref="form" :model="updateUser" label-width="80px">
                            <el-form-item label="用户名">
                                <el-input v-model="updateUser.userName"></el-input>
                            </el-form-item>
                            <el-form-item label="密码">
                                <el-input v-model="updateUser.password"></el-input>
                            </el-form-item>
                            <el-form-item label="性别">
                                <el-input v-model="updateUser.sex"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input v-model="updateUser.phoneNumber"></el-input>
                            </el-form-item>

                            <div class="addButton">
                                <el-form-item>
                                    <el-button type="primary" @click="update()">提交</el-button>
                                    <el-button @click="closeGet()">取消</el-button>
                                </el-form-item>
                            </div>
                        </el-form>
                    </div>
                </div>

            </el-main>

        </el-container>
    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'

    export default {
        name: "user",
        data() {
            return {
                input: '',
                /*用户数据获取*/
                userForm: {
                    id: '',
                    userName: '',
                    sex: '',
                    password: '',
                    phoneNumber: '',
                },
                /*修改用户数据*/
                updateUser: {
                    id:'',
                    userName: '',
                    sex: '',
                    password: '',
                    phoneNumber: '',
                },
                /*是否修改用户信息，默认为否*/
                flag: false,

                tableData: [],
                limit: 100, // todo ,每页查询多少个
                offset: 0, //todo 从第一个开始查
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.limit = val;
            },
            // 当页码改变后，被触发，val是最新的页码
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.offset = val;
            },
            /*修改用户信息窗口*/
            openGet() {
                /*todo 这里的id该如何获取*/
                if (this.updateUser.id) {
                    this.flag = !this.flag;
                } else {
                    this.$message("请选择一条数据");
                }
            },
            closeGet() {
                this.flag = !this.flag;
                this.$message("已取消操作");
            },
            /*确认修改*/
            update() {
                let _this = this;
                    fetch("/user/update", {
                        id: _this.updateUser.id,
                        userName: _this.updateUser.userName,
                        sex: _this.updateUser.sex,
                        password: _this.updateUser.password,
                        phoneNumber: _this.updateUser.phoneNumber
                    })
                    .then(res => {
                        if (res.data.code === 200) {
                            this.$message("提交成功");
                            this.flag = !this.flag;
                            this.reload();
                        }
                    })
                    .catch(function (err) {
                        if (err.response) {
                            console.log(err.response);
                        }
                    });
            },
            /*处理弹窗界面*/
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            toDelete() {
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        /*todo 这里应该与后端进行一个验证然后返回是success才确定删除成功*/
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            GetTableData() {
                CommonUrls.getAllUsers({
                    limit: this.limit,
                    offset: this.offset,
                }, 'get').then(res => {
                    return res.json();
                }).then(res => {
                    // if (res.code === 200) {
                    this.tableData = res;
                    // } else {
                    //     console.log("获取数据失败")
                    // }
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.GetTableData();
        }
    }
</script>

<style scoped>
    .getInfo1 {
        position: absolute;
        z-index: 1001;
        width: 400px;
        height: 490px;
        left: 0;
        top: -50px;
        bottom: 0;
        right: 0;
        margin: auto;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    }
</style>