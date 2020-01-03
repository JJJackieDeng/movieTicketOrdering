<template>
    <el-container>
        <el-header>天地影院
            <div align="right" style="float:right">
                <el-button round @click="logout">注销</el-button>

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
                    <div class="showItem" v-for="(lists,index) in 10" :key="index">
                        <img src="../assets/logo.png"  width="180" height="250"/>
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
            }

        },
        methods: {
            logout(){
                /*清空缓存并重定向登录页面*/
                sessionStorage.clear();
                this.$router.push("/login")
            }
        }
    }
</script>

<style lang="scss" scoped>
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
</style>