<template>
  <div class="home flex space-between" id="home">

    <div class="float">
      <a class="link" target="_blank" href="https://github.com/Aeiddius"><Github /></a>
      <a class="link" target="_blank" href="https://www.linkedin.com/in/adrian-tagayom/"><Linkedin /></a>
    </div>
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
  .float {
    display: flex;
    gap: 10px;
    top: 100px;
    right: 0px;
    position: absolute;
    z-index: 1000;
    float: right;
  }

  .link {
    transform: scale(1);
    transition: all 0.4s ease;
    &:hover {
      transform: scale(1.4);
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .home {
    // padding: 0px 200px;
    position: relative;
    margin-top: -10vh;
    align-items: center;
    height: 100vh;
    margin-bottom: $gb-margin-bottom;
    max-width: 900px;
    display: flex;
    width: 100%;
    justify-content: space-between;
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