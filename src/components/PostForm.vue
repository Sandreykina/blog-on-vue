<template>
  <div>
    <form @submit.prevent>
      <my-input v-model="post.title" placeholder="Название" />
      <my-input v-model="post.text" placeholder="Описание" />
      <my-button @click="addPostForm"> Добавить </my-button>
      <my-button @click="editPostForm"> Отредачить </my-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "post-form",
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
    addPostForm() {
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
    editPostForm() {
        this.$emit("edit", this.post);
        this.post = {
        author: null,
        title: "",
        text: "",
        created_date: null,
        published_date: null,
      };
    }
    
  }
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
