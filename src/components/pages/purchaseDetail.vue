<template>
    <div class="purchase">
        <div class="steps">
            <el-steps :space="400" :active="1" finish-status="success">
                <el-step title="选择影片场次"></el-step>
                <el-step title="选择座位"></el-step>
                <el-step title="三十分钟内付款"></el-step>
                <el-step title="影院取票观影"></el-step>
            </el-steps>
        </div>
        <el-row :gutter="10">
            <el-col :span="16">
                <div class="seat-wrapper">
                    <div class="illustration">
                        <div class="illustration-img-wrapper unselected-seat">
                        </div>
                        <span class="illustration-text">可选</span>
                        <div class="illustration-img-wrapper selected-seat">
                        </div>
                        <span class="illustration-text">已选</span>
                        <div class="illustration-img-wrapper bought-seat">
                        </div>
                        <span class="illustration-text">不可选</span>
                    </div>
                    <div class="screen">
                        <!--todo 获取cinema中的放映厅-->
                        3号激光厅银幕
                    </div>
                    <div class="screen-center">
                        银幕中央
                        <!--                        <div class"mid-line"=></div>-->
                    </div>
                    <!--主要业务功能实现-->
                    <div class="seatChoose">
                        <!--根据座位是否已售来判断是否可选；如果可选，根据是否已点击来显示座位状态-->
                        <span v-for="(li,index) in 200"
                              :class="[isSell[index]?'bg-sited':isClick[index]?'bg-beChosen':'bg-sit']" :key="index"
                              @click="isSell[index]?cantSelect():clickSeats(index)">
                            </span>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="side">
                    <div class="movieInfoBox">
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <img src="../../assets/img/Luffy2.jpg" alt="加载失败" class="posters">
                            </el-col>
                            <el-col :span="12">
                                <span>
                                    海贼王：狂热行动
                                </span><br>
                                <span>时长：101分钟</span>
                            </el-col>
                        </el-row>
                        <span>影院：</span><br>
                        <span>影厅：</span><br>
                        <span>场次：<span style="color: red"> 周六 3月21日 14:00</span>
                        </span><br>
                        <span>座位：
                        </span><br>
                        <span>票价：<span style="color: #39ac6a">74￥/座</span>
                        </span><br>
                        <span>总价：</span><br>

                        <div class="btn-wrapper">
                            <el-button type="danger" @click="confirmSeats">确认选座</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getMoiveSeats, confirmSeats} from '../../api/commonUrls'

    export default {
        data() {
            return {
                chooseSeats: [], //已选座位
                isClick: [], //座位是否选中
                isSell: [], //已售不可选
            }

        },
        methods: {
            //判断是否选中座位
            choseSeats(idnex) {
                if (this.chooseSeats.length !== 0) {
                    var index2 = this.chooseSeats.indexOf(idnex);
                    if (index2 === -1) {
                        this.chooseSeats.push(idnex);
                        this.$set(this.isClick, idnex, true);
                    } else {
                        this.$set(this.isClick, idnex, false);
                        this.chooseSeats.splice(index2, 1)
                    }
                } else {
                    this.chooseSeats.push(idnex);
                    this.$set(this.isClick, idnex, true);
                }
            },
            //选座
            clickSeats(idnex) {
                this.choseSeats(idnex)
                console.log(this.chooseSeats)
            },
            cantSelect() {
                this.$message.warning("该座位已售！");
                return false;
            },
            //确定选座
            confirmSeats() {
                confirmSeats({
                    seats: this.chooseSeats, //数组
                    scheduleId: this.$route.query.scheduleId
                }, 'post').then(res => {
                    return res.json()
                }).then(res => {
                    if (+res.code === 200) {
                        this.$message.success("选座成功！");
                    } else {
                        this.$message.error("选座失败！");
                    }
                }).catch(err => {
                    console.log(err);
                    this.$message.error("选座接口出现错误！");
                })
            },
            //获取座位状态
            getSeats() {
                getMoiveSeats({scheduleId: this.$route.query.scheduleId}, 'get').then(res => {
                    return res.json()
                }).then(res => {
                    for (let i of res) {
                        this.$set(this.isSell, i.row, true);
                    }

                }).catch(err => {
                    console.log(err);
                    this.$message.error('获取座位状态出错！');
                })
            },
        },


        // 过滤器
        filters: {

            // 日期过滤器
            time(data) {
                let date = new Date(data);
                let month = date.getMonth() + 1;
                let day = date.getDate();
                let hours = date.getHours() > 9 ? date.getHours() : ("0" + date.getHours());
                let minutes = date.getMinutes() > 9 ? date.getMinutes() : ("0" + date.getMinutes());
                return month + "月" + day + "日  " + hours + ":" + minutes;
            },


            // 价格过滤器,数字保留两位小数
            price(data) {
                let price = parseFloat(data);
                return price.toFixed(2);
            }
        },
        mounted() {
            this.getSeats();
        }
    }

</script>

