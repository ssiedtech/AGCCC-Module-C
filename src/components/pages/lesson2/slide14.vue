<template>
  <div class="page" id="content">
    <div class="title">Battlefield Flow</div>
    <div class="body-text">
      <p>
        Graphic Needed
      </p>
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
.graphic {
  width: 75%;
}
.body-text {
  text-align: left;
}
</style>