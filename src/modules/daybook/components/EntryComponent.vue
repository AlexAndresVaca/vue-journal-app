<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
    class="entry-container mb-3 pointer p-2"
  >
    <!-- Titulo -->
    <div class="entry-title d-flex justify-content-between">
      <div>
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
      </div>
      <span class="mx-2 fw-light">2022, jueves</span>
    </div>
    <!--  -->
    <div class="entry-description">
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, eius
        officiis fugit placeat quia delectus. Ea earum hic obcaecati maxime,
        esse neque harum dicta porro, sit corporis quae architecto ut.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: gray, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
    text-align: justify;
  }
}
</style>