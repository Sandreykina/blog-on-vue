<template>
  <div class="app">
    <h1>Основная страница</h1>
    <my-button @click="showPopup" >
      Добавить пост
    </my-button>
    
    <my-popup v-model:show="popupVisible">
      <post-form @add="addPost" />
    </my-popup>
    <post-list 
      v-bind:posts="posts" 
      @remove = "removePost"
    />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import MyPopup from "./components/UI/MyPopup.vue";
import MyButton from "./components/UI/MyButton.vue";

export default {
  components: {
    PostForm,
    PostList,
    MyPopup,
    MyButton
},
  data() {
    return {
      posts: [
        { id: 0, title: "Title 1", body: "Описание поста 1" },
        { id: 1, title: "Title 2", body: "Описание поста 2" },
      ],
      popupVisible: false
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.popupVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showPopup() {
      this.popupVisible = true;
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
