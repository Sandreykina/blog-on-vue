<template>
  <div class="app">
    <h1>Основная страница</h1>
    <my-button @click="showPopup"> Добавить пост </my-button>
    <!-- <my-button @click = "fetchPosts">Получить посты с апи</my-button> -->
    <my-popup v-model:show="popupVisible">
      <post-form @add="addPost" />
    </my-popup>
    <post-list
      v-bind:posts="posts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Идёт загрузка...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";
// import getApi from "./axios-api";
import axios from "axios";

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
      isPostLoading: false,
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
  },
  mounted: function () {
    this.isPostLoading = true;
    axios
      .get("http://127.0.0.1:8000")
      .then((response) => {
        this.posts = response.data;
        response = response.json;
        return response;
      })
      .catch((error) => console.log(error))
      .finally((this.isPostLoading = false));
    console.log(this.posts);
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
