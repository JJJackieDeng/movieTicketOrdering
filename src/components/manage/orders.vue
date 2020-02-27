<template>
    <div>
        <el-container>
            <el-main>
                <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                    <el-table-column
                            prop="id"
                            label="id"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="orderUser"
                            label="下单人"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="orderId"
                            label="下单人ID"
                            width="100px">
                    </el-table-column>
                    <el-table-column
                            prop="status"
                            label="订单状态">
                    </el-table-column>
                    <el-table-column
                            prop="runTime"
                            label="放映时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="endTime"
                            label="结束时间">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="放映地址">
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import * as CommonUrls from '../../api/commonUrls'
    export default {
        name: "orders",
        data(){
            return{
                input:'',
                tableData:[],
                /**每页查询多少*/
                limit: 100,
                /*从第一个开始查*/
                offset: 0
            }
        },
        methods:{
            getAllOrders(){
                CommonUrls.getALLOrders({
                    limit: this.limit,
                    offset: this.offset,
                },'get').then(res=>{
                        return res.json();
                }).then(res=>{
                    this.tableData=res;
                }).catch(err=>{
                    console.log(err);
                })
            }
        },
        mounted() {
            /*获取数据必不可少*/
            this.getAllOrders();
        }
    }
</script>

<style scoped>

</style>