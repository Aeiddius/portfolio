<template>
  
  <div class="img-box">
    <div class="box"></div>
    <!-- <div class="box box-2"></div> -->
    <NuxtImg :src="img" class="img"/>
    
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    img: {
      type: String,
      required: true,
    }
  })

  watch(()=> {return props.img}, (value) => {

    console.log(value)
  })
  
</script>

<style lang='scss' scoped>

  $width: 350px;

  .img-box {
    width: $width;
    cursor: pointer;
    transform: scale(1);
    transition: all 0.3s linear;
    box-sizing: border-box;
    flex-shrink: 0;
    user-select: none;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .img {
    width: $width;
    height: auto;
    flex-shrink: 0;
    bottom: 0px;
    position: absolute;
    // left: 10px;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    bottom: 0px;
    width: 357px;
    height: 249px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FF5F55;
    box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.20);
    transition: all 0.5s ease-in-out;
    z-index: -1;
  }

  .box-2 {
    width: 158px;
    height: 397px;
  }


  @media only screen and (max-width: 1100px) {
    .img {
      width: auto;
      height: 310px;

    } 

    
    .box {
      width: 293px;
      height: 200px;
    }
    .box-2 {
      width: 126px;
      height: 317px;
    }

  }


  @media only screen and (max-width: 940px) {
    .img-box {
      height: 320px;
    }

  }
</style>