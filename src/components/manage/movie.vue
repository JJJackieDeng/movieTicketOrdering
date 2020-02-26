<template>
    <div class="movie">
        <el--container>
            <el-main>
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
            </el-main>
        </el--container>

    </div>
</template>

<script>
    export default {
        name: "movie",
        data() {
            return {
            }
        }
    }
</script>

<style scoped>
</style>