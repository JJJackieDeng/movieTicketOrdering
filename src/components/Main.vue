<template>
    <el-container>
        <el-header>天地影院
            <div align="right" style="float:right">
                <el-button type="info" round @click="logout">注销</el-button>
            </div>
        </el-header>
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
                <el-main>
                    <div class="showItem" ><img src=""></div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
                    <div class="showItem">目前热播的电影</div>
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
            }

        },
        methods: {
            logout(){
                /*清空缓存并重定向登录页面*/
                window.sessionStorage.clear();
                this.$router.push("/login")
            }
        }
    }
</script>

<style lang="scss" scoped>
    .el-header, .el-footer {
        background-color: rgba(255, 255, 255, 0);
        color: rgba(0, 0, 0, 0.76);
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
        background-color: #E9EEF3;
        color: #333;
        text-align: left;
        line-height: 160px;
    }
    .showItem {
        display:inline-block;
        width: 180px;
        height: 250px;
        margin: 10px 0px 10px 20px;
        background-color: #fffdf5;
        border-radius: 5px;
        text-align: center;
        padding-top: 5px;

    }
</style>