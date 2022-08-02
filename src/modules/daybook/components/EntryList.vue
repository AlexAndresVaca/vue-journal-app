<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2 mb-2">
      <input type="text" class="form-control" placeholder="Buscar entrada" />
    </div>
    <div class="entry-scrollarea">
      <EntryComponent v-for="item in 100" :key="item">Entry</EntryComponent>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    "EntryComponent": defineAsyncComponent(() =>
      import("@/modules/daybook/components/EntryComponent")
    ),
  },
};
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 60px);
}
.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow-y: scroll;
}
</style>