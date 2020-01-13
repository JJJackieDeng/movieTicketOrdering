<template>
    <el-container>
        <el-header>
            <div align="right" style="float:right">
                <el-button round @click="logout">注销</el-button>

            </div>
        </el-header>
        <el-container style="height: 55%;width: 420px;background-color: #222222" >
            <el-carousel :interval="3000" type="card" height="250px" style="width: 100%;">
                <el-carousel-item @click="preview(index)" v-for="item in imageHotsList" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </el-container>
        <el-container>
            <el-aside width="200px">
                <h1>热门影院</h1>
                <el-form>
                    <el-form-item>
                        <el-input v-model="popularCinema.address" prefix-icon="el-icon-search"></el-input>
                    </el-form-item>
                </el-form>
                <el-footer>叶问4：完结篇</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
                <el-footer>Footer</el-footer>
            </el-aside>
            <el-container>
                <el-header>
                    <div align="right" style="float:right">
                        <el-button round @click="logout">注销</el-button>

                    </div>
                </el-header>
                <div style="margin:0 auto;">
                    <el-container style="height: 55%;width: 420px;background-color: #222222" >
                    <el-carousel :interval="3000" type="card" height="250px" style="width: 100%;">
                        <el-carousel-item @click="preview(index)" v-for="item in imageHotsList" :key="item.id">
                            <img :src="item.idView" class="image">
                        </el-carousel-item>
                    </el-carousel>
                    </el-container>
                    <el-container style="height: 55%;width: 420px;background-color: #222222" >
                        <el-carousel :interval="3000" type="card" height="250px" style="width: 100%;">
                            <el-carousel-item @click="preview(index)" v-for="item in imageHotsList" :key="item.id">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                        </el-carousel>
                    </el-container>
                </div>

                <el-main>
                    <div class="showItem" v-for="(lists,index) in 1" :key="index">
                        <div>
                            <img src="../assets/img/hotsList/Movie1.jpg" width="225" height="305"/>
                            <img src="../assets/img/hotsList/Movie2.jpg" width="225" height="305"/>
                        </div>

<!--                        <img src="../assets/Movie3.jpg"  width="180" height="250"/>-->
<!--                        <img src="../assets/Movie4.jpg"  width="180" height="250"/>-->
<!--                        <img src="../assets/Movie5.jpg"  width="180" height="250"/>-->
                    </div>

                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        data(){
            return{
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
                    ]
            }


        },
        methods: {
            logout(){
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
                this.$router.push("/login")
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
        text-align: center;
        line-height: 160px;
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