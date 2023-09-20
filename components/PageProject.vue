<template>
  <Page name="Projects" subtitle="My UI/UX Designs" id="project">
    

    <div class="flex align-center w-100">
      <div class="img-holder">
        <div class="description">

          <Left class="arrow"/>

          <div class="content">
            <span class="title">Chad</span>
            <span class="text">A meme blog website which shows funny philosophy short essays written by gigachad bro.</span>
          </div>
          
          
          <Right class="arrow"/>


        </div>
        <NuxtImg src="/projects/chad-1.svg" class="img"/>
      </div>
    </div>

  </Page>
</template>

<script lang="ts" setup>


</script>

<style lang='scss' scoped>

  .img-holder {
    position: relative;
    user-select: none;

    .description {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba($dark, 0.7);
       
      display: flex;

      justify-content: center;
      align-items: center;
      text-align: left;
      .content {
        display: flex;
        flex-direction: column;
      }
      .title {
        font-family: Maven Bold;
        font-size: 64px;
        margin-bottom: 10px;
      }
    }
  }

  .img {
    width: auto;
    height: 500px;
    border-radius: 20px;
    @include shadow;
    user-select: none;
  }




</style>