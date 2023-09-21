<template>
  <div class="body" id="home">
    <Header/>
    <PageHome />
    <div id="pagecontent">
      <Sidebar />

      
      <PageAbout/>
      <PageSkill />
      <PageProject />
      <PageContact />
    </div>
    

  </div>
</template>

<script lang="ts" setup>
  
</script>

<style lang='scss'>
  .separator {
    // margin: 20vh 0px;
    height: 40vh;
  }

  #pagecontent {
    &:hover {
      .sidebar {
        right: 50px;
      }
    }
  }
</style>