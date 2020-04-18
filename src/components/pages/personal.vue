<template>
    <div style="height: 1000px">
        <el-row>
            <el-col :span="4">
                <div class="leftSide  al-height-100">
                    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
                        <el-radio-button :label="false">展开</el-radio-button>
                        <el-radio-button :label="true">收起</el-radio-button>
                    </el-radio-group>
                    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
                             @close="handleClose"
                             :collapse="isCollapse">
                        <el-menu-item index="1" @click="toMyInfo">
                            <i class="el-icon-menu"></i>
                            <span slot="title">我的个人资料</span>
                        </el-menu-item>
                        <el-menu-item index="2" @click="toMyOrders">
                            <i class="el-icon-menu"></i>
                            <span slot="title">订单中心</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>

            <el-col :span="20" class="">
                <div style="height: 1000px" class="al-overflow-scroll al-overflow-scroll-hide-bar">
                    <router-view class=""></router-view>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "personal",
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            toMyInfo() {
                this.$router.push('/personal/myInfo');
            },
            toMyOrders() {
                this.$router.push('/personal/myOrders');
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted() {
            // this.$router.push('/myInfo');
        },
        created() {
            this.$emit('Header', true);
            this.$emit('Footer', true);
        }

    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100%;
        min-width: 100%;
    }
</style>