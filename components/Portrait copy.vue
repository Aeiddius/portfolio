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
  .img-box {
    cursor: pointer;
    transform: scale(1);
    transition: all 0.3s linear;
    box-sizing: border-box;
    flex-shrink: 0;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
  .img {
    width: auto;
    height: 360px;
    flex-shrink: 0;
    // position: absolute;
    // bottom: 0px;
    // left: 15px;
    transition: all 0.5s ease-in-out;
  }

  .box {
    position: absolute;
    bottom: 5px;
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
      left: 5px;
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


  @media only screen and (max-width: 800px) {


  }
</style>