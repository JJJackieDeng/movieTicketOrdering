<template>
    <div class="purchase">
        <!--选择场次-->
        <div class="al-box-container">
            <div class="steps">
                <el-steps :space="1200" :active="1" finish-status="success" :align-center="true">
                    <el-step title="选择影片场次"></el-step>
                    <el-step title="选择座位"></el-step>
                    <el-step title="三十分钟内付款"></el-step>
                    <el-step title="影院取票观影"></el-step>
                </el-steps>
            </div>
        </div>

        <!--选择影院-->
        <div class="al-flex-wrap al-flex-container-center-vh">

            <div>选择影院-></div>

            <div>
                <area-select :level="2" type="text" v-model="selected" :data="pcaa"></area-select>
            </div>
            <!--            <div>-->
            <!--                <span v-if="activeTimetable" class="al-text-color-light-red">{{item.schedule}}</span>-->
            <!--            </div>-->
            <div class="al-m-left-40px">
                <el-button @click="getCinema">确定</el-button>
            </div>
        </div>

        <!-- 显示影院列表 -->
        <div class="al-flex-container-center-vh">

            <div v-if="cinemas.length != 0">
                <div class="al-flex-justify-space-around">
                    <div v-for="(item, index) in cinemas" :key="index">
                        <div v-if="item != undefined" class="al-box-shadow-radius al-p-20px al-m-20px"
                             @click="convertDataToSelectSeatArea(item)">
                            {{item.cinemaName}}
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <div class="al-flex-container-center-vh">
            <div>选择场次-></div>
            <el-date-picker
                    v-model="date"
                    type="date"
                    :editable="false"
                    placeholder="场次日期选择"
                    value-format="yyyy-MM-dd"
                    @change="handleDateChange"
                    :picker-options="pickerOptions0">
            </el-date-picker>
        </div>

        <div class="al-p-10px" v-if="schedule != null">
            <span v-for="(item, index) in schedule" :key="index">
                <span
                        class="al-p-10px al-m-left-20px al-cursor-pointer"
                        @click="getSeats(item.id, item.schedule)">
                    <!--显示日期-->
                    <span v-if="activeTimetable" class="al-text-color-light-red">
                        {{item.schedule}}
                    </span>
                    <!--显示开场时间-->
                    <span v-else>
                        {{item.schedule}}
                    </span>
                </span>
            </span>
        </div>
        <!--        <span>{{schedule.room}}</span>-->
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
                                <img :src="movieInfo.poster" alt="加载失败" class="posters">
                            </el-col>
                            <el-col :span="12">
                                <span>
                                    {{movieInfo.movie.movieName}}
                                </span><br>
                                <span>时长：{{movieInfo.movieLength}}分钟</span>
                            </el-col>
                        </el-row>
                        <div>
                            影院： {{orderInfo.cinema}}
                        </div>

                        <div>
                            影厅： {{orderInfo.room}}
                        </div>
                        <div>
                            场次：
                            <span style="color: red"
                                  v-if="this.chooseDate != undefined"> {{orderInfo.schedule.date}}</span>
                        </div>
                        <!--for循环输出展示座位-->
                        <span>座位：{{decodeSeats}}
                        </span><br>
                        <span>票价：<span style="color: #39ac6a">74￥/座</span>
                        </span><br>
                        <span>总价：</span><br>

                        <div style="margin: 20px 0 0 0;text-align: center">
                            <!--                            在当前场次中选择单个可选座位，-->
                            <el-button type="success">推荐选座</el-button>
                            <el-button type="danger" @click="confirmSeats">确认选座</el-button>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-dialog
                title="订单"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>订单号：{{this.orderID}}</span><br>
            <span>电影名称： {{movieInfo.movie.movieName}}</span><br>
            <span>座位：</span><br>
            <!--            日期与具体开场时间-->
            <span>开场时间：{{orderInfo.schedule.date}} </span><br>
            <span>影院名称：{{orderInfo.cinema}}</span><br>
            <span>影院地址：</span><br>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false" type="danger">稍后支付</el-button>
                <el-button type="primary" @click="toPay">立即支付</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import {AllScheduleByDate} from '../../api/schedule'
    import {querySeatById} from '../../api/seat'
    import {request} from "../../utils/request";
    import {pay} from "../../api/commonUrls";
    import {selectByAddress} from "../../api/cinema";
    /*行政区域选择器支持*/
    import {pca, pcaa} from 'area-data';

    export default {
        data() {
            return {
                /*行政区域支持*/
                selected: [], //数组对应的就是选中的那个省市区。根据type来确定是省市区汉字的数组还是编码组成的数组。
                //selected[0]省。selected[1]市。selected[2]区。
                pca: pca,
                pcaa: pcaa,

                chooseSeats: [], //已选座位
                isClick: [], //座位是否选中
                isSell: [], //已售不可选
                //场次日期选择器
                /*是否支付界面，默认为否*/
                dialogVisible: false,
                id: this.$route.params.mid,
                radio: '',
                date: '', //用户选择的日期
                tableData: [],
                /*选座成功，后端返回的订单号*/
                orderID: null,
                order: {
                    /*订单号*/
                    orderId: '',
                    /*座位*/
                    seats: '',
                    /*根据这个查出cinema名称*/
                    cinemaId: '',
                    /*放映厅名称、日期与时间*/
                    room: '',
                    date: '',
                    runTime: '',
                    endTime: '',
                },
                schedule: {}, //初始化schedule并存储后端传来的schedule信息
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() < Date.now() - 8.64e7;
                    }
                },

                timetable: [],
                chooseDate: null,
                activeTimetable: false,
                activeCinemaTable: false,
                /*进入页面时获取电影数据*/
                movieInfo: {},
                cinemaInfo: {},

                cinemas: [],

                orderInfo: {
                    cinema: '',
                    room: '',
                    /*时间日期显示*/
                    schedule: {
                        date: '',
                        time: '',
                    },
                    seat: '',
                    price: 0.0,
                    totalPrice: 0.0
                },
                decodeSeats: [],


                // tempAddress: "广东省广州市番禺区",

            }

        },
        methods: {
            //判断是否选中座位
            choseSeats(index) {
                if (this.chooseSeats.length !== 0) {
                    let index2 = this.chooseSeats.indexOf(index);
                    if (index2 === -1) {
                        this.chooseSeats.push(index);
                        this.$set(this.isClick, index, true);
                    } else {
                        this.$set(this.isClick, index, false);
                        this.chooseSeats.splice(index2, 1)
                    }
                } else {
                    this.chooseSeats.push(index);
                    this.$set(this.isClick, index, true);
                }
                //console.log(this.chooseSeats)
            },


            //选座
            clickSeats(index) {
                // this.$message.success(this.scheduleId + this.chooseDate);
                //this.scheduleId != null && this.chooseDate != null
                if (this.scheduleId != null && this.chooseDate != null) {
                    this.choseSeats(index);
                } else {
                    this.$message.warning("请先选择场次");
                }

            },


            cantSelect() {
                this.$message.warning("该座位已售！");
                return false;
            },


            toPay() {
                /*付款接口，其中orderID*/
                let params = {};
                pay({
                    orderID: this.orderID,
                    //todo 订单总价
                    total: '111',
                    movieName: this.movieInfo.movie.movieName,
                    discription: this.movieInfo.introduce
                }, 'post').then(res => {
                    return res.json();
                }).then(res => {
                    // console.log(res);
                    document.querySelector('body').innerHTML = res;
                    // 创建div
                    const div = document.createElement('div');
                    // 将返回的form 放入div
                    div.innerHTML = res;
                    document.body.appendChild(div);
                    document.forms[0].submit()
                }).catch(err => {
                    console.log(err);
                })
            },


            //确定选座
            confirmSeats() {
                /*根据movieID查询当前电影的电影名称*/
                // console.log(this.schedule.date);
                let params = {
                    rows: this.chooseSeats.toString(), //数组
                    /*todo scheduleID获取失败*/
                    scheduleId: this.scheduleId,
                    /*场次接口，日期，开始时间与结束时间*/
                    order: {
                        date: this.chooseDate,
                        //todo 未正确传值
                        runTime: this.schedule.schedule,
                        /*todo 未找到解决方案*/
                        endTime: '',
                        /*前台过滤器计算得来，必传*/
                        total: '',
                        /*必传*/
                        /*movie接口*/
                        // movieName: this.movieInfo.movie.movieName,
                        movieName: this.movieInfo.movie.movieName,
                        /*cinema接口*/
                        address: '',
                        // order: ''//订单信息address,status,runtime为schudule中的schedule,seats字段为rows
                    },

                };
                // console.log(params);
                request({
                    url: 'api/seat/add',
                    method: 'post',
                    // data: this.qsParam(params),
                    data: this.qsParam(params),
                    header: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).then(res => {
                    if (res.data.code === 200) {
                        this.$message.success("选座成功！");
                        /*弹出支付页面*/
                        // console.log(res.data.data);
                        this.orderID = res.data.data.orderId;
                        // console.log(this.orderID);
                        this.dialogVisible = true;
                    } else if (res.data.code === 404) {
                        this.$message.error("座位已被选，请选择其他座位！");
                    } else {
                        // console.log(res.data.code);
                        this.$message.error("选座失败！");
                    }
                }).catch(err => {
                    console.log(err);
                });
            },


            /*根据影院地址查询影院*/
            getCinema() {
                let addressStr = "";
                for (let s of this.selected) {
                    addressStr += s;
                }

                // console.log(addressStr);

                selectByAddress({
                    address: addressStr,                     //"辽宁省沈阳市和平区"
                }, 'get').then(res => {
                    return res.json();
                }).then(res => {
                    this.cinemas = res;
                    //"辽宁省沈阳市和平区"
                    // console.log(res);

                    // for (let item of res) {
                    //     // console.log(item.);
                    //     //this.getCinema(item.cinemaName);
                    //     this.cinemas.push(item.cinemaName);
                    //     //this.getSeats(item.id);
                    // }


                }).catch(err => {
                    console.log(err);
                })
            },


            //获取场次信息
            //这里获取场次的时候应该点击日期之后会有很多个时间段可以选择，然后再点击时间才能加载某个场次
            getSchedule(date) {
                this.schedule = []
                const array = this.cinemas.filter(item => item.cinemaName === this.orderInfo.cinema)
                console.log(array[0].id)
                if (array.length !== 1) {
                    this.$message.warning('选择影院出现问题')
                }
                AllScheduleByDate({
                    dateStr: date,
                    movie_id: this.id,
                    cinema_id: array[0].id + '',
                }, 'get').then(res => {
                    console.log(res.data);
                    if (res.data === '') {
                        this.$message("今日该影院暂无该影片场次信息");
                    }
                    return res.json()
                }).then(res => {
                    this.schedule = res.data;
                    // console.log("scheduleInfo: ");
                    // console.log(this.schedule);
                    // console.log(this.schedule)
                    //获取影院信息
                    this.getCinemaInfo(this.schedule[0].cinema_id);

                    for (let item of res.data) {
                        // console.log(item.date);
                        //this.getTimetable(item.schedule);
                        this.timetable.push(item.schedule);
                        //this.getSeats(item.id);
                    }
                    //this.getSeats();
                }).catch(err => {
                    console.log(err);
                })
            },


            //获取座位状态
            getSeats(scheduleId, schedule) {
                this.convertDataToSelectSeatArea2(schedule);
                this.activeTimetable = true;
                // console.log("activeTimetable: " + this.activeTimetable);
                // console.log(scheduleId);
                this.scheduleId = scheduleId;
                querySeatById({scheduleId: scheduleId}, 'get').then(res => {
                    return res.json()
                }).then(res => {
                    // console.log(res.data);
                    for (let i of res.data) {
                        this.$set(this.isSell, i.row, true);
                    }

                }).catch(err => {
                    console.log(err);
                    this.$message.error('获取座位状态出错！');
                })
            },


            handleDateChange(date) {
                // this.date = date;
                // console.log(date);
                this.chooseDate = date;

                this.orderInfo.schedule.date = this.chooseDate;
                // this.$message.success(date);
                this.getSchedule(date);

            },


            /*处理弹窗界面*/
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },


            /**
             * 获取电影信息
             * @param id
             */
            getMovieInfoById(id) {
                request({
                    url: 'api/movieInfo/selectOne?id=' + id,
                }).then(res => {
                    // console.log(res);
                    this.movieInfo = res.data;
                }).catch(err => {
                    console.log(err);
                });
            },


            /**
             * todo选择影院之后再进行选择日期然后选择场次 获取影院信息
             * @param cinemaId
             */
            getCinemaInfo(cinemaId) {
                request({
                    url: 'api/cinema/selectOne?id=' + cinemaId,
                }).then(res => {
                    // console.log(res);
                    this.cinemaInfo = res.data;
                    // console.log(this.cinema);
                }).catch(err => {
                    console.log(err);
                });
            },


            /**
             * 将数据整合并存入后在右侧订单信息显示,
             * @param item
             */
            convertDataToSelectSeatArea(item) {
                // console.log(item);
                this.orderInfo.cinema = item.cinemaName;
                this.orderInfo.room = item.room;
                this.orderInfo.schedule.date = this.schedule.date + " " + this.schedule.schedule;

            },

            convertDataToSelectSeatArea2(time) {

                this.orderInfo.schedule.date = this.chooseDate + " " + time;

                //this.$message.success(this.scheduleId + " " + this.chooseDate);
            }

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
            },

        },

        mounted() {
            // this.getSeats();
            this.getMovieInfoById(this.$route.params.mid);

            // this.getCinema();

        },

        watch: {
            chooseSeats(newVal, oldVal) {
                newVal.map((item) => {
                    //第几排，row
                    var lie = item % 20;
                    //第几座，column
                    var pai = parseInt(item / 20);
                    this.decodeSeats.push([(pai + 1) + "排", (lie + 1) + "列"]);
                })
            }
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

    .purchase {
        min-width: 1420px;
        max-width: 1420px;
        margin: 20px 0 0 30px;
    }

    .payChooseWrapper {
        justify-content: center;
        align-items: center;
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

    .dialog-footer {
        text-align: center;
    }

    .seat-wrapper {
        height: 700px;
        width: 100%;
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
