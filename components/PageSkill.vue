<template>
  <Page name="Skills" subtitle="My tech Stack" id="skills">

    <div class="flex wrap gap-20">

      <Skill name="Languages">
        <Javascript/>
        <Typescript />
        <Python />
        <Csharp />
        <Cpp />
      </Skill>

      <Skill name="Frameworks">
        <Vue />
        <React />
        <JQuery />
      </Skill>

      <Skill name="SSR">
        <Nuxt3/>
      </Skill>

      <Skill name="Markup & Styling">
        <Html5/>
        <CSS />
        <Sass />
        <Less />
        <Boostrap />
      </Skill>

      <Skill name="Database">
        <MySQL/>
        <MongoDB/>
      </Skill>

      <Skill name="Backend">
        <Node/>
        <Express/>
      </Skill>



      <Skill name="Others">
        <Git/>
        <Electron/>
      </Skill>      

      <Skill name="Design">
        <Figma/>
        <Photoshop/>
      </Skill>   
    </div>

  </Page>
</template>

<style lang="scss">
  $skill-size: 45px;
  @media only screen and (max-width: 1100px) {
    .skill-logo {
      svg {
        height: $skill-size;
        width: $skill-size;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    $skill-size: 30px;
    .skill-logo {
      svg {
        height: $skill-size !important;
        width: $skill-size !important;
      }
      span {
        font-size: 14px;
      }
    }
    .skill-content {
      padding: 5px 10px;
    }
    
  }  


</style>
