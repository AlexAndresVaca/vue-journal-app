<template>
  <div class="d-flex justify-content-center">
    <article class="align-self-center text-center">
      <i class="text-empty fas fa-file-alt fa-3x"></i>
      <h1 class="text-empty">No hay nada seleccionado...</h1>
    </article>
  </div>
  <FabComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    FabComponent: defineAsyncComponent(() =>
      import("../components/FabComponent.vue")
    ),
  },
};
</script>

<style lang="scss" scoped>
div {
  height: 100%;
}
.text-empty {
  color: gray;
}
</style>