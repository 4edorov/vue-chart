<template>
  <div>
    <div style="position: absolute'">
      <card :worker="tree" />
    </div>
    <div v-if="tree.children && tree.children.length" class="child">
      <node-tree v-for="child in tree.children" :tree="child" :key="child.id" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "NodeTree",
  components: {
    Card
  },
  props: {
    tree: Object
  }
}
</script>

<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.children {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.child {
  display: flex;
}
</style>