<style scoped>
    html,
    body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .el-header {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #e8f0fa;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .sit {
        height: 35px;
        width: 35px;
        min-height: 10px;
        min-width: 10px;
        margin: 4px 4px 4px 4px;
        background-size: cover;
        /* border: 1px solid black; */
    }

    /* 座位 */
    .bg-sit {
        width: 20px;
        height: 20px;
        background-position: center center;
        background-size: cover;
        list-style: none;
        background-image: url("../../assets/img/bg-unsit.png");
    }

    .bg-sit:hover {
        cursor: pointer;
    }

    /* 已售座位 */
    .bg-sited {
        /* background-color: red; */
        width: 20px;
        height: 20px;
        background-position: center center;
        background-size: cover;
        background-image: url('../../assets/img/bg-sited.png');
    }

    /* 空位置 */
    .bg-nosit {
        /* border: 1px solid white; */
    }

    /* 已选座位 */
    .bg-beChosen {
        cursor: pointer;
        width: 20px;
        height: 20px;
        background-position: center center;
        background-size: cover;
        background-image: url('../../assets/img/bg-bechosen.png');
    }

    /* 已选座位号 */
    .select-sit {
        border: 2px orange solid;
        border-radius: 10px;
        margin-left: 10px;
        padding: 4px 10px 4px 10px;
        background-color: rgba(255, 0, 0, 0.2);
    }

    .row {
        /* 清除格式并换行 */
        clear: both;
    }

    /* 确认选座按钮 */
    .btn {
        border-radius: 10px;
        width: 200px;
        height: 50px;
        /* padding: 4px 10px 4px 10px; */
        background-color: rgba(255, 0, 0, 0.8);
        font-size: 25px;
        color: white;
        font-family: '微软雅黑';
    }

    /* 右侧信息栏 */
    .win-right {
        padding-left: 2%;
        padding-top: 2%;
        width: 27%;
        background-color: rgba(112, 112, 112, 0.2);
        border: 1px white solid;
        height: 100%;
    }

    /* 整体容器 */
    .box {
        width: 90%;
        margin-left: 5%;
        height: 64%;
    }

    /* 电影封面 */
    .film-img {
        width: 80%;
    }

    /* 电影名 */
    .film-title {
        font-family: "微软雅黑";
        font-weight: 900;
        font-size: 25px;
    }


    .wrapper {
        height: 100%;
        padding: 40px;
        box-sizing: border-box;
    }

    .cinema-wrapper {
        height: 100%;
    }

    .title {
        text-align: center;
    }

    .seat-wrapper {
        height: 700px;
        width: 1000px;
        border: 1px dotted #c5c5c5;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }

    .screen {
        margin: 0 auto;
        height: 30px;
        width: 300px;
        background-color: #e3e3e3;
        border-radius: 0 0 30px 30px;
        color: #585858;
        line-height: 30px;
        text-align: center;
    }

    .inner-seat-wrapper {
        position: absolute;
        top: 120px;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .seat {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .inner-seat {
        width: 80%;
        height: 80%;
        cursor: pointer;
    }

    .selected-seat {
        background: url('../../assets/img/bg-bechosen.png') center center no-repeat;
        background-size: 100% 100%;
    }

    .unselected-seat {
        background: url('../../assets/img/bg-unsit.png') center center no-repeat;
        background-size: 100% 100%;
    }

    .bought-seat {
        background: url('../../assets/img/bg-sited.png') center center no-repeat;
        background-size: 100% 100%;
    }

    .screen-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        padding: 5px;
        font-size: 13px;
        border-radius: 5px;
        top: 50px;
        background-color: #f6f6f6;
        color: #636363;
        border: 1px solid #b1b1b1;
    }

    .mid-line {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 100%;
        width: 1px;
        height: 800px;
        border-left: 1px dashed #919191;
    }

    .btn-wrapper {
        margin: 20px auto;
        width: 1000px;
        height: 30px;
    }

    .btn-buy {
        height: 100%;
        line-height: 30px;
        font-size: 14px;
        border-radius: 5px;
        padding: 0 5px;
        background-color: #ffa349;
        color: #ffffff;
        display: inline-block;
        cursor: pointer;
        margin-right: 10px;
    }

    .smart {
        background-color: #39ac6a;
    }

    .illustration {
        position: absolute;
        left: 0;
        top: 0;
        height: 35px;
        width: 300px;
    }

    .illustration-img-wrapper {
        width: 25px;
        height: 25px;
        position: relative;
        top: 50%;
        display: inline-block;
        transform: translateY(-50%);
        margin-left: 10px;
    }

    .illustration-text {
        display: inline-block;
        height: 100%;
        line-height: 35px;
        font-size: 14px;
        position: relative;
        top: -2px;
    }

    .side {
        width: 450px;
        height: 750px;
        background-color: #ffffff;
        color: #999999;
    }

    .movieInfoBox {
        margin: 20px 20px 0 20px;
        width: 350px;
        height: 162px;
    }

    .steps {
        margin: 0 auto;
        width: 1200px;
        height: 100%;
    }

    .posters {
        height: 158px;
        width: 115px;
    }

    .seatChoose {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 60px 20px;
    }

    .seatChoose span {
        width: 35px;
        margin: 5px 5px;
        height: 35px;
    }
</style>