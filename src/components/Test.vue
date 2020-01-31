<template>
    <div>
        <el-row>
            <el-col :span="8" :offset="8" >
                <div class="box">
                    <center>
                        <h1>Test Pages</h1>
                    </center>
                </div>
            </el-col>
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
    .box{
        width: 100%;
        height: 400px;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 2px 5px 10px #eeeeee;
    }




</style>