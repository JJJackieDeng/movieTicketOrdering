<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
<!--                <img src="../assets/img/Luffy.jpg">-->
                <img src="../assets/logo.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .login_container{
    background-color: #2b4b6b;
    }
    .login_box{
        background-color: #fff;
        width: 450px;
        height: 300px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        padding: 10px;
        box-shadown: 0 0 10px #ddd;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
            left: 50%;
            transform: translate(-50%,-6%);
            position: absolute;
/*            transform: translate(-50%);*/
        }
    }
</style>