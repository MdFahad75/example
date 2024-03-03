<template lang="plug">
  <div>
    <h1>Online friends</h1>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online">{{ friend.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriend",
  props: ["friends"],
  data() {
    return {};
  },
};
</script>
