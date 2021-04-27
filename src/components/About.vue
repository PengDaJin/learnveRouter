<template>
    <div>
        <h1>B</h1>
        <h3>bbbbbbbbbbbbb</h3>
        <h2>{{$route.params.userIds}}</h2>
    </div>
</template>
<script>
// {{$route.params.userIds}} 里的$route是当前活跃的路由
export default {
    name: "About"
}
</script>
