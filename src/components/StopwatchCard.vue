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
  const step = 1000;
  let counterWebWorker;

  function playCounter() {
    counterStatus.value = 'active';
    counterWebWorker = new Worker('src/services/counter-web-worker.js');
    counterWebWorker.postMessage({
      counter: counter.value,
      step: step
    });
    counterWebWorker.onmessage = e => counter.value = e.data;
  }

  function pauseCounter() {
    counterStatus.value = 'inactive';
    counterWebWorker.terminate();
    counterWebWorker = undefined;
  }

  function stopCounter() {
    counterStatus.value = 'inactive';
    counterWebWorker.terminate();
    counterWebWorker = undefined;
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