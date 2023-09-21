<template>
  <div class="sidebar" id="sidebar">
    <div class="buttons" >
      <Button type="clean" targetId="home">Home</Button>
      <Button type="clean" targetId="about">About</Button>
      <Button type="clean" targetId="skills">Skills</Button>
      <Button type="clean" targetId="project">Projects</Button>
      <Button type="clean" targetId="contact">Contact Me</Button>
      
    </div>
  </div>
</template>

<script lang="ts" setup>

  
</script>

<style lang='scss' scoped>
  .sidebar {
    position: fixed;
    // display: none;
    top: 20vh;
    right: -10500px;
    height: 500px;
    widows: 100px;
    border-right: 1px solid $primary;
    transition: all 0.5s ease;
    opacity: 0.4;
    z-index: 20;
    &:hover {
      opacity: 1;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    opacity: 1;
    transition: all 0.3s ease;
    gap: 5px;
    padding-right: 30px;
    button {
      text-align: right;
      font-family: Maven Regular;
      font-size: 16px;

    }
    
  }

  @media only screen and (max-width: 500px) {
    .sidebar {
      display: none;
    }

  }

</style>