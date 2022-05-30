<template>
  <div class="app">
    <post-form />
    <post-list v-bind:posts="posts"/>
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue';
import PostList from './components/PostList.vue';

export default {
    components: {
        PostForm, PostList
    },
  data() {
    return {
      posts: [
        { id: 0, title: "Title 1", body: "Описание поста 1" },
        { id: 1, title: "Title 2", body: "Описание поста 2" },
      ],
      title: '',
      body: '',
    };
  },
  methods: {
    addPost() {
        const newPost = {
            id: Date.now(),
            title: this.title,
            body: this.body
        }
        this.posts.push(newPost);
        this.title = '';
        this.body = '';
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
.app {
  padding: 20px;
}
</style>
