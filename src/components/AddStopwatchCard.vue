<template>
  <div class="stopwatch-add">
    <control-button
      icon="plus"
      :handler="handler"
      status="inactive"
    />
  </div>

</template>

<script setup>
  import ControlButton from "./ControlButton.vue";
  const props = defineProps({
    handler: Function
  })
</script>

<style lang="scss" scoped>
  .stopwatch-add {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 120px;
  }
</style>