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
                <el-button type="primary" plain @click="dialogVisible=true">新增场次</el-button>
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

        <!--新增影院-->
        <el-dialog
                title="新增场次"
                :visible.sync="dialogVisible"
                width="35%"
                :before-close="handleClose"
                center="true"
                destroy-on-close="true">
            <el-form ref="form" :model="tableData" label-width="80px">
                <el-form-item label="影院" prop="cinema_id">
                    <el-input type="text" v-model="scheduleForm.cinema_id"></el-input>
                </el-form-item>
                <el-form-item label="放映厅" prop="room">
                    <el-input v-model="scheduleForm.room"></el-input>
                </el-form-item>
                <el-form-item label="影片名称" prop="seats">
                    <el-input v-model="scheduleForm.seats"></el-input>
                </el-form-item>
                <el-form-item label="场次日期" prop="telephone">
                    <el-input v-model="scheduleForm.telephone"></el-input>
                </el-form-item>
                <el-form-item label="开场时间" prop="address">
                    <el-date-picker
                            v-model="scheduleForm.address"
                            type="date"
                            placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addSchedule">确 定</el-button>
            </span>
        </el-dialog>
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
                /*是否弹出新增场次界面，默认为否*/
                dialogVisible: false,
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
            /*处理弹窗界面*/
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
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
            addSchedule() {
                let params = {
                    cinema_id: this.schedule.cinema_id,
                    room: this.schedule.room,
                    schedule: this.schedule.schedule,
                    movie_id: this.schedule.movie_id,
                    date: this.schedule.date
                };
                request({
                    url: 'api/schedule/add',
                    method: 'post',
                    data: JSON.stringify(params),
                    header: {'Content-Type': 'application/json'}
                }).then(res => {
                        if (res.data.code === 200) {
                            this.$message.success("新增成功");
                            /*删除之后重新查询数据*/
                            this.GetTableData();
                        } else {
                            this.$message.error("请求错误，新增失败！！");
                        }
                    }
                ).catch(function (err) {
                    if (err.response) {
                        console.log(err.response);
                    }
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