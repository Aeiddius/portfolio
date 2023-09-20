<template>
  <div class="header flex align-center space-between user-select-none">

    <div class="flex align-center gap-10">
      <Logo/>
      <span class="page-title f-20">Adrian Tagayom</span>
    </div>
    <div class="menu flex f-20">
      <Button>Home</Button>
      <Button targetId="about">About</Button>
      <Button targetId="skills">Skills</Button>
      <Button targetId="project">Projects</Button>
      <Button targetId="contact">Contact Me</Button>
    </div>  
  </div>
</template>

<script lang="ts" setup>
  
  
</script>

<style lang='scss' scoped>
  .header {
    padding: 0px 40px;
    padding-right: 100px;
    width: 100%;
    border-bottom: 1px solid rgba($white, 0.2);

    button {
      padding: 15px;
    }
  }

  .page-title {
    font-family: Maven Semi Bold;
  }
</style>