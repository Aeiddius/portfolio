<template>
  <Page name="About" subtitle="My Introduction" id="about">

    <Portrait img="/me2.png" />

    <div class="text">
      <p>I have 4 years of experience as a programmer and 2 years of experience as a freelance web developer. I possess
      deep understanding of various technologies such as HTML, CSS, JavaScript, Typescript, JQuery, Vue.js, Nuxt3,
      React, and Node.js.</p>
      <br>

      <p>I'm committed to staying updated on the latest web development trends and continuously
      enhancing my skills. I have a strong attention to detail, a great sense of design, and a dedicated attitude to
      pursue excellence in all my projects.</p>
    </div>

  </Page>
</template>


<style lang='scss'>

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .text {
    width: 320px;
    margin-top: 50px;
    text-indent: 30px;
    margin-right: 100px;
    // margin: 40px 0px 0px px;
    p {
      overflow: hidden;
      color: rgba(255, 255, 255, 0.80);
      text-align: justify;
      text-overflow: ellipsis;
      font-family: Maven Regular;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      line-height: 25px;
    }
  }

  @media only screen and (max-width: 940px) {
    .content {
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .text {
        margin-right: 0px;
        width: 70vw;
      }
    }
  }
</style>