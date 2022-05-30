<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-bind:value="post.body"
        @input="post.body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" @click="addPost">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {},
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
.btn {
  margin-top: 10px;
  align-self: end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 2px solid teal;
}
.app {
  padding: 20px;
}

.input {
  width: 100%;
  border: 2px solid teal;
  padding: 10px, 15px;
  margin-top: 10px;
}
</style>
