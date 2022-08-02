<template>
  <!-- Title -->
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-1 fw-bold">15</span>
      <span class="mx-1 fs-1">Julio</span>
    </div>
    <span class="mx-2 fs-3 fw-light">2022, jueves</span>
  </div>
  <!-- Description -->
  <div class="p-2 h-75">
    <textarea class="w-100 mb-4" placeholder="¿Qué sucedió hoy?"></textarea>
    <!-- Buttons -->
    <div class="">
      <button class="btn btn-danger mx-2">
        <i class="fa fa-trash"></i> Eliminar
      </button>
      <button class="btn btn-primary">
        <i class="fa fa-upload"></i> Subir imagen
      </button>
    </div>
  </div>
  <hr />
  <FabComponent icon="fa-save" typeButton="btn-secondary"></FabComponent>
  <img
    class="img-thumbnail"
    src="https://cdn.pixabay.com/photo/2014/08/24/16/42/wine-426463_960_720.jpg"
    alt=""
  />
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
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>