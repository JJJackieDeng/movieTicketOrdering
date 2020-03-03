<template>
    <div class="homeIndex">
        <!--                    走马灯推荐电影-->
        <div class="carousel">
            <el-carousel
                    :interval="3000"
                    type="card"
                    height="300px">
                <el-carousel-item @click="preview(index)" v-for="item in imageHotsList" :key="item.id">
                    <img :src="item.idView" class="carousel_pic"
                         alt="图片被外星人偷走了">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="mainContent">
            <div class="leftSide">
                <h1>热门影院</h1>
                <el-form>
                    <el-form-item>
                        <el-input v-model="popularCinema.address" prefix-icon="el-icon-search"></el-input>
                    </el-form-item>
                </el-form>
                <el-footer>叶问4：完结篇</el-footer>
            </div>
            <div class="rightSide">
                <el-row>
                    <el-col v-for="(item, index) in imgList" :key="index" style="width: 300px">
                        <el-card :body-style="{ padding: '0px' }"
                                 class="box-shadow box-radius m-10px"
                        >
                            <el-image @click="toShowDetail()"
                                      style="width: 300px; height: 400px;"
                                      :src="item.url">

                            </el-image>
                            <div style="width: 300px">
                                <el-button
                                        onmouseover="this.style.backgroundColor='red';"
                                        onmouseout="this.style.backgroundColor='';"
                                        type="primary"
                                        style="width: 300px"
                                        class="button"
                                        @click="toPurchaseDetail">选座订票
                                </el-button>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
                ],
                currentDate: new Date(),

                popularCinema: {
                    address: '',
                }
                ,
                imageHotsList: [
                    {id: 0, idView: require('../assets/img/hotsList/Movie1.jpg')},
                    {id: 1, idView: require('../assets/img/hotsList/Movie2.jpg')},
                    {id: 2, idView: require('../assets/img/hotsList/Movie3.jpg')},
                    {id: 3, idView: require('../assets/img/hotsList/Movie4.jpg')},
                    {id: 4, idView: require('../assets/img/hotsList/Movie5.jpg')},
                    {id: 5, idView: require('../assets/img/hotsList/Movie5.jpg')},
                ],


                imgList: [
                    {
                        id: 0,
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658'
                    },
                    {
                        id: 1,
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403249&di=533177229bb5f35189299cecfe4c9f2f&imgtype=0&src=http%3A%2F%2Fnews.xinhuanet.com%2Ffashion%2F2017-01%2F01%2F1120226527_14831691672231n.jpg'
                    },
                    {
                        id: 2,
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403400&di=bcb436642a4727b2067ad31367efa4d2&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F2dbff1a7715cd7c69dc8fdcc42a785564388413c.jpg'
                    },
                    {
                        id: 3,
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467436243&di=48678577a560d33190b1d0db20bdf2c0&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D1693275011%2C3329562039%26fm%3D214%26gp%3D0.jpg'
                    },
                    {
                        id: 4,
                        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=084a50bfe5e99b2316621a8d96db5f21&imgtype=0&src=http%3A%2F%2Fc2.haibao.cn%2Fimg%2F1080_1541_100_0%2F1446022321.381%2F106d7d059fe5b8610e034b5adc6c3318.jpg'
                    },
                ]
            }


        },
        methods: {
            toShowDetail() {
                // this.$router.push({name:"showDetail",query:{goodsId:this.goodsId}})
                this.$router.push({path: "showDetail"})
            },
            toPurchaseDetail() {
                // this.$router.push({name:"showDetail",query:{goodsId:this.goodsId}})
                this.$router.push({path: "purchaseDetail"})
            },
            toHome() {
                // this.$router.push({name:"showDetail",query:{goodsId:this.goodsId}})
                this.$router.push({path: "home"})
            },

            preview(index) {
                this.$imagePreview({
                    images: this.imageHotsList,
                    index: index,
                })
            }
        },
        created: {
            /*false为不显示头部*/

        }

    }
</script>

<style lang="scss" scoped>
    .homeIndex {
        background-color: #ffffff;

        .carousel {
            width: 70%;
            margin: 0 auto;
            height: 300px;

            .carousel_pic {
                width: 100%;
                height: 100%;
                background-position: center center;
                background-size: cover;
            }
        }

        .mainContent {
            width: 100%;
            margin-top: 50px;

            .leftSide {
                padding: 20px 0 0 20px;
                width: 20vw;
                float: left;
                background-color: #fffdf5;
            }

            .rightSide {
                padding: 20px 20px;
                width: 75vw;
                float: right;
            }
        }
    }


    /*.showItem {*/
    /*    display: inline-block;*/
    /*    width: 180px;*/
    /*    height: 250px;*/
    /*    margin: 10px 0px 10px 60px;*/
    /*    background-color: #fffdf5;*/
    /*    border-radius: 5px;*/
    /*    !*text-align: center;*!*/
    /*    padding-top: 5px;*/

    /*}*/

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

    .el-carousel__item--card {
        width: 30% !important;
    }


</style>
<style lang="scss">
    .homeIndex {
        .el-carousel__container {
            margin-left: 130px !important;
        }
    }
</style>