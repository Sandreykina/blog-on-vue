<template>
  <div class="post">
    <h3 @click="$router.push(`/post/${post.id}`)">{{ post.title }}</h3>
    <div><strong>Описание:</strong>{{ post.text }}</div>
    <my-button
      @click="$emit('remove', post)">Удалить</my-button>
  </div>
</template>

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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 10px;
}
.post {
  padding: 15px;
  border: 2px solid teal;
}
</style>
