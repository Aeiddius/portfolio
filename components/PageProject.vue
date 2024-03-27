<template>
  <Page name="Projects" subtitle="My UI/UX Designs" id="project">
    

    <div class="gallery flex align-center">
      <Gallery :gallery="gallery"/>
    </div>

  </Page>
</template>

<script lang="ts" setup>
  type Gallery = {
    name: string,
    image: string,
    desc: string,
  }

  const gallery: Array<Gallery> = [
    {
      name: "Project ME",
      image: "/projects/ME Reviewer.svg",
      desc: "A website dedicated to helping Fresh Mechanical Engrs Learn."
    },
    {
      name: "Philosohpy Chad",
      image: "/projects/chad-1.svg",
      desc: "A meme blog website which shows funny philosophy short essays written by gigachad bro."
    },
    {
      name: "English Dictionary",
      image: "/projects/eng-1.svg",
      desc: "A simple and sleek English Dictionary Website."
    },
    {
      name: "Journality",
      image: "/projects/journality.svg",
      desc: "A simple Note taking app"
    },
    // {
    //   name: "Loremaster",
    //   image: "/projects/loremaster.svg",
    //   desc: "A wiki writing desktop app which exports a ready-to-go website."
    // },
  ]

</script>

<style lang='scss'>

  .gallery {
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width: 500px) {

    .content {
      padding: 0px 10px;
    }
  }
</style>