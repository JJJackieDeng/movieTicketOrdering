<template>
    <div>
<!--        <el-button type="success" @click="add">+</el-button> &lt;!&ndash;监听示例&ndash;&gt;-->
        <el-row>
            <el-col>
                    <el-main class="showDetail-bgr" style="background-color: #dfe7f1">
                        <div>
                            <el-row :gutter="10">
                                <el-col span="8">
                                    <!--todo 路径问题,是该存在服务器中的图片还是存在本地-->
                                    <el-image
                                            style="width: 320px;height: 440px;margin-left: 200px"
                                            class="box-shadow"
                                            src="../../assets/img/Luffy.jpg"
                                            :preview-src-list="srcList">
                                    </el-image>
                                </el-col>
                                <span style="margin-left: 80px;font-size: 30px;color: white;font-weight: bold">{{movieInfo.movieName}}</span><br>
                                <span style="margin-left: 80px;font-size: 30px;color: #000000;font-weight: bold">英文名</span><br>
                                <span style="margin-left: 80px;font-size: 20px;color: white;">{{movieInfo.release}}</span><br>
                                <span style="margin-left: 80px;font-size: 20px;color: white;">地区</span><br>
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
                <el-container>
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="介绍" name="first">
                            <span style="text-indent: 2em">{{movieInfo.introduce}}</span>
                        </el-tab-pane>
                        <el-tab-pane label="演职人员" name="second">
                            <span>导演：{{movieInfo.director}}</span><br>
                            <span>演员：{{movieInfo.actors}}</span><br>
                        </el-tab-pane>
                        <!--todo 未做好图片处理（后端未处理），数据库存储图片路径，前端上传图片时该如何将图片转换成字符串并存入json传给后端-->
                        <el-tab-pane label="相关图集" name="third">
<!--                            <img src="{{movieInfo.poster}}" alt="">-->
                        </el-tab-pane>
                    </el-tabs>
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import * as commonUrls from '../../api/commonUrls'
    import * as Qs from "qs";

    export default {
        name: "showDetail",
        data() {
            return {
                activeName: 'first',
                srcList: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658'

                ],
                id: 1,
                dataInfo: '',
                movieInfo: '',
            }
        },
        methods: {
            toPurchase(){
                this.$router.push({path:'/purchaseDetail'})
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
                fetch('/api/movieInfo/selectOne?id='+1,
                    {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        //get方式不能请求body，参数要直接写在地址上面
                        method: 'get',
                        // body: Qs.stringify({
                        //     id:1
                        // })
                    }).then(res=>{
                        return res.json();
                }).then(res=>{
                    //不推荐这么写，推荐换种返回的json格式，因为出错res也是有内容的
                    //TODO 建议如下
                    // if (res.自定义状态===xxx){
                    //     this.movieInfo =res.数据;
                    // }
                    this.movieInfo = res;
                }).catch(err=>{
                    console.log(err)
                })
            },
            add() {
                this.id += 1;
            }
        },
        mounted() {
            this.getUserinfo();
            this.getMovie();
        },
        watch: {
            id() {
                this.$message.success("!!监听！！id为" + this.id)  /*监听示例*/
            }
        }
    }
</script>

<style scoped>
    .showDetail-bgr {
        background: -ms-linear-gradient(top, #9323ff, #f6f6f8); /* IE 10 */
        background: -moz-linear-gradient(top, #AC07BD, #f6f6f8); /*火狐*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#cecece), to(#eff6fd)); /*谷歌*/
        /*background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8));      !* Safari 4-5, Chrome 1-9*!*/
        /*background: -webkit-linear-gradient(top, #AC07BD, #f140f8);   !*Safari5.1 Chrome 10+*!*/
    }
</style>