<template>
  <div class="controls">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .controls {
    padding-left: 70px;
    padding-right: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
</style>