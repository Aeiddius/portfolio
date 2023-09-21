<template>
  <Page name="Contact" subtitle="Hire me? (Please)" id="contact">
    
    <div class="contact--info">
      <Info title="Call Me" content="+63 976 3713 021"><Call/></Info>
      <Info title="Email" content="adriantagayom@gmail.com"><Email/></Info>
      <Info title="Location" content="Cavite, Philippines"><Location/></Info>
    </div>

    <div class="contact--inputs flex column gap-10">
      <Input name="Name" placeholder="John Doe"/>
      <Input name="Email" placeholder="Johndoe@email.com"/>
      <Input name="Message" placeholder="Write here..." type="textarea"/>
      
      <div class="flex align-right mt-10">
        <Button type="submit">Submit</Button>
      </div>
    </div>

  </Page>
</template>

<script lang="ts" setup>


</script>

<style lang='scss' scoped>


  .contact--info {
    border-right: 1px solid rgba($white, 0.2);
    padding-right: 50px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  .contact--inputs {
    // width: 400px;
    width: 100%;
  }

  @media only screen and (max-width: 940px) {
    .contact--info {
      padding-right: 0px;
      margin-right: 0px;
      border-right: none;
      // border-bottom: 1px solid rgba($white, 0.2);
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .contact--inputs {
      width: 70%;
    }
  }


  @media only screen and (max-width: 700px) {
    .contact--info {
      margin: 20px 0px;
    }
    .contact--inputs {
      width: 100%;
    }
  }

</style>