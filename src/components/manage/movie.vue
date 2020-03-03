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
                            prop="movieInfo.poster"
                            label="电影海报"
                            width="180">
                        <img src="" alt="">
                    </el-table-column>
                    <el-table-column
                            prop="movieName"
                            label="电影名称"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.introduce"
                            label="电影简介"
                            width="180">
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
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="movieInfo.release"
                            label="上映时间"
                            width="180">
                    </el-table-column>
                </el-table>
            </el-main>
        </el--container>

    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'

    export default {
        name: "movie",
        data() {
            return {
                input: '',
                movieForm: {
                    poster: '',
                    movieName: '',
                    introduce: '',
                    director: '',
                    actors: '',
                    movieLength: '',
                    release: '',
                },
                tableData: [],
                limit: 100, // todo ,每页查询多少个
                offset: 0, //todo 从第一个开始查
            }
        },
        methods: {
            GetTableData() {
                CommonUrls.getAllMovie({
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