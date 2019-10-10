<template>
  <div>
    <div v-for="(row, index) in processedStuff" :key="index" class="main">
      <div v-for="worker in row" :key="worker.id" class="row">
        <Card :worker="worker" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import faker from "faker";

export default {
  name: "MainChart",
  components: {
    Card
  },
  data() {
    return {
      initStuff: null,
      processedStuff: null,
    };
  },
  created() {
    this.generateStuff();
    this.processStuff();
  },
  methods: {
    processStuff() {
      const stuff = [ ...this.initStuff ];
      const addedChiefIds = [];
      const result = [];
      stuff.map((item, index) => {
        const { chiefId } = item;
        const addedChiefIdIndex = addedChiefIds.indexOf(chiefId);
        if (addedChiefIdIndex === -1) {
          const idsLength = addedChiefIds.length;
          addedChiefIds[idsLength] = chiefId;
          result[idsLength] = [];
          result[idsLength].push(item);
        } else {
          result[addedChiefIdIndex].push(item);
        }
      })
      this.processedStuff = result;
      console.log('processed stuff', result);
      return result;
    },

    generateStuff() {
      const TIERS_NUM = 7;
      const stuffSchema = this.generateStuffSchema(TIERS_NUM);
      const stuff = stuffSchema
        .map(tier => {
          return tier.ids.map(id => {
            return {
              id: id,
              imageUrl: faker.image.avatar(),
              name: faker.name.findName(),
              position: faker.name.jobTitle(),
              chiefId: tier.chiefId
            };
          });
        })
        .flat();
      this.initStuff = stuff;
      console.log('stuff', stuff)
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