<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-model="post.title" placeholder="Название" />
      <my-input v-model="post.body" placeholder="Описание" />
      <my-button @click="addPost"> Добавить </my-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 10px;
}
form {
  display: flex;
  flex-direction: column;
}
</style>
