<template>
    <div>这是系统首页</div>
</template>

<script>
    export default {
        name: "manageHome",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    html,body,#app{
        background-color: #0ea5ff;
    }
    .el-header, .el-footer {
        background-color: #f5f6f6;
        color: #000000;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
    }

    .el-aside {
        color: #333;
        text-align: center;
        line-height: 600px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>