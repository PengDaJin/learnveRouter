<template>
    <div>
        <h1>C</h1>
        <h3>cccccccccc</h3>
        <h2>{{'？？？' + userId}}</h2>
        <h2>{{'! ! ! ' + $route.params.userIds}}</h2>
    </div>
</template>
<script>
export default {
    name: "User",
    computed: {
        // 动态路由 this.$route.params  this指的是router实例
        userId() {
            return this.$route.params.userIds
        }
    }
}
</script>
