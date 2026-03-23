<template>
  <div class="page" id="content">
    <div class="title">Battlefield Flow</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide15.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For planning purposes, these guidelines show an establish a time-phased schedule for deploying MWR resources to support military operations.  Actual timelines and operations depend on METT-TC.
    </p>
  </Teleport>

</template>

<script>

export default {
  name: 'slideOne',
  mounted() {
    this.$store.commit('pageloaded')
  }
}
</script>
<style scoped>
.page {
  overflow: scroll;
}
.graphic {
  width: 70%;
}
</style>