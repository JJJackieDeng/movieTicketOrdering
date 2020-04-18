<template>
    <div class="home">
        这是系统首页位置
        <!--        <el-row :gutter="20">-->
        <!--            <el-col :span="6">-->
        <!--                <div>-->
        <!--                    <el-card style="position: relative;" class="echart1">-->
        <!--                        <div class="card">-->
        <!--                            <div class="something">-->
        <!--                                <span class="s1">{{order}}</span>-->
        <!--                                <span class="s2">订单数量</span>-->
        <!--                                <i class="el-icon-truck" style="color: #00CCFF;"></i>-->
        <!--                            </div>-->

        <!--                            <el-progress :percentage="50"></el-progress>-->
        <!--                        </div>-->
        <!--                    </el-card>-->
        <!--                </div>-->
        <!--            </el-col>-->
        <!--&lt;!&ndash;            <el-col :span="6">&ndash;&gt;-->
        <!--&lt;!&ndash;                <div>&ndash;&gt;-->
        <!--&lt;!&ndash;                    <el-card style="position: relative;" class="elcard1">&ndash;&gt;-->
        <!--&lt;!&ndash;                        <div class="card">&ndash;&gt;-->
        <!--&lt;!&ndash;                            <div class="something">&ndash;&gt;-->
        <!--&lt;!&ndash;                                <span class="s1">{{materialL}}</span>&ndash;&gt;-->
        <!--&lt;!&ndash;                                <span class="s2">物资审批</span>&ndash;&gt;-->
        <!--&lt;!&ndash;                                <i class="el-icon-truck" style="color: #00CCFF;"></i>&ndash;&gt;-->
        <!--&lt;!&ndash;                            </div>&ndash;&gt;-->

        <!--&lt;!&ndash;                            <el-progress :percentage="50"></el-progress>&ndash;&gt;-->
        <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
        <!--&lt;!&ndash;                    </el-card>&ndash;&gt;-->
        <!--&lt;!&ndash;                </div>&ndash;&gt;-->
        <!--&lt;!&ndash;            </el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;            <el-col :span="6">&ndash;&gt;-->
        <!--&lt;!&ndash;                <div>&ndash;&gt;-->
        <!--&lt;!&ndash;                    <el-card style="position: relative;" class="elcard1">&ndash;&gt;-->
        <!--&lt;!&ndash;                        <div class="card">&ndash;&gt;-->
        <!--&lt;!&ndash;                            <div class="something">&ndash;&gt;-->
        <!--&lt;!&ndash;                                <span class="s1">{{materialL}}</span>&ndash;&gt;-->
        <!--&lt;!&ndash;                                <span class="s2">物资审批</span>&ndash;&gt;-->
        <!--&lt;!&ndash;                                <i class="el-icon-truck" style="color: #00CCFF;"></i>&ndash;&gt;-->
        <!--&lt;!&ndash;                            </div>&ndash;&gt;-->

        <!--&lt;!&ndash;                            <el-progress :percentage="50"></el-progress>&ndash;&gt;-->
        <!--&lt;!&ndash;                        </div>&ndash;&gt;-->
        <!--&lt;!&ndash;                    </el-card>&ndash;&gt;-->
        <!--&lt;!&ndash;                </div>&ndash;&gt;-->
        <!--&lt;!&ndash;            </el-col>&ndash;&gt;-->
        <!--        </el-row>-->

    </div>
</template>

<script>
    // 引入基本模板
    let echarts = require('echarts/lib/echarts');
    // 引入柱状图组件
    require('echarts/lib/chart/bar');
    // 引入提示框和title组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name: "manageHome",
        data() {
            return {
                msg: '欢迎来到电影院订票系统后台管理系统'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'));
                // 绘制图表
                myChart.setOption({
                    title: {text: '在Vue中使用echarts'},
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }

</script>

<style scoped>
    .card {
        height: 90px;
    }
</style>