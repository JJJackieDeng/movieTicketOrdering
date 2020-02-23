<template>
    <div class="movie">这是电影管理页面
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="id"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="用户名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="password"
                    label="密码"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="phoneNumber"
                    label="手机号码"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    label="创建时间"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="modifiedTime"
                    label="修改时间"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "movie",
        data() {
            return {
                tableData: [{
                    id: '1',
                    movie_id: '',
                    movieName: '王小虎',
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
                    modifiedTime: ''
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