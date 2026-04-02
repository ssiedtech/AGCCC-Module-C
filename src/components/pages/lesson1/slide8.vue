<template>
  <div class="page" id="content">
    <div class="title">Compliance Protocols</div>
    <div class="body-text">
      <ul>
        <li>Methods and procedures to provide quality assurance as mandated by law.</li>
        <li>Inspections performed by higher HQ, inspector general, or other agency to
        measure, through appropriate metrics, the command's compliance with the requirements.</li>
        <li>Performed when a principal responsible agent changes, the governing guidance
c       changes, or annually if no other circumstance has prompted a review.</li>
        <li>S-1 tracks the timeline for inspections</li>
            <ul>
                <li>Coordinates & schedules, as appropriate, the inspection and any follow up actions.</li>
                <li>Maintains any historical inspections as required.</li>
            </ul>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information you may refer to ATP 1-0.1, Para. 5-5.
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
li {
  margin-bottom: 15px;
}
</style>