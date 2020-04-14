<template>
    <div class="score">
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
                            prop="movie_id"
                            label="电影ID"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="user_id"
                            label="用户ID"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="comments"
                            label="评论"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="score"
                            label="评分"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="createTime"
                            label="创建时间">
                    </el-table-column>

                    <el-table-column label="操作" width="200px">
                        <template slot-scope="scope">
                            <el-button type="danger" @click="toDelete(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <!--todo 分页值的输入-->
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[5,10,20,30]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total"
                ></el-pagination>
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'
    import {request} from "../../utils/request";

    export default {
        name: "score",
        data() {
            return {
                scoreForm: {
                    id: '',
                    movie_id: '',
                    user_id: '',
                    score: '',
                    comments: '',
                },
                total: 1,
                currentPage: 1,
                pageSize: '',
                tableData: [],
                limit: '', // todo ,每页查询多少个
                offset: 0, //todo 从第一个开始查
            }
        },
        methods: {
            GetTableData() {
                CommonUrls.getAllScore({
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
            },
            toDelete(id) {
                console.log("--------------------------------")
                console.log(id);
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = {id: id};
                    request({
                        url: 'api/score/deleteById',
                        method: 'post',
                        data: this.qsParam(params),
                        header: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).then(res => {
                            if (res.data.code === 200) {
                                this.$message.success("删除成功");
                                /*删除之后重新查询数据*/
                                this.GetTableData();
                            } else {
                                this.$message.error("请求错误，删除失败！！");
                            }
                        }
                    )
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
        },
        mounted() {
            this.GetTableData();
        }
    }
</script>

<style scoped>

</style>