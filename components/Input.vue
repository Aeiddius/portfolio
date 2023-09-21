<template>
  <div class="input">
    <label>{{ name }}</label>
    <template v-if="type=='input'">
      <input type="text" :placeholder="placeholder">
    </template>
    <template v-else>
      <textarea type="text" :placeholder="placeholder"></textarea>
    </template>
    

  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    type: { type: String, required: false, default: 'input' },
  })
  
</script>

<style lang='scss' scoped>
  .input {
    font-family: Maven Regular;
    display: flex;
    flex-direction: column;
    gap: 16px;
    label {
      user-select: none;
    }
    input, textarea {
      font-family: Maven Regular;
      padding: 10px;
      color: $white;
      border: 0px;
      border-radius: 10px;
      background: #2D2D2D;
      @include shadow;
      &:focus {
        outline: 2px solid $primary;
      }
      
    }
    textarea {
      resize: vertical;
      min-height: 200px;
      overflow: auto;
      max-height: 400px;

      &::-webkit-scrollbar {
        width: 0.5em;
      }
       
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
       
      &::-webkit-scrollbar-thumb {
        background-color: $primary;
        outline: 1px solid slategrey;
      }
    }
  }

  
  @media only screen and (max-width: 940px) {
    .input {
      input, textarea {
        padding: 20px;
      }
    }
  }
</style>