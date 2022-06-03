<template>
  <div class="app">
    <h1>Основная страница</h1>
    <my-button @click="fetchPosts"> получить пост </my-button>

    <my-button @click="showPopup"> Добавить пост </my-button>

    <my-popup v-model:show="popupVisible">
      <post-form @add="addPost" />
    </my-popup>
    <post-list v-bind:posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";
import getApi from "./axios-api";

export default {
  components: {
    PostForm,
    PostList,
    MyPopup,
    MyButton,
  },
  data() {
    return {
      popupVisible: false,
      posts: [],
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showPopup() {
      this.popupVisible = true;
    },
    fetchPosts() {
      getApi.get('')
        .then((response) => {
          this.posts = response.data;
          console.log(this.posts)
          console.log(response)
          
          })
        .catch((error) => console.log(error));
    }
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
.app {
  padding: 20px;
}
</style>
