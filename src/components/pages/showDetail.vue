<template>
    <div>
        <el-row>
            <el-col :span="16" :offset="4">
               <el-container>
                   <el-header>
                        <div align="right" style="float:right">
                            <el-button round @click="logout">注销</el-button>
                        </div>
                   </el-header>
                   <el-main :span="4" class="showDetail-bgr" style="background-color: #dfe7f1">
                        <div >
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658">
                        </div>
                   </el-main>
               </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "showDetail"
    }
</script>

<style scoped>
    .showDetail-bgr{
        /*FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColorStr= #AC07BD, endColorStr=#f6f6f8); !*IE 6 7 8*!*/
        background: -ms-linear-gradient(top, #AC07BD, #f6f6f8);        /* IE 10 */
        background:-moz-linear-gradient(top, #AC07BD, #f6f6f8);/*火狐*/
        background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8));/*谷歌*/
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8));      /* Safari 4-5, Chrome 1-9*/
        background: -webkit-linear-gradient(top, #AC07BD, #f140f8);   /*Safari5.1 Chrome 10+*/
    }
</style>