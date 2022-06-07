<template>
  <div>
    <h1>Пост c id={{ $route.params.id}} полностью</h1>
    <div>
    </div>
  </div>
</template>

<script>
import getApi from "@/axios-api";

export default {
  name: 'post-detail',
  data() {
    return {

    };
  },
  methods: {
    getPostById() {
      this.isPostLoading = true;
      
      getApi
        .get(`${this.$route.params.id}`)
        .then(() => {
          console.log("success")
          // this.post = response.data
        })
        .catch((error) => console.log(error))
        .finally((this.isPostLoading = false));
    }
  },
  mounted() {
    //this.getPostById()
  },
};
</script>

<style scoped></style>
