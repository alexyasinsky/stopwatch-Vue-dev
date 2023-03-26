<template>
  <div class="wrapper">
    <main>
      <card-wrapper v-for="item in stopwatches">
        <stopwatch-card/>
      </card-wrapper>
      <card-wrapper>
        <add-stopwatch-card :handler="addNewStopwatch"/>
      </card-wrapper>
    </main>
  </div>
  
</template>

<script setup>
import StopwatchCard from "./components/StopwatchCard.vue";
import CardWrapper from "./components/CardWrapper.vue";
import AddStopwatchCard from "./components/AddStopwatchCard.vue";
import {ref} from "vue";

const stopwatches = ref(1);

function addNewStopwatch() {
  stopwatches.value++;
}
</script>

<style lang="scss" scoped>

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 320px;
    padding-top: 72px;
    height: 100vh;
  }

  main {
    display: flex;
    flex-wrap: wrap;
    margin-left: -25px;
    margin-right: -25px;
  }

  @media (max-width: 767px) {
    .wrapper {
      padding-left: 48px;
      padding-right: 48px;
    }
    main {
      display: block;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .wrapper {
      padding-left: 134px;
      padding-right: 134px;
    }
  }

  @media (min-width: 1024px) {
    .wrapper {
      padding-left: 212px;
      padding-right: 212px;
    }
  }
</style>
