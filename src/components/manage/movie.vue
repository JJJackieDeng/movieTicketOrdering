<template>
    <div class="movie">
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
                <el-button type="primary" plain @click="dialogVisible=true">电影上新</el-button>
            </el-form>
        </div>
        <el--container>
            <el-main>
                <el-table
                        v-loading="loading"
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            width="50">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.poster"
                            label="电影海报"
                            width="180">
                        <template slot-scope="props">
                            <img :src="props.row.movieInfo.poster" alt="" class="poster">
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="movieName"
                            label="电影名称"
                            width="100">
                    </el-table-column>
                    <!--todo 收起与展开电影简介-->
                    <el-table-column
                            class="expansion"
                            prop="movieInfo.introduce"
                            label="电影简介"
                            width="260">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.director"
                            label="导演"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.actors"
                            label="演员"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.movieLength"
                            label="电影时长"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.release"
                            label="上映时间"
                            width="180">
                    </el-table-column>
                    <el-table-column label="操作" width="200px">
                        <template>
                            <el-button type="success" @click="toDelete">修改</el-button>
                            <br><br>
                            <el-button type="danger" @click="toDelete">下架</el-button>
                        </template>
                    </el-table-column>
                </el-table>

            </el-main>

        </el--container>
        <!--新增电影操作-->
        <el-dialog
                title="电影上新"
                :visible.sync="dialogVisible"
                width="35%"
                style="height: 10000px"
                :before-close="handleClose"
                center="true"
                lock-scroll="false">
            <div>
                <span>电影名称:
                    <el-input style="width: 350px"></el-input>
                </span><br>
                <span>外文名称:
                    <el-input style="width: 350px"></el-input>
                </span><br>
                <span>电影简介:
                    <el-input type="textarea" style="width: 350px"></el-input>
                </span><br>
                <span>导&nbsp; &nbsp;演:
                    <el-input style="width: 350px"></el-input>
                </span><br>
                <span>演员:
                    <el-input style="width: 350px"></el-input>
                </span><br>
                <span>电影时长:
                    <el-input placeholder="单位：分钟" style="width: 350px"></el-input>
                </span><br>

                <span>上映时间:
                    <el-input placeholder="何时何地在何处上映" style="width: 350px"></el-input>
                </span><br>
                <span>宣传海报:</span>
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        list-type="picture"
                        :limit="1"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="update">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'
    import {AxiosInstance as Axios} from "axios";
    import {request} from "../../utils/request";

    export default {
        name: "movie",
        data() {
            return {
                //存储新增影片时上传的图片
                fileList: [{
                    name: '',
                    url: ''
                }],
                input: '',
                movieForm: {
                    poster: '',
                    foreign: '',
                    movieName: '',
                    introduce: '',
                    director: '',
                    actors: '',
                    movieLength: '',
                    release: '',
                },
                /*是否弹出电影上新界面，默认为否*/
                dialogVisible: false,
                tableData: [],
                limit: 20, // todo ,每页查询多少个
                offset: 0, //todo 从第一个开始查
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
                CommonUrls.getAllMovie({
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
            /*上传图片函数*/
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${file.name}？`);
            }

        },
        mounted() {
            this.GetTableData();
        }
    }
</script>

<style scoped>
    expansion {
        white-space: pre-line;
        width: 10.3rem;
        overflow: hidden;
        -webkit-line-clamp: 4;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .poster {
        width: 180px;
        height: 300px;
    }
</style>