<template>
  <div class="home flex space-between" id="home">
    <Portrait img="/me1.png" />

    <div class="title">
      <h1>Hi, I'am <span class="red">Ad</span>rian</h1>
      <h2>Web Weveloper</h2>

      <div class="buttons">
        <Button type="clean" @click="downloadCv ">Download CV</Button>
        <Button type="clean">Contact Me</Button>
      </div>
    </div>

  </div>



</template>

<script setup>

  const downloadCv = async () => {
     
  }

</script>

<style lang='scss' scoped>

  .home {
    padding-right: 20vh;
    padding-left: 20vh;
    margin-top: -5vh;
    align-items: center;
    height: 100vh;
    margin-bottom: $gb-margin-bottom;
    
    .title {
      user-select: none;
      margin-right: 50px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .buttons {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
      }
    }
  }

  h1 {
    margin: 0px;
    margin-bottom: 20px;
    font-size: 64px;
    font-family: Maven Semi Bold;
  }

  h2 {
    margin: 0px;
    width: fit-content;
    font-size: 24px;
    padding: 10px;
    border-radius: 5px;
    background-color: $primary;
  }

  .red { 
    color: $primary
  }
</style>