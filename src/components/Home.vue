<template>
    <div>
        <h1>A</h1>
        <h3>aaaaaaaaaaa</h3>
        <router-link to="/home/homeMessage" tag="button">homeMessage</router-link>
        <router-link to="/home/homeNews" tag="button">homeNews</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
// 保存退出前页面路由的状态，缓存页面 activated  beforeRouteLeave销毁后
export default {
    name: "Home",
    data() {
        return {
            path: '/home/homeNews'
        }
    },
    activated() {
        this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
        this.path = this.$route.path
        next()
    }
}
</script>
 