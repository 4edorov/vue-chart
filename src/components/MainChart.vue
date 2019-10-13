<template>
  <div>
    <organization :datasource="treeStuff" />
  </div>
</template>

<script>
import Organization from "./Organization";
import faker from "faker";

export default {
  name: "MainChart",
  components: {
    Organization
  },
  data() {
    return {
      initStuff: null,
      treeStuff: null,
    };
  },
  created() {
    this.generateStuff();
    this.generateTreeStuff();
  },
  methods: {
    generateTreeStuff() {
      const stuffIds = this.initStuff.reduce((acc, item) => {
        acc[item.id] = { ...item };
        return acc;
      }, {});

      const tree = this.initStuff.reduce((acc, item) => {
        const current = stuffIds[item.id];
        if(!current.chiefId) {
          acc.push(current);
        } else {
          stuffIds[item.chiefId].children || (stuffIds[item.chiefId].children = [])
          stuffIds[item.chiefId].children.push(current);
        }
        return acc;
      }, [])[0];
      this.treeStuff = tree;
      console.log('tree data', JSON.stringify(tree, null, " "));
      return tree;
    },

    generateStuff() {
      const TIERS_NUM = 7;
      const stuffSchema = this.generateStuffSchema(TIERS_NUM);
      const stuff = stuffSchema
        .map(tier => {
          return tier.ids.map(id => {
            return {
              id: id,
              image_url: faker.image.avatar(),
              name: faker.name.findName(),
              position: faker.name.jobTitle(),
              chiefId: tier.chiefId
            };
          });
        })
        .flat();
      this.initStuff = stuff;
      console.log('initial data', JSON.stringify(stuff, null, ' '))
      return stuff;
    },

    generateStuffSchema(tiersNum) {
      let empId = 1;
      let prevIds = [];

      const schema = [...Array(tiersNum)].map((item, tierNum) => {
        const ids = [...Array(tierNum + 1)].map(() => {
          const prevEmpId = empId;
          empId++;
          return prevEmpId;
        });
        const chiefId = this.getChiefId(prevIds);

        prevIds = ids;

        return {
          ids,
          chiefId
        };
      });

      return schema;
    },

    getChiefId(ids) {
      if (!ids.length) {
        return null;
      }

      const min = ids[0];
      const max = ids[ids.length - 1];

      if (max === min) {
        return max;
      }

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: column;
}
.row {
  display: flex;
  justify-content: center;
}
</style>
