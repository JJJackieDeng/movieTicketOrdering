<template>
    <div>
        WDNMD:{{dataInfo.userName}}
        {{dataInfo.createTime}}
        <el-button type="success" @click="add">+</el-button> <!--监听示例-->
        <el-row>
            <el-col>
               <el-container>
                   <el-header>
                        <div style="float:right;">
                            <el-button round @click="logout">注销</el-button>
                        </div>
                   </el-header>
                   <el-main class="showDetail-bgr" style="background-color: #dfe7f1">
                        <div >
                            <el-row :gutter="10">
                                 <el-col span="8">
                                     <el-image
                                             style="width: 320px;height: 440px;margin-left: 200px"
                                             class="box-shadow"
                                             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658"
                                             :preview-src-list="srcList">
                                     </el-image>
                                 </el-col>
                                <span style="margin-left: 80px;font-size: 30px;color: white;font-weight: bold">电影名字</span><br>
                                <span style="margin-left: 80px;font-size: 30px;color: white;font-weight: bold">英文名</span><br>
                                <span style="margin-left: 80px;font-size: 20px;color: white;">上映时间</span><br>
                                <span style="margin-left: 80px;font-size: 20px;color: white;">地区</span>
                            </el-row>
                        </div>
                   </el-main>
               </el-container>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="16" :offset="4">
                <el-container>
                            <el-tabs v-model="activeName" @tab-click="handleClick">
                                <el-tab-pane label="介绍" name="first">
                                    <p style="text-indent: 2em">该片讲述了承接自初代的5年之后。曾经的地球残疾军人杰克·萨利，如今已经是潘多拉星球纳美族一方部族的族长，
                                        并且与爱妻娜塔莉共同育有一对可爱的儿女，日子过得平淡而充实的故事
                                    </p>
                                </el-tab-pane>
                                <el-tab-pane label="演职人员" name="second">演职人员</el-tab-pane>
                                <el-tab-pane label="相关图集" name="third">相关图集</el-tab-pane>
                            </el-tabs>
                </el-container>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import * as commonUrls from'../../api/commonUrls'
    export default {
        name: "showDetail",
        data() {
            return {
                activeName: 'first',
                srcList: [
                    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580467403399&di=a6ad031533c9a783a0338ce82429a489&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1becd994d67ed1879045abe6e3be8998d7f51a25205cb-z3w1tf_fw658'

                ],
                id:1,
                dataInfo:'',
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            //获取用户数据测试
            getUserinfo(){
              commonUrls.getInfo(1,'get').then(res=>{
                  return res.json();
              }).then(res=>{
                  this.dataInfo = res;
              }).catch(err=>{
                  console.log(err)
              })
            },
            add(){
                this.id +=1;
            }
        },
        mounted(){
            this.getUserinfo();
        },
        watch:{
            id(){
                this.$message.success("!!监听！！id为"+this.id)  /*监听示例*/
            }
        }
    }
</script>

<style scoped>
    .showDetail-bgr{
        /*FILTER: progid:DXImageTransform.Microsoft.Gradient(gradientType=0, startColorStr= #AC07BD, endColorStr=#f6f6f8); !*IE 6 7 8*!*/
        background: -ms-linear-gradient(top, #AC07BD, #f6f6f8);        /* IE 10 */
        background:-moz-linear-gradient(top, #AC07BD, #f6f6f8);/*火狐*/
        background:-webkit-gradient(linear, 0% 0%, 0% 100%, from(#751489), to(#eff6fd));/*谷歌*/
        /*background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#AC07BD), to(#f140f8));      !* Safari 4-5, Chrome 1-9*!*/
        /*background: -webkit-linear-gradient(top, #AC07BD, #f140f8);   !*Safari5.1 Chrome 10+*!*/
    }
    .el-header{
        background-color: #ffffff;
    }
</style>