<template>
  <div class="body" id="home">
    <Header/>
    
    <div id="pagecontent">
      <Sidebar />

      <PageHome />
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      .sidebar {
        right: 50px;
      }
    }
  }
</style>