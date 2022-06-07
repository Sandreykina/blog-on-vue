<template>
  <div>
    <my-button @click="$router.back">Назад</my-button>
    <h1>{{post.title}}</h1>
    <div> {{post.text}} </div>
    <div> {{post.created_date}} </div>
    <div> {{post.published_date}} </div>
  </div>
</template>

<script>
// import getApi from "@/axios-api";
import axios from 'axios';
export default {
  name: 'post-detail',
  data() {
    return {
      post: {}
    };
  },
  methods: {
    getPostById() {
      this.isPostLoading = true;
      
      axios
        .get(`http://127.0.0.1:8000/?id=${this.$route.params.id}`)
        .then((response) => {
          console.log(response.data)
          this.post = response.data
        })
        .catch((error) => console.log(error))
        .finally((this.isPostLoading = false));
    }
  },
  mounted() {
    this.getPostById();
  },
};
</script>

<style scoped></style>
