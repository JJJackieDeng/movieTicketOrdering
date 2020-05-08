<template>
    <div class="searchMap">
        <!--        <div class="searchBox">-->
        <!--            <input class="input" v-model="searchInfo"></input>-->
        <!--        </div>-->
        <!--tab选择-->
        <div class="choseInput">
            <el-input placeholder="找影视剧、影院" v-model="searchInfo" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="getMovies"></el-button>
            </el-input>
        </div>
        <div class="tabChose">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="影片" name="first" @click="getMovies">
                    <div class="rightSide">
                        <!--所有电影展示-->
                        <el-row>
                            <el-col v-for="(item, index) in imgList" :key="index" style="width: 300px">
                                <el-card :body-style="{ padding: '0px' }"
                                         class="box-shadow box-radius m-10px">
                                    <img @click="toShowDetail(item.id)"
                                         style="width: 300px; height: 400px;"
                                         :src="item.poster" alt="">
                                    <div>
                                        <!--                                        <el-button-->
                                        <!--                                                onmouseover="this.style.backgroundColor='red';"-->
                                        <!--                                                onmouseout="this.style.backgroundColor='';"-->
                                        <!--                                                type="primary"-->
                                        <!--                                                class="al-width-100"-->
                                        <!--                                                @click="toPurchaseDetail(item.id)">-->
                                        <!--                                            选座订票-->
                                        <!--                                        </el-button>-->
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="影院" name="second">
                    <div class="listInfo" v-for="(item,index) in cinemaInfo" :key="index">
                        <div class="lists">
                            <h3 class="title">{{item.cinemaName}}</h3>
                            <p class="address">{{item.address}}</p>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>

<script>
    import * as movieUrls from '../../api/movie'
    import * as cinema from '../../api/cinema'


    export default {
        name: "searchMap",
        data() {
            return {
                //所有影片图片
                imgList: [],
                searchInfo: '',
                movieInfo: {},
                activeName: "first",
                cinemaInfo: [],
            }
        },
        methods: {
            getMovies() {
                movieUrls.getMoives(this.searchInfo, 'get').then(res => {
                    this.imgList = res;
                    console.log(this.imgList)
                })

                //    获取影院
                cinema.selectByName(this.searchInfo, 'get').then(res => {
                    return res.json();
                }).then(res => {
                    this.cinemaInfo = res;
                })
            },
            getCinemas() {

            },
            handleClick(val) {
                console.log(val)
            },
            toShowDetail(mid) {
                this.$router.push({path: "showDetail/" + mid});
            },
            toPurchaseDetail(mid) {
                this.$router.push({path: "purchaseDetail/" + mid})
            },
        }
    }
</script>

<style scoped>
    .searchBox {
        background-color: #47464a;
        width: 100%;
        height: 100px;
    }

    .input {
        margin: 20px 0 0 0;
        box-sizing: border-box;
        line-height: 18px;
        width: 630px;
        padding: 15px 50px 15px 20px;
        border: 1px solid #999;
        border-radius: 50px;
        overflow: visible;
        vertical-align: middle;
    }

    .choseInput {
        width: 100%;
        height: 50px;
        background-color: #47464a;
        /*padding-top: 20px;*/
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mainContent {
        width: 100%;
        margin-top: 50px;
    }

    .leftSide {
        padding: 20px 0 0 20px;
        width: 290px;
        float: left;
        /*background-color: #fffdf5;*/
        border: black;
        border-radius: 20px;
    }

    .rightSide {
        padding: 20px 20px;
        width: 75vw;
        float: right;
    }


    /deep/ .choseInput .el-input-group {
        width: 300px;
        /*margin-right: 50px;*/
    }

    /deep/ .tabChose .el-tabs__nav-wrap {
        display: flex;
        justify-content: center;
    }

    .listInfo {
        margin: 20px 0 20px 0;
    }

    .lists {
        width: 80%;
        border-radius: 4px;
        padding: 0 20px 0 20px;
        margin: 0 auto;
        box-shadow: 5px 5px 15px rgba(150, 150, 150, 0.48);
        background-color: rgba(221, 221, 221, 0.35);
        border: 1px solid rgba(161, 161, 161, 0.2);
    }

    .searchMap {
        min-height: 800px;
    }
</style>