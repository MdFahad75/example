<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <NAVBAR></NAVBAR>
    <AllFriends :friends="friends" @delete="unfriend"></AllFriends>
    <OnlineFriends :friends="friends"></OnlineFriends>
    <axios></axios>
  </div>
</template>

<script>
import NAVBAR from "./components/Navbar.vue";
import AllFriends from "./components/AllFriends.vue";
import OnlineFriends from "./components/OnlineFriend.vue";
import Axios from "./components/Axios.vue";

export default {
  name: "APP",
  data() {
    return {
      title: "Welcome to vue app",
      friends: [
        { name: "A", online: true },
        { name: "B", online: false },
        { name: "C", online: true },
        { name: "D", online: false },
        { name: "E", online: true },
      ],
    };
  },
  methods: {
    unfriend(payload) {
      this.friends = this.friends.filter((friend) => {
        return friend.name !== payload.name;
      });
    },
  },
  components: {
    NAVBAR,
    AllFriends,
    OnlineFriends,
    Axios,
  },
};
</script>

<style>
h1 {
  color: red;
  text-align: center;
}
</style>
