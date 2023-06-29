<template>
    <div class="container mt-4">
        <h4>상세페이지입니다</h4>
        <h5>{{ 블로그글[$route.params.id].title }}</h5>
        <p>{{ 블로그글[$route.params.id].content }}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'DetailContents',
    props : {
        블로그글 : Array,
    }
}
</script>

<style>

</style>