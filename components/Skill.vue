<template>
  <div class="skill-box">
    <span class="skill-type">{{ name }}</span>
    <div class="skill-content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      required: false,
      default: ""
    }
  })
  
</script>

<style lang='scss' scoped>
  .skill-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .skill-type {
    font-size: 24px;
    font-family: Maven Medium;
    margin-bottom: 10px;
  }

  .skill-content {
    display: flex;
    gap: 20px;
    background-color: $grey;
    @include shadow;
    border-radius: 10px;
    padding: 15px 20px;
  }
}

</style>