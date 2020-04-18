<template>
    <div class="myInfo">
        <span> 这是我的个人信息展示页</span>
        <div>ASDASDASDASDASDASDASDASDASDASDASD</div>
    </div>
</template>

<script>
    export default {
        name: "myInfo",
        data() {
            return {
                isCollapse: false,

            }
        },
        created() {
            this.$emit('Header', false);
            this.$emit('Footer', false);
        }
    }
</script>

<style scoped>

</style>