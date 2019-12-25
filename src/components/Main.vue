<template>
    <el-container>
        <el-button type="info" @click="logout">退出</el-button>
        <el-header>海贼王：大结局终章</el-header>
        <el-container>
            <el-aside width="200px">
                <h1>热门影院</h1>
                <el-form>
                    <el-form-item>
                        <el-input v-model="popularCinema.address" prefix-icon="el-icon-search"></el-input>
                    </el-form-item>
                </el-form>
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
                    目前热播的电影
                    <el-image></el-image>
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

<style scoped>
    .el-header, .el-footer {
        background-color: rgba(0, 0, 0, 0.68);
        color: rgb(255, 255, 255);
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
        text-align: center;
        line-height: 160px;
    }
</style>