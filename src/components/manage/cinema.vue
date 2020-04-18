<template>
    <div class="cinema">
        <el-main>
            <div>
                <el-form
                        ref="searchForm"
                        :inline="true"
                        :model="searchMap"
                        style="margin-top: 20px;margin-left: 0px">
                    <el-form-item prop="cinemaForm.address">
                        <el-input>
                            <template slot="prepend">影院地址</template>
                        </el-input>
                    </el-form-item>
                    <el-button icon="el-icon-search"></el-button>
                    <el-button type="primary" plain @click="dialogVisible = true">新增影院</el-button>
                </el-form>
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
                        prop="cinemaName"
                        label="影院名称"
                        width="100px">
                </el-table-column>
                <el-table-column
                        prop="room"
                        label="放映厅"
                        width="100px">
                </el-table-column>
                <el-table-column
                        prop="seats"
                        label="座位数"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="影院地址"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="telephone"
                        label="电话"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="modifiedTime"
                        label="修改时间"
                >
                </el-table-column>

                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button type="success" @click="toUpdate(scope.row.id)">修改</el-button>
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
        <!--新增影院-->
        <el-dialog
                title="新增影院"
                :visible.sync="dialogVisible"
                width="35%"
                :before-close="handleClose"
                center="true"
                destroy-on-close="true">
            <el-form ref="form" :model="tableData" label-width="80px">
                <el-form-item label="影院名称" prop="cinemaName">
                    <el-input type="text" v-model="cinemaForm.cinemaName"></el-input>
                </el-form-item>
                <el-form-item label="座位总数" prop="seats">
                    <el-input v-model="cinemaForm.seats"></el-input>
                </el-form-item>
                <el-form-item label="放映厅" prop="room">
                    <el-input v-model="cinemaForm.room" placeholder="如：3D激光影厅"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="cinemaForm.address" type="textarea" placeholder="如：广东省广州市天河区车陂路1号"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="telephone">
                    <el-input v-model="cinemaForm.telephone"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="addCinema">确 定</el-button>
                            </span>
        </el-dialog>
        <!--修改影院-->
        <el-dialog
                title="修改影院"
                :visible.sync="dialogVisible2"
                width="35%"
                :before-close="handleClose"
                center="true"
                lock-scroll="false">
            <el-form ref="form" :model="tableData" label-width="80px">
                <el-form-item label="影院名称" prop="cinemaName">
                    <el-input type="text" v-model="cinemaForm.cinemaName"></el-input>
                </el-form-item>
                <el-form-item label="座位总数" prop="seats">
                    <el-input v-model="cinemaForm.seats"></el-input>
                </el-form-item>
                <el-form-item label="放映厅" prop="room">
                    <el-input v-model="cinemaForm.room" placeholder="如：3D激光影厅"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="cinemaForm.address" type="textarea" placeholder="如：广东省广州市天河区车陂路1号"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="telephone">
                    <el-input v-model="cinemaForm.telephone"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible2 = false">取 消</el-button>
                                <el-button type="primary" @click="toUpdate(id)">确 定</el-button>
                            </span>
        </el-dialog>

    </div>
</template>

<script>
    import * as cinema from "../../api/cinema"
    import {request} from "../../utils/request";

    export default {
        name: "cinema",
        data() {
            return {
                input: '',
                /*新增影院框*/
                dialogVisible: false,
                /*修改影院框*/
                dialogVisible2: false,
                /*用户数据获取*/
                cinemaForm: {
                    id: '',
                    cinemaName: '',
                    room: '',
                    address: '',
                    telephone: '',
                    seats: '',
                    createTime: '',
                    modifiedTime: ''
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
                cinema.getAllCinema({
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
            addCinema() {
                if (this.cinemaForm.cinemaName) {
                    let params = {
                        cinemaName: this.cinemaForm.cinemaName,
                        room: this.cinemaForm.room,
                        address: this.cinemaForm.address,
                        telephone: this.cinemaForm.telephone,
                        seats: this.cinemaForm.seats,
                    };
                    console.log("------------------")
                    console.log(params);
                    request({
                        url: 'api/cinema/add',
                        method: 'post',
                        /*表单输入的数据必须这样处理*/
                        data: JSON.stringify(params),
                        headers: {'Content-Type': 'application/json'}
                    }).then(res => {
                            if (res.data.code === 200) {
                                this.dialogVisible = false;
                                this.$message.success("新增成功");
                                /*成功之后重新查询数据*/
                                // this.reload();
                                this.GetTableData();
                            } else {
                                this.$message.error("请求错误，添加失败！！");
                            }
                        }
                    ).catch(function (err) {
                        if (err.response) {
                            console.log(err.response);
                        }
                    });
                } else {
                    this.$message('请添全数据')
                }
            },
            toDelete(id) {
                this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let params = {id: id};
                    request({
                        url: 'api/cinema/deleteById',
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
                    this.$message.info("已取消删除");
                });
            },
            toUpdate(id) {
                if (id) {
                    this.dialogVisible2 = true;
                    this.userForm.id = id;
                    let params = {
                        cinemaName: this.cinemaForm.cinemaName,
                        room: this.cinemaForm.room,
                        address: this.cinemaForm.address,
                        telephone: this.cinemaForm.telephone,
                        seats: this.cinemaForm.seats,
                    };
                    request({
                        url: 'api/cinema/update',
                        method: 'post',
                        data: this.qsParam(params),
                        header: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).then(res => {
                            if (res.data.code === 200) {
                                this.dialogVisible2 = false;
                                this.$message.success("修改成功");
                                /*删除之后重新查询数据*/
                                this.GetTableData();
                            } else {
                                this.$message.error("请求错误，修改失败！！");
                            }
                        }
                    ).catch(function (err) {
                        if (err.response) {
                            console.log(err.response);
                        }
                    });
                } else {
                    this.$message.info("请选择一条数据");
                }
            }
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