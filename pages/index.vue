<template>
  <div class="body" id="home">
    <Header/>
    <PageHome />
    <div id="pagecontent">
      <Sidebar />

      
      <PageAbout class="hover"/>
      <PageSkill  class="hover"/>
      <PageProject class="hover" />
      <PageContact  class="hover"/>
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

  .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #pagecontent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .hover {
      
    }
    &:hover {
      .sidebar {
        right: 50px;
      }
    }
  }
</style>