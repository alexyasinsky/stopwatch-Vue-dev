<template>
  <div :class="getCounterClass">
    {{getTimeString}}
  </div>
</template>

<script setup>

  import {computed} from "vue";

  const props = defineProps({
    counter: Number,
    status: String
  })

  function stylingNumber(number) {
    return number < 10 ? '0' + number : number;
  }

  const getTimeString = computed(() => {
    let time = props.counter;
    const hours = Math.floor(time / 60 / 60);
    time = time - hours * 60 * 60;
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    let timeString = stylingNumber(seconds);
    if (minutes > 0 || hours > 0) timeString = `${stylingNumber(minutes)}:${timeString}`;
    if (hours > 0) timeString = `${hours}:${timeString}`;
    return timeString;
  })

  const getCounterClass = computed(() => {
    return `counter ${props.status}`;
  })

</script>

<style lang="scss" scoped>

  .counter {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid;
  }
</style>