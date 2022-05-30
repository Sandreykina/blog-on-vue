<template>
Список пользователей
    <post-item v-for="post in posts" :post="post" v-bind:key="post.id"/>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 10px;
}
</style>
