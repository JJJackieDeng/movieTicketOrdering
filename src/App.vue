<template>
    <div id="app">
        <Header v-if="header_show"></Header>
        <router-view @Header="getHeader"></router-view>
        <Footer v-if="footer_show"></Footer>
    </div>
</template>

<script>
    import Header from "./components/pages/Header";
    import Footer from "./components/pages/Footer";
    export default {
        name: "app",
        components: {Header,Footer},
        data() {
            return {
                header_show: true,
                footer_show: true
            }
        },
        methods: {
            getHeader(val){
                this.header_show = val;
            }
        }
    };
</script>

<style>
    html, body {
        background-color: red;
    }


    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }


    .show-bg-red {
        background-color: red;
    }

    .show-bg-blue {
        background-color: #0ebbff;
    }

    .show-border-red {
        border-color: red;
    }

    .movie-box {
        width: 20%;
        height: 250px;
        margin: 10px;
        padding: 5px;
        background-color: #ffffff;
    }

    .movieDetail-box {
        width: 20%;
        height: 250px;
        margin: 10px;
        padding: 5px;
        background-color: #ffffff;
    }

    .display-block {
        display: inline-block;
    }

    .box-shadow {
        box-shadow: 2px 5px 10px #a8a8a8;
    }

    .box-radius {
        border-radius: 10px;
    }

    .p-10px {
        padding: 10px;
    }

    .m-10px {
        margin: 10px;
    }
</style>
