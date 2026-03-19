<template>
  <div class="page" id="content">
    <div class="title">Summary – LSA #1
</div>
    <div class="body-text">
      <p>
      During this block of instruction, we have reviewed and discussed the Purpose, Principles, and Objectives of the MWR, and HR Support. 
      </p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      N/A
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