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
                <ui>
                    <el-button type="danger" plain="true">批量删除</el-button>

                </ui>
                <el-select v-model="value4" clearable placeholder="请选择" style="width: 120px">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <div>                <el-input v-model="input" placeholder="请输入内容"></el-input>
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
                            prop="name"
                            label="用户名"
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
                    <el-table-column
                            label="操作">
                        <el-button type="success">修改</el-button>
                        <el-button type="danger">删除</el-button>


                    </el-table-column>
                </el-table>
            </el-main>

        </el-container>

    </div>
</template>

<script>
    export default {
        name: "user",
        data() {
            return {
                input: '',
                options: [{
                    value: '选项1',
                    label: 'ID'
                }, {
                    value: '选项2',
                    label: '用户名'
                }, {
                    value: '选项3',
                    label: '手机号码'
                }],
                value4: '',
                tableData: [{
                    id: '1',
                    name: '王小虎',
                    password: '上海市普陀区金沙江路 1518 弄',
                    phoneNumber: '15975403320',
                    createTime: '2020-02-22-16:40:00',
                    modifiedTime: ''
                }, {
                    id: '2',
                    name: '李云龙',
                    password: '上海市普陀区金沙江路 1518 弄',
                    phoneNumber: '15975403320',
                    createTime: '2020-02-22-16:40:00',
                    modifiedTime: ''
                }, {

                    id: '3',
                    name: '加拿大电鳗',
                    password: '上海市普陀区金沙江路 1518 弄',
                    phoneNumber: '15975403320',
                    createTime: '2020-02-22-16:40:00',
                    modifiedTime: '2020-02-22-16:40:05'
                }, {

                    id: '4',
                    name: '王小虎',
                    password: '上海市普陀区金沙江路 1518 弄',
                    phoneNumber: '15975403320',
                    createTime: '2020-02-22-16:40:00',
                    modifiedTime: ''
                }]
            }
        }
    }
</script>

<style scoped>

</style>