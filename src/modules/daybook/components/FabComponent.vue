<template>
  <button class="fab btn" :class="typeButton">
    <i class="fa" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "fa-plus",
    },
    typeButton: {
      type: String,
      default: "btn-primary",
    },
  },
};
</script>

<style lang="scss" scoped>
.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  font-size: 25px;
}
</style>