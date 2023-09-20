<template>
  <div class="title">
    <h1 class="page-title">{{ name }}</h1>
    <h2 class="sub-title">{{ subtitle }}</h2>
  </div>
</template>

<script lang="ts" setup>
  
  const props = defineProps({
    name: {
      type: String,
      required: false,
      default: "test"
    },
    subtitle: {
      type: String,
      required: false,
      default: ""
    },
  })
  
</script>

<style lang='scss' scoped>
  .title {
    display: flex;
    flex-direction: column;
    text-align: center;
    .page-title {
      font-size: 48px;
      font-family: Maven Semi Bold;
    }

    .sub-title {
      color: $primary;
      font-size: 16px;
      font-family: Maven Semi Bold;
      margin-top: 10px;
    }
  }
</style>