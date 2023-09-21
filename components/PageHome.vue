<template>
  <div class="home flex space-between" id="home">
    <Portrait img="/me1.png" class="mt-4  0"/>

    <div class="title">
      <h1>Hi, I'am <span class="red">Ad</span>rian</h1>
      <h2>Web Weveloper</h2>

      <div class="buttons">
        <Button type="clean" @click="downloadCv">Download CV</Button>
        <Button type="clean" target-id="contact">Contact Me</Button>
      </div>
    </div>

  </div>



</template>

<script setup>

  const downloadCv = async () => {
     const url = 'https://github.com/Aeiddius/portfolio/blob/main/public/CV%20-%20TAGAYOM.pdf?raw=true'
     window.open(url, '_blank');

  }

</script>

<style lang='scss' scoped>

  .home {
    padding: 0px 200px;
    margin-top: -10vh;
    align-items: center;
    height: 100vh;
    margin-bottom: $gb-margin-bottom;
    
    .title {
      user-select: none;
      margin-top: 120px;
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
    margin-bottom: 15px;
    font-size: 64px;
    font-family: Maven Semi Bold;
  }

  h2 {
    margin: 0px;
    width: fit-content;
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: $primary;
  }

  .red { 
    color: $primary
  }


  @media only screen and (max-width: 1100px) {
    .home {
      padding: 100px;
      .title {
        margin-right: 0px;
      }
    }
  }

  @media only screen and (max-width: 940px) {
    .home {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      padding: 100px;
      // margin-top: 0px;

      .title {
        margin-top: 50px;
      }
    }
  }
  
  @media only screen and (max-width: 700px) {
    .home {
      padding: 0px 50px;
      padding-top: 140px;
      .title {
        align-items: center;
        h1 {
          font-size: 54px;
        }
        h2 {
          font-size: 20px;
          padding: 5px;
        }
      }
    }
  }


  @media only screen and (max-width: 500px) {
    .home {
      padding: 0px 10px;
      padding-top: 140px;
      .title {
        h1 {
          font-size: 45px;
        }
        h2 {
          font-size: 16px;
          padding: 5px;
        }
      }
    }

  }
</style>