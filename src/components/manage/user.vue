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
                    <el-button type="danger" plain>批量删除</el-button>
                    <!--todo value4待修改-->
                    <el-select v-model="value4" clearable placeholder="请选择" style="width: 120px">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input v-model="input" placeholder="请输入内容" style="width: 150px"></el-input>
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
                            label="密码">
                    </el-table-column>
                    <el-table-column
                            prop="phoneNumber"
                            label="手机号码"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="createTime"
                            label="创建时间">
                    </el-table-column>
                    <el-table-column
                            prop="modifiedTime"
                            label="修改时间">
                    </el-table-column>
                    <el-table-column label="操作">
                        <el-dialog
                                title="用户修改"
                                :visible.sync="dialogVisible"
                                width="30%"
                                :before-close="handleClose">
                            <el-form ref="form" :model="form" label-width="80px">
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
                        <el-button type="success" @click="dialogVisible = true">修改</el-button>
                        <el-button type="danger" @click="toDelete">删除</el-button>
                    </el-table-column>

                </el-table>
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
                /**关闭修改弹窗*/
                dialogVisible: false,
                input: '',
                /*用户数据修改*/
                userForm:{
                    userName: '',
                    sex: '',
                    password: '',
                    phoneNumber: '',
                },
                // options: [{
                //     value: '选项1',
                //     label: 'ID'
                // }, {
                //     value: '选项2',
                //     label: '用户名'
                // }, {
                //     value: '选项3',
                //     label: '手机号码'
                // }],
                value4: '',
                tableData: [],
                limit: 10, // todo ,每页查询多少个
                offset: 1, //todo 分多少页，需要前端传入
            }
        },
        methods: {
            /*处理弹窗界面*/
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            toDelete(){
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
        mounted(){
            this.GetTableData();
        }
    }
</script>

<style scoped>

</style>