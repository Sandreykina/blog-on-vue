<template>
  <div>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <my-input v-model="post.title" placeholder="Название" />
      <my-input v-model="post.text" placeholder="Описание" />
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
        author: null,
        title: "",
        text: "",
        created_date: null,
        published_date: null,
      },
    };
  },
  methods: {
    addPost() {
      this.post.id = Date.now();
      this.$emit("add", this.post);
      this.post = {
        author: null,
        title: "",
        text: "",
        created_date: null,
        published_date: null,
      };
    },
  }
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
