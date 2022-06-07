<template>
  <div class="post">
    <h3 @click="$router.push(`/post/${post.id}`)">{{ post.title }}</h3>
    <div><strong>Описание:</strong>{{ post.text }}</div>
    
  </div>
</template>
<!-- <my-button
      @click="$emit('remove', post)">Удалить</my-button> -->
<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
}
</style>
