<template>
  <button :class="['button', type]"
          @click="clickHandle">
    <slot />
  </button>
</template>

<script lang="ts" setup>
  const props = defineProps({
    type: {
      type: String,
      required: false,
      default: ""
    },
    targetId: {
      type: String, 
      required: false,
      default: ""
    }
  })

  const clickHandle = () => {
    if (props.targetId !== '') {
      const id = document.getElementById(props.targetId) as HTMLDivElement
      if (!id) return
      id.scrollIntoView({
        behavior: 'smooth'
      });
    }

  }
  
</script>

<style lang='scss' scoped>
  .button {
    user-select: none;
    background-color: transparent;
    color: rgba($white, 0.8);
    border: none;
    font-size: 16px;
    font-family: Maven Regular;
    padding: 10px;
    
    transition: all 0.2s ease;
    cursor: pointer;
    transform: scale(1);
    &:hover {
      background-color: $primary;
      color: $white;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .clean {
    padding: 5px;
    font-size: 18px;
  }


  .submit {
    background-color: $primary;
    font-family: Maven Semi Bold;
    border-radius: 5px;
    width: 100px;

    &:hover {
      background-color: lighten($primary, 5%);
      color: $white;
    }
    &:active {
      transform: scale(0.9);
      background-color: $primary;
    }
  }
</style>