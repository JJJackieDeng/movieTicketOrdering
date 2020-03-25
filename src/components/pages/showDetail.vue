<template>
    <div>

        <!--        <el-button type="success" @click="add">+</el-button> &lt;!&ndash;监听示例&ndash;&gt;-->
        <el-row>
            <el-col>
                <el-main class="showDetail-bgr" style="background-color: #dfe7f1">
                    <div>
                        <el-row :gutter="10">
                            <el-col :span="8">
                                <!--                                    数据库存储在线图片地址-->
                                <el-image class="box-shadow" :src="movieInfo.poster" :preview-src-list="srcList"/>
                            </el-col>
                            <span style="margin-left: 80px;font-size: 30px;color: white;font-weight: bold">{{movieInfo.movie.movieName}}</span><br>
                            <!--                                <span style="margin-left: 80px;font-size: 30px;color: #000000;font-weight: bold">英文名</span><br>-->
                            <span style="margin-left: 80px;font-size: 20px;color: white;">{{movieInfo.release}}</span><br>
                            <span style="margin-left: 80px;font-size: 20px;color: white;">地区：{{movieInfo.release}}</span><br><br><br><br><br><br><br><br>
                            <span style="margin-left: 80px;">
                                    <el-button type="primary" @click="toPurchase">购票</el-button>
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
                        <!--todo 未做好图片处理（后端未处理），数据库存储图片路径，前端上传图片时该如何将图片转换成字符串并存入json传给后端-->
                        <!--                        <el-tab-pane label="相关图集" name="third">-->
                        <!--                            &lt;!&ndash;                            <img src="{{movieInfo.poster}}" alt="">&ndash;&gt;-->
                        <!--                        </el-tab-pane>-->
                    </el-tabs>
                </el-container>
            </el-col>
        </el-row>
    </div>


    <!--    <div>
            {{movieInfo}}
        </div>-->
</template>

<script>
    import * as commonUrls from '../../api/commonUrls';
    import {request} from "../../utils/request";
    import eventBus from "../../utils/eventBus";
    import * as Qs from "qs";

    export default {
        name: "showDetail",
        data() {
            return {
                activeName: 'first',
                srcList: [],
                id: this.$route.params.mid,
                dataInfo: '',
                movieInfo: null,
                tempData: {}
            }
        },
        methods: {
            toPurchase() {
                this.$router.push({path: '/purchaseDetail'})
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //获取用户数据测试
            getUserinfo() {
                commonUrls.getInfo(1, 'get').then(res => {
                    return res.json();
                }).then(res => {
                    this.dataInfo = res;
                }).catch(err => {
                    console.log(err)
                })
            },
            getMovie() {
                // commonUrls.getMovieInfo(1,'get').then(res=>{
                //     return res.json();
                // }).then(res=>{
                //     this.movieInfo = res;
                // }).catch(err=>{
                //     console.log(err)
                // })
                fetch('front/api/movieInfo/selectOne?id=' + this.id,
                    {
                        headers: {'Content-Type': 'application/json'},
                        //get方式不能请求body，参数要直接写在地址上面
                        method: 'get',
                        // body: Qs.stringify({
                        //     id:1
                        // })
                    }).then(res => {
                    return res.json();
                }).then(res => {
                    //不推荐这么写，推荐换种返回的json格式，因为出错res也是有内容的
                    //TODO 建议如下
                    // if (res.自定义状态===xxx){
                    //     this.movieInfo =res.数据;
                    // }
                    this.movieInfo = res;
                }).catch(err => {
                    console.log(err)
                })
            },
            // add() {
            //     this.id += 1;
            // }
            //

            getMovie2() {
                request({
                    url: 'api/movieInfo/selectOne?id=' + this.id,
                }).then(res => {
                    console.log(res);
                    this.movieInfo = res.data;
                    console.log(this.movieInfo);
                    this.srcList.push(this.movieInfo.poster);
                }).catch(err => {
                    console.log(err);
                });
            }

        },
        mounted() {
            //this.getUserinfo();
            this.getMovie2();
            // eventBus.$on("sendData", function (res) {
            //     console.log(res);
            //     this.tempData = res;
            //     console.log(this.tempData);
            // })


        },
        watch: {
            // id() {
            //     this.$message.success("!!监听！！id为" + this.id)  /*监听示例*/
            // }
        }
    }
</script>

<style scoped>
    .showDetail-bgr {
        background: -ms-linear-gradient(top, #9323ff, #f6f6f8); /* IE 10 */
        background: -moz-linear-gradient(top, #AC07BD, #f6f6f8); /*火狐*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ce0730), to(#eff6fd)); /*谷歌*/
        /*background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8));      !* Safari 4-5, Chrome 1-9*!*/
        /*background: -webkit-linear-gradient(top, #AC07BD, #f140f8);   !*Safari5.1 Chrome 10+*!*/
    }

    .box-shadow {
        width: 320px;
        height: 440px;
        margin-left: 200px;
    }
</style>