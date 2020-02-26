<template>
    <div>
        <el-container>
            <el-main>
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
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "orders"
    }
</script>

<style scoped>

</style>