<template>
  <div>
    <my-button @click="$router.back">Назад</my-button>

    <my-button @click="showPopup"> 
      Отредактировать пост
    </my-button>
    <my-popup v-model:show="popupVisible">
      <post-form @edit="editPost"><h2>Изменение поста</h2></post-form>
    </my-popup>

    <my-button @click="removePost">
      Удалить
    </my-button>
    <div>
      <h1>{{post.title}}</h1>
      <div> {{post.text}} </div>
      <div> {{post.created_date}} </div>
      <div> {{post.published_date}} </div>
    </div>
  </div>
</template>
<!-- @click="$emit('remove', post)" -->
<script>
import getApi from "@/axios-api";

export default {
  name: 'post-detail',
  data() {
    return {
      popupVisible: false,
      post: {}
    };
  },
  methods: {
    getPostById() {
      this.isPostLoading = true;
      getApi
        .get(`?id=${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data)
          this.post = response.data
        })
        .catch((error) => console.log(error))
        .finally((this.isPostLoading = false));
    },

    editPost(post) {
      getApi
        .put(`?id=${this.$route.params.id}`, {
          title: post.title,
          text: post.text,
          author: 1,
          created_date: "",
          published_date: "",
        })
        .then((response) => {
          this.post = response.data;
          this.refreshPostsData();
        })
        .catch((error) => console.log(error));
      this.popupVisible = false;
    },

    removePost() {
      // this.posts = this.posts.filter((p) => p.id !== post.id);
      getApi
        .delete(`?id=${this.$route.params.id}`)
        .then(() => {
          console.log("successful delete");
        })
        .catch((error) => console.log(error));
    },

    showPopup() {
      this.popupVisible = true;
    }
  },
  
  mounted() {
    this.getPostById();
  },
};
</script>

<style scoped></style>
