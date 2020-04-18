<template>
    <div class="myOrders">
        <span>
            这是我的订单中心
            <!--            {{result}}-->
        </span>

        <div v-for="(item, index) in result" :key="index" class="al-box-pretty al-m-10px" style="height: 400px">
            <div class="al-height-100">
                <el-row>
                    <div>
                        <span>{{item.createTime}}</span>
                        <span class="al-m-left-20px">订单号 {{item.orderId}}</span>
                    </div>
                </el-row>

                <el-divider/>

                <el-row id="showOrder" class="" style="height: 300px">
                    <el-col :span="4" class="box-container">
                        <div style="height: 200px; " class="al-box-container">
                            <img style="width: 100px;" alt=""
                                 src="https://p0.meituan.net/movie/2c6a2e12913f71add517f50ada4099e8138840.jpg@464w_644h_1e_1c"/>
                        </div>
                        <div class="al-box-container">
                            {{item.movie_id}}
                        </div>
                    </el-col>
                    <el-col :span="8" class="box-container">
                        <div class="al-box-container">{{item.date}}</div>
                        <div class="al-box-container">{{item.runTime}} - {{item.endTime}}</div>
                        <div class="al-box-container">{{item.address}}</div>
                    </el-col>
                    <el-col :span="6" class="box-container">
                        <div class="al-box-container">{{item.cinemaID}}</div>
                        <div class="al-box-container">{{item.seats}}</div>
                        <div class="al-box-container">{{item.total}}</div>
                    </el-col>
                    <el-col :span="6" class="box-container">
                        <div style="height: 100px; " class="al-flex-container-center-vh">
                            <div>{{item.status}}</div>
                        </div>
                        <div style="height: 200px; " class="al-box-container">
                            <el-button type="primary" round @click="dialogVisible=true">
                                评价
                            </el-button>
                        </div>
                    </el-col>

                </el-row>
            </div>
            <!--用户评价操作-->
            <el-dialog
                    title="评分评论"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose">
                <div>
                    <div>评分</div>
                    <el-rate
                            v-model="rating"
                            :max="10"
                            show-score
                            text-color="#ff9900"
                            score-template="{value}">
                    </el-rate>
                </div>

                <div>
                    <div>评价</div>
                    <el-input
                            type="textarea"
                            v-model="comment"></el-input>
                    {{comment}}
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="update">确 定</el-button>
                </span>
            </el-dialog>
        </div>


        <!--        <div>-->
        <!--            <el-table :data="result" border class="al-width-100">-->
        <!--                <el-table-column prop="movie_id" ></el-table-column>-->
        <!--                <el-table-column prop="orderUser" ></el-table-column>-->
        <!--                <el-table-column prop="status" ></el-table-column>-->
        <!--                <el-table-column prop="total" ></el-table-column>-->
        <!--            </el-table>-->
        <!--        </div>-->
    </div>
</template>

<script>
    import {orderByUser} from "../../api/order"
    import {request} from "../../utils/request";

    export default {
        name: "myOrders",
        data() {
            return {
                orderUser: 'admin',
                /*是否弹出评论界面，默认为否*/
                dialogVisible: false,
                result: {},
                rating: 9.7,
                comment: ''
            }
        },

        mounted() {
            this.getOrderByUser();
        },

        methods: {
            /*处理弹窗界面*/
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {
                    });
            },
            getOrderByUser() {
                request({
                    url: '/api/order/selectByUser?user=' + this.orderUser,
                }).then(res => {
                    console.log(res);
                    this.result = res.data;
                }).catch(err => {
                    console.log(err);
                });
            }


        }
    }
</script>

<style scoped>

    #showOrder > div {
        border: #dfe7f1 solid 0.1px;
    }

    #showOrder > div > div {
        border: #dfe7f1 solid 0.1px;
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .box-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        height: 300px;
    }

</style>