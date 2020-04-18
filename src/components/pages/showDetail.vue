<template>
    <div>
        <el-row>
            <el-col>
                <el-main class="showDetail-bgr" style="background-color: #dfe7f1">
                    <div>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <!--数据库存储在线图片地址-->
                                <el-image class="box-shadow" :src="movieInfo.poster" :preview-src-list="srcList"/>
                            </el-col>
                            <span style="margin-left: 80px;font-size: 30px;color: white;font-weight: bold">{{movieInfo.movie.movieName}}</span><br>
                            <span style="margin-left: 80px;font-size: 20px;color: #ffffff;">{{movieInfo.movie.foreign}}</span><br>
                            <span style="margin-left: 80px;font-size: 20px;color: white;">{{movieInfo.movie.area}}</span><br>
                            <span style="margin-left: 80px;font-size: 20px;color: white;">{{movieInfo.release}}</span><br><br><br><br><br><br><br><br>
                            <span style="margin-left: 80px;">
                                    <el-button type="primary" @click="toPurchase(id)">购票</el-button>
                                </span>

                        </el-row>
                    </div>
                </el-main>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16" :offset="3">
                <el-container style="height: 600px">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="介绍" name="first">
                            <span style="text-indent: 2em">{{movieInfo.introduce}}</span>
                        </el-tab-pane>
                        <el-tab-pane label="演职人员" name="second">
                            <span>导演：{{movieInfo.director}}</span><br>
                            <span>演员：{{movieInfo.actors}}</span><br>
                        </el-tab-pane>
                    </el-tabs>
                </el-container>
            </el-col>
        </el-row>
        <div class="comments">
            这是评论
        </div>
    </div>
</template>

<script>
    import {request} from "../../utils/request";

    export default {
        name: "showDetail",
        data() {
            return {
                activeName: 'first',
                srcList: [],
                id: this.$route.params.mid,
                dataInfo: '',
                movieInfo: null,
                comments: {},
                tempData: {}
            }
        },
        methods: {
            /*跳转至购票页面*/
            toPurchase(id) {
                this.$router.push({path: '/purchaseDetail/' + id})
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            getMovie() {
                request({
                    url: 'api/movieInfo/selectOne?id=' + this.id,
                }).then(res => {
                    this.movieInfo = res.data;
                    this.srcList.push(this.movieInfo.poster);
                }).catch(err => {
                    console.log(err);
                });
            },
            /*获取评分与评论*/
            getComments() {
                request({
                    url: 'api/score/selectOne?id=' + this.id,
                }).then(res => {
                    console.log(res);
                    this.comments = res.data;
                    console.log(this.comments);
                }).catch(err => {
                    console.log(err);
                });
            }

        },
        mounted() {
            this.getMovie();
            this.getComments();
        }
    }
</script>

<style scoped>
    .showDetail-bgr {
        background: -ms-linear-gradient(top, #ce0730, #f6f6f8); /* IE 10 */
        background: -moz-linear-gradient(top, #ce0730, #eff6fd); /*火狐*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ce0730), to(#eff6fd)); /*谷歌*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ce0730), to(#ffffff)); /* Safari 4-5, Chrome 1-9*/
        background: -webkit-linear-gradient(top, #ce0730, #ffffff); /*Safari5.1 Chrome 10+*/
    }

    .box-shadow {
        width: 320px;
        height: 440px;
        margin-left: 200px;
    }

    .comments {
        margin: 0 0 0 100px;
    }
</style>