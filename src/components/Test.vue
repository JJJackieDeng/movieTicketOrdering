<template>
    <div>
        <el-row>
            <el-col :span="8" :offset="8" >
                <div class="box">

                        <h1>Test Pages</h1>
                        1234567890
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">addasdaaaaaaaaaaaaaaaaaaaaaaaa</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">ssssssssssssss</div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">asdasdaaaaaaaaaaaaaaa</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">adsssssssssssssssssss</div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                currentDate: new Date()
            };
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        height: 400px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 2px 5px 10px #eeeeee;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>