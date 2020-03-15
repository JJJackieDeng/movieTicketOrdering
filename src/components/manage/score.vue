<template>
    <div class="score">
        <el-container>

            <el-main>
                <div>
                    <!--                    <el-button type="danger" plain>批量删除</el-button>-->
                    <!--                    <el-form-->
                    <!--                            ref="searchForm"-->
                    <!--                            :inline="true"-->
                    <!--                            :model="searchMap"-->
                    <!--                            style="margin-top: 20px;margin-left: 0px">-->
                    <!--                        <el-form-item prop="companyName">-->
                    <!--                            <el-input>-->
                    <!--                                <template slot="prepend">用户名</template>-->
                    <!--                            </el-input>-->
                    <!--                        </el-form-item>-->
                    <!--                        <el-button icon="el-icon-search"></el-button>-->
                    <!--                    </el-form>-->
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
                            label="创建时间"
                    >
                    </el-table-column>

                    <el-table-column label="操作" width="200px">
                        <template>
                            <el-button type="danger" @click="toDelete">删除</el-button>
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
                <!--修改用户信息-->
            </el-main>

        </el-container>
    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'

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
                tableData: [],
                limit: 100, // todo ,每页查询多少个
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
            }
        },
        mounted() {
            this.GetTableData();
        }
    }
</script>

<style scoped>

</style>