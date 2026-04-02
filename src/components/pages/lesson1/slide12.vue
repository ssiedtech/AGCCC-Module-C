<template>
  <div class="page" id="content">
    <div class="title">Command Interest Programs</div>
    <div class="body-text">
      <ul>
        <li>Equal Opportunity (EO)</li>
        <li>Army Voting Assistance Program (AVAP)</li>
        <li>Army Substance Abuse Program (ASAP) / Substance Use Disorder Clinical Care (SUDCC)</li>
        <li>Army Body Composition Program (ABCP)</li>
        <li>Combined Federal Campaign (CFC)</li>
        <li>Army Emergency Relief (AER)</li>
        <li>Army Suicide Prevention Program (ASPP)</li>
        <li>Sexual Harassment/Assault Response and Prevention Program (SHARP)</li>
        <li>Family Programs (Army Family Readiness)</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Command Interest Programs are an HR subordinate key function under Coordinate Personnel Support.  All Army programs fall under the responsibility of a staff element and generally fall under the same staff element from the national provider level to the tactical level.  
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