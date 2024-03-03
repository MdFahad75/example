<template>
  <div id="all-friends">
    <h1>All friends list</h1>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{ friend.name }} <button @click="unfriend(friend.name)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      // $emit for sending request from child component to parent component
      this.$emit("delete", { name });
    },
  },
};
</script>

<style scoped></style>
