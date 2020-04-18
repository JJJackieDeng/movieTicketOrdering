<template>
    <div>
        <div>
            <el-form
                    ref="searchForm"
                    :inline="true"
                    :model="searchMap"
                    style="margin-top: 20px;margin-left: 0px">
                <el-form-item prop="cinemaForm.address">
                    <el-input>
                        <template slot="prepend">电影名称</template>
                    </el-input>
                </el-form-item>
                <el-button icon="el-icon-search"></el-button>
                <el-button type="primary" plain>新增场次</el-button>
            </el-form>
        </div>
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
                            prop="cinema_id"
                            label="影院ID"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="room"
                            label="放映厅"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="movie.movieName"
                            label="播放影片名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="schedule"
                            label="开场时间"
                            width="150">
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="场次日期">
                    </el-table-column>

                    <el-table-column label="操作" width="200px">
                        <template slot-scope="scope">
                            <el-button type="success" @click="toDelete">修改</el-button>
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
    import * as schedule from "../../api/schedule"
    import {request} from "../../utils/request";


    export default {
        name: "schedule",
        data() {
            return {
                input: '',
                /*用户数据获取*/
                scheduleForm: {
                    id: '',
                    cinema_id: '',
                    room: '',
                    schedule: '',
                    movie_id: '',
                    date: ''
                },
                tableData: [],
                limit: '', // todo 分页
                offset: '',
            }
        },
        methods: {
            GetTableData() {
                schedule.AllSchedule({
                    limit: this.limit,
                    offset: this.offset,
                }, 'get').then(res => {
                    return res.json();
                }).then(res => {
                    // if (res.code === 200) {
                    this.tableData = res;
                    // console.log("getAllMovie============");
                    // console.log(res);

                    // } else {
                    //     console.log("获取数据失败")
                    // }
                }).catch(err => {
                    console.log(err)
                })
            },
            toDelete(id) {
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = {id: id};
                    request({
                        url: 'api/schedule/deleteById',
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
        created() {

        },
        mounted() {
            this.GetTableData();
        }
    }
</script>

<style scoped>

</style>