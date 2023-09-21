<template>
  <div class="img-holder" @mouseover="reveal" @mouseleave="unreveal">
    <div class="description hide-desc" id="info-box">
      <Left class="arrow" @click="()=> move('left')"/>
      <div class="content">
        <span class="title">{{ gallery[pos].name }}</span>
        <span class="text">{{ gallery[pos].desc }}</span>
      </div>
      <Right class="arrow" @click="()=> move('right')"/>
    </div>
    <NuxtImg :src="gallery[pos].image" class="img"/>
  </div>
</template>

<script lang="ts" setup>
import { Gallery } from '#build/components';

  type Gallery = {
    name: string,
    image: string,
    desc: string,
  }
  const props = defineProps({
    gallery: {
      type: Array<Gallery>,
      required: true,
    }
  })

  const pos = ref(0)
  const selected = ref({} as Gallery)

  watch(()=> {return props.gallery}, (value) => {

    selected.value = props.gallery[pos.value]
    console.log(selected.value)
  }) 


  const move = (dir: string) => {
    const max = props.gallery.length - 1
    if (dir === 'right') {
      if (pos.value == max) {
        pos.value = 0;
      } else {
        pos.value += 1;
      }
    } else if (dir === 'left') {
      if (pos.value == 0) {
        pos.value = max
      } else {
        pos.value -= 1;
      }
    }
  }

  const reveal = () => {
    document.getElementById("info-box")?.classList.remove('hide-desc')
  }
  const unreveal = () => {
    document.getElementById("info-box")?.classList.add('hide-desc')
  }
</script>

<style lang='scss'>

  .img-holder {
    position: relative;
    user-select: none;
    width: 800px;
    height: 450px;
    .description {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba($dark, 0.7);
       
      display: flex;

      justify-content: space-between;
      align-items: center;
      text-align: left;
      transition: all 0.5s ease;
      opacity: 1;
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
    height: 100%;
      width: 100%;
    object-fit: cover;
    border-radius: 10px;
    user-select: none;
  }

  .hide-desc {
    opacity: 0 !important;
  }

  @media only screen and (max-width: 940px) {
    
    .img-holder {
      width: 80vw;
      height: 40vw;

      .description {
        .title {
          font-size: 45px;
        }
        .text {
          width: 70%;
          margin-top: 0px;
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .img-holder {
      width: 100vw;
      height: 50vw;

      .description {
        .title {
          font-size: 30px;
        }
        .img {
          border-radius: 5px;
        }
      }
    }
  }


  @media only screen and (max-width: 500px) {

    .img-holder {
      .description {
        .title {
          font-size: 25px;
        }
        .text {
          // font-size: 12px;
          width: 100%;
        }
        .arrow {
          svg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }
  }
</style>