<template>
  <div class="page" id="content">
    <div class="title">Principles of the MWR Program</div>
    <div class="body-text">
      <p>
       <ul>
          <li>Designed to meet the needs of the garrison Community – this includes Soldiers, units, retirees, civilian employees, and families</li>
          <li>Prioritized based on their impact on readiness</li>
          <li>Support readiness, well-being, recruiting, and retention of highly qualified Soldiers</li>
          <li>Nonappropriated funds are returned to Soldiers, their Families, and other authorized patrons by providing needed MWR programs, services, and capital improvements</li>
          <li>Program management is based on long-range planning, generation of NAF resources, and application of authorized APF resources to meet current operating requirements while providing for reinvestment in programs, facilities, and equipment.</li>
        </ul>
      </p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Program management is based on long-range planning, generation of NAF resources, and application of authorized APF resources to meet current operating requirements while providing for reinvestment in programs, facilities, and equipment.
    </p>

    <p>
      <b>For additional information, refer to AR 215-1, Para. 1-10.</b>
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