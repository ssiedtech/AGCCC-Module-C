<template>
  <div class="page" id="content">
    <div class="title">Summary – LSA #2</div>
    <div class="body-text">
      <p>
        During this block of instruction, we have reviewed Responsible Agencies, Roles and Responsibilities for MWR Support and Battlefield Flow.
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