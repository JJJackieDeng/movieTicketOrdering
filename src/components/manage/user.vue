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
    import * as CommonUrls from '../../api/commonUrls'

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
                tableData: [],
                limit: 10, // 自己改变
                offset: 1, //
            }
        },
        methods: {
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