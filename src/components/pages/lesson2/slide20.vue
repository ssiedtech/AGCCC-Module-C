<template>
  <div class="page" id="content">
    <div class="title">Scope</div>
    <div class="body-text">
      <p>
        The intended outcome of this lesson is to produce officers who can confidently prepare and provide an MWR support plan in their future assignments. The lesson begins by reviewing a baseline of doctrinal concepts that are expected to be familiar to all US officers regardless of their basic branch. Information added to this foundation focuses on considerations S-1s must take into account when planning and providing an MWR support plan.
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