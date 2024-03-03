<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>posts</h2>
    <p>
      Search here:
      <input type="text" v-model="search" placeholder="search title" />
    </p>
    <div v-for="post in searchItem" :key="post.id">
      <h4>{{ post.title }}</h4>
      <p>{{ $filters.snippet(post.body) }}</p>
    </div>
    <hr />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AXIOS",
  data() {
    return {
      title: "Axios request",
      posts: [],
      search: "",
    };
  },
  computed: {
    searchItem: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
  methods: {},
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
