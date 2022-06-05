<template>
  <div class="app">
    <h1>Основная страница</h1>
    <div class = "app__btns">
      <my-button @click="showPopup"> Добавить пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-popup v-model:show="popupVisible">
      <post-form @add="addPost" />
    </my-popup>
    <post-list
      :posts="posts"
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
import MySelect from "./components/UI/MySelect.vue";
import axios from 'axios';

export default {
  components: {
    PostForm,
    PostList,
    MyPopup,
    MyButton,
    MySelect
},
  data() {
    return {
      popupVisible: false,
      posts: [],
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'text', name: 'По описанию'}
      ]
    };
  },
  methods: {
    refreshPostData(){
      this.isPostLoading = true;
      axios.get('http://127.0.0.1:8000')
        .then((response) => {
          this.posts = response.data;
          return response;
        })
        .catch((error) => console.log(error))
        .finally((this.isPostLoading = false));
      console.log(this.selectedSort);
    },

    addPost(post) {
      console.log(post)
      axios.post('http://127.0.0.1:8000', {
        title: post.title,
        text: post.text,
        author: 1,
        created_date: 0,
        published_date: 0,
      })
      .then((response) => {
        console.log("happy")
        this.posts.push(response.data);
        this.refreshPostData();
      })
      .catch((error) => console.log(error));
      this.popupVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showPopup() {
      this.popupVisible = true;
    },
  },
  mounted() {
    this.refreshPostData();
  },
  computed: { //разворачиваем исх массив и сортируем его, чтобы не менять исх
    // sortedPosts() {
    //   return [...this.posts].sort((post1, post2) => {
    //     return post1[this.selectedSort]?.localCompare(post2[this.selectedSort])
    //   })
    // }
  },
}
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
.app__btns {
  display: flex;
  justify-self: space-between;
  margin: 10px;
}
</style>
