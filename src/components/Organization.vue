<template>
  <div>
    <Vue2OrgTree
      class="tree"
      :data="datasource"
      :renderContent="renderContent"
      :props="props"
      :labelWidth="labelWidth"
      @on-node-click="clickNode"
    />
  </div>
</template>

<script>
import Card from "./Card";

export default {
  name: "Organization",
  data() {
    return {
      props: {
        worker: "worker",
        expand: "expand",
        children: "children"
      },
      labelWidth: 260
    };
  },
  props: {
    datasource: Object
  },
  methods: {
    renderContent(f, context) {
      const worker = { ...context };
      return f(Card, { props: { worker } });
    },
    clickNode(e, data) {
      console.log("e", e, "data", data);
    }
  }
};
</script>

<style scoped>
.tree {
  transform: scale(0.3);
  border: 3px dotted black;
}
</style>
