<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Home</router-link>
    <button @click="aboutClick">about</button>
    <router-link :to="/user/+userIds" tag="button" replace>User</router-link>
    <router-link :to="{ path:'/profile', query:{a:1,b:2,c:3} }" tag="button" replace>Profile</router-link>
    <button @click="ProfileClick">Profile-query</button>
    <keep-alive exclude="User"> <!-- exclude=“User” User组件不被缓存  include会被缓存 -->
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userIds: 'lise' // 动态路由 this.$route.params
    }
  },
  methods: {
    aboutClick(){
      //或者使用replace也可以跳转  this.$router.replace('/about')
      this.$router.push('/about/' + this.userIds)  // params类型传递参数
    },
    ProfileClick(){
      this.$router.push({
        path: '/profile',
        query: { //query类型传递参数
          a: 1,
          b: 2,
          c:3
        }
      })
    }
  },
  activated: {
    
  }
}
</script>

<style>
.active{
  color:coral;
}
</style>
