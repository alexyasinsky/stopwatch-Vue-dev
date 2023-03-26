<template>
  <button @click="handler" :class="getButtonClass">
    <font-awesome-icon :icon="getButtonIcon"/>
  </button>
</template>

<script setup>
  import {computed} from "vue";

  const props = defineProps({
    icon: String,
    handler: Function,
    status: String
  })
  const getButtonIcon = computed(() => {
    const buttonIcon = ['fas'];
    buttonIcon.push(props.icon);
    return buttonIcon;
  })

  const getButtonClass = computed(() => {
    return `${props.status}`;
  })

</script>

