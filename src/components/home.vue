<template>
    <div>

        <el-row>
<!--            <el-col :span="4" class="show-bg-blue" >-->
<!--                  -->
<!--            </el-col>-->
            <el-col :span="16" :offset="4">



                <el-container>
                    <el-header>
                        <div align="right" style="float:right">
                            <el-button round @click="logout">注销</el-button>

                        </div>
                    </el-header>


                    <el-carousel :interval="3000" type="card" height="250px" style="width: 100%;">
                        <el-carousel-item @click="preview(index)" v-for="item in imageHotsList" :key="item.id">
                            <img :src="item.idView" class="">
                        </el-carousel-item>
                    </el-carousel>

                    <el-container style="height: 55%;width: 420px;background-color: #ffffff">






                    </el-container>
                    <el-container>
                        <el-aside width="200px">
                            <h1>热门影院</h1>
                            <el-form>
                                <el-form-item>
                                    <el-input v-model="popularCinema.address" prefix-icon="el-icon-search"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-footer>叶问4：完结篇
                            2
                            3
                            4
                            5
                            6</el-footer>
                            <el-footer>2</el-footer>
                            <el-footer>3Footer</el-footer>
                            <el-footer>4Footer</el-footer>
                            <el-footer>5Footer</el-footer>
                            <el-footer>6Footer</el-footer>
                            <el-footer>7Footer</el-footer>
                            <el-footer>Footer</el-footer>
                            <el-footer>Footer</el-footer>
                            <el-footer>Footer</el-footer>
                        </el-aside>
                        <el-container>
                            <el-main>

                                <div>
                                    <el-row>
                                        <el-col :span="24" >
                                          <div  @click="toShowDetail()" class="movie-box show-bg-red display-block box-shadow box-radius" v-for="(item, index) in imgList" :key="index">

                                              <img style="width: 100%; height: 100%;" :src="item.url"/>
                                              <div >
                                                  <el-button type="primary" style="width: 100%" class="button">选座订票</el-button>
                                              </div>
                                              <span style="background-color:red;color:white;" >选座购票</span>
                                          </div>



                                        </el-col>
                                    </el-row>
                                </div>

                                <div >
                                    <el-row>
                                        <el-col :span="8">

<!--                                                                                <el-card :body-style="{ padding: '0px' }" class="box-shadow box-radius m-10px p-10px">-->
<!--                                                                                        <img src="../assets/img/hotsList/Movie1.jpg" class="image">-->
<!--                                                                                        <div >-->
<!--                                                                                            <el-button type="primary" style="width: 100%" class="button">选座订票</el-button>-->
<!--                                                                                        </div>-->
<!--                                                                                    </el-card>-->
                                            <el-card :body-style="{ padding: '0px' }" class="box-shadow box-radius m-10px p-10px" v-for="(item, index) in imgList" :key="index">
                                                <img style="width: 100%; height: 100%;" :src="item.url"/>
                                                <div >
                                                    <el-button onmouseover="this.style.backgroundColor='red';" onmouseout="this.style.backgroundColor='';" type="primary" style="width: 100%" class="button" @click="toPurchaseDetail">选座订票</el-button>
                                                </div>
                                            </el-card>
                                        </el-col>
                                    </el-row>
                                </div>


                            </el-main>


                            <el-footer>Footer</el-footer>
                        </el-container>
                    </el-container>
                </el-container>


            </el-col>
            <el-col :span="4">
                <pre> </pre>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        data(){
            return{
                currentDate: new Date(),

                popularCinema:{
                    address:'',
                }
                ,
                imageHotsList:[
                    {id:0,idView:require('../assets/img/hotsList/Movie1.jpg')},
                    {id:1,idView:require('../assets/img/hotsList/Movie2.jpg')},
                    {id:2,idView:require('../assets/img/hotsList/Movie3.jpg')},
                    {id:3,idView:require('../assets/img/hotsList/Movie4.jpg')},
                    {id:4,idView:require('../assets/img/hotsList/Movie5.jpg')},
                    ],


                imgList: [
                    {id:0,url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658'},
                    {id:1,url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403249&di=533177229bb5f35189299cecfe4c9f2f&imgtype=0&src=http%3A%2F%2Fnews.xinhuanet.com%2Ffashion%2F2017-01%2F01%2F1120226527_14831691672231n.jpg'},
                    {id:2,url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403400&di=bcb436642a4727b2067ad31367efa4d2&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2dbff1a7715cd7c69dc8fdcc42a785564388413c.jpg'},
                    {id:3,url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467436243&di=48678577a560d33190b1d0db20bdf2c0&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1693275011%2C3329562039%26fm%3D214%26gp%3D0.jpg'},
                    {id:4,url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=084a50bfe5e99b2316621a8d96db5f21&imgtype=0&src=http%3A%2F%2Fc2.haibao.cn%2Fimg%2F1080_1541_100_0%2F1446022321.381%2F106d7d059fe5b8610e034b5adc6c3318.jpg'},
                ]
            }


        },
        methods: {
            logout(){
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
                this.$router.push("/login")
            },
            toShowDetail(){
                // this.$router.push({name:"showDetail",query:{goodsId:this.goodsId}})
                this.$router.push({path:"showDetail"})
            },
            toPurchaseDetail(){
                // this.$router.push({name:"showDetail",query:{goodsId:this.goodsId}})
                this.$router.push({path:"showDetail"})
            },
            preview(index) {
                this.$imagePreview({
                    images: this.imageHotsList,
                    index: index,
                })
            }
        }

    }
</script>

<style lang="scss" scoped>
    html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
        /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;


    }
    .el-header, .el-footer {
        background-color: #ffffff;
        color: #000;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #eff6fd;
        color: #333;
        text-align: left;
        line-height: 5px;
    }

    .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: left;
        /*line-height: 160px;*/
    }
    .showItem {
        display:inline-block;
        width: 180px;
        height: 250px;
        margin: 10px 0px 10px 60px;
        background-color: #fffdf5;
        border-radius: 5px;
        /*text-align: center;*/
        padding-top: 5px;

    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
             background-color: #99a9bf;
         }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }



</style>