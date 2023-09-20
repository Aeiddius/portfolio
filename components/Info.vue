<template>
  <div class="info">
    <slot/>
    <span class="flex column gap-10">
      <span class="info--title">{{ title }}</span>
      <span class="info--content">{{ content }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
    title: { type: String, required: true, default: "" },
    content: { type: String, required: true, default: "" },
  })
  
</script>

<style lang='scss' scoped>
  .info {
    display: flex;
    align-items: center;
    gap: 10px;

    .info--title {
      font-family: Maven Semi Bold;
    }

    .info--content {
      color: rgba($white, 0.6)
    }
  }
</style>