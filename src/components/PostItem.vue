<template>
  <div class="post">
    <div><strong>Название:</strong>{{ post.title }}</div>
    <div><strong>Описание:</strong>{{ post.body }}</div>
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
