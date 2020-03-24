<template>
    <div class="gradient-bg al-box-container">
        <span>关于我们</span><br/>
        <span>个人邮箱：denzelqin@163.com</span><br/>
        <span>©2020 dengzhiqin.top</span>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .Footer {
        background-color: #262626;
        color: #E9EEF3;
        width: 100%;
        /*position: ；*/
        height: auto;
        /*text-align: center;*/
        /*vertical-align:bottom;*/
    }

    .gradient-bg {
        margin: 0;
        width: 100%;
        font-family: "Exo", sans-serif;
        color: #fff;
        background: linear-gradient(-45deg, #FFFEFF, #485563, #d1d1d1, #e7f0fd);
        background-size: 400% 400%;
        animation: gradientBG 15s ease infinite;
    }


    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>