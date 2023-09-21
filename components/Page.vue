<template>
  <div class="page flex column align-center" :id="id">

    <PageTitle v-if="name !== ''" :name="name" :subtitle="subtitle" class="title"/>

    <div class="content flex">

      <slot/>

    </div>
    
  </div>

</template>

<script lang="ts" setup>
  const props = defineProps({
    id: { type: String, required: true, },
    name: { type: String, required: true, },
    subtitle: { type: String, required: true, },
  })
  
</script>

<style lang='scss' scoped>
  .page {
    height: 100vh;
    width: 100%;
    scroll-margin-top: 4rem;
    margin-bottom: $gb-margin-bottom;
  }

  .title {
    margin-bottom: 60px;
  }

  .content {
    width: 100%;
    padding: 0px 200px;
  }


  @media only screen and (max-width: 1100px) {
    .content {
      padding: 0px 100px;
    }
  }

  @media only screen and (max-width: 940px) {
    .title {
      margin-bottom: 20px;
    }

  }

  @media only screen and (max-width: 940px) {

    .content {
      padding: 0px 50px;
    }
  }
</style>