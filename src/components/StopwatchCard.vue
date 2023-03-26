<template>
  <counter-block
      :counter="counter"
      :status="counterStatus"
  />
  <controls-block>
    <control-button
      :icon="getControlButtonIcon"
      :handler="getControlButtonHandler"
      :status="counterStatus"
    />
    <control-button
      icon="stop"
      :handler="stopCounter"
      :status="counterStatus"
    />
  </controls-block>
</template>

<script setup>

  import CounterBlock from "./CounterBlock.vue";
  import ControlButton from "./ControlButton.vue";
  import ControlsBlock from "./ControlsBlock.vue";
  import {computed, ref} from "vue";

  const counter = ref(0);
  const counterStatus= ref('inactive');
  const counterId = ref(0);

  function playCounter() {
    counterStatus.value = 'active';
    counterId.value = setInterval(()=>{
      return counter.value++;
    }, 1000)
  }

  function pauseCounter() {
    counterStatus.value = 'inactive';
    clearInterval(counterId.value);
  }

  function stopCounter() {
    counterStatus.value = 'inactive';
    clearInterval(counterId.value);
    counter.value = 0;
  }

  const getControlButtonIcon = computed(() => {
    return counterStatus.value === 'active' ? 'pause' : 'play';
  })

  const getControlButtonHandler = computed(() => {
    return counterStatus.value === 'active' ? pauseCounter : playCounter;
  })

</script>

<style lang="scss" scoped>

</style>