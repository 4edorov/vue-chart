<template>
  <div>
    <Vue2OrgTree :data="datasource" :renderContent="renderContent" :props="props" :labelWidth="labelWidth" @on-node-click="clickNode" />
  </div>
</template>

<script>
  import Card from "./Card";

  export default {
    name: "Organization",
    components: {
      Card
    },
    data() {
      return {
        props: {
          worker: 'worker',
          expand: 'expand',
          children: 'children'
        },
        labelWidth: 180
      }
    },
    props: {
      datasource: Object
    },
    methods: {
      renderContent(f, context) {
        const worker = { ...context }
        return f(Card, { props: { worker } })
      },
      clickNode(e, data) {
        console.log('data')
      }
    }
  }
</script>
