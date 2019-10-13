<template>
  <div class="card">
    <div v-for="(value, key) in worker" :key="key">
      <img v-if="key === 'image_url'" :src="value" class="avatar" />
      <div v-else-if="isShowValue(key)" class="title">{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    worker: Object,
    name: String,
    image_url: String,
    position: String
  },
  methods: {
    isShowValue(key) {
      let result = false;
      switch (key) {
        case "name":
        case "position":
          result = true;
          break;
      }
      return result;
    }
  }
};
</script>

<style scoped>
.card {
  height: 150px;
  width: 170px;
  background-color: bisque;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
}
.avatar {
  max-width: 40px;
  max-height: 40px;
  border-radius: 50%;
}
.title {
  font-size: 9px;
}
</style>
