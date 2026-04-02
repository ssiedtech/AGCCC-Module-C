<template>
  <div class="page" id="content">
    <div class="title">Summary - LSA #2</div>
    <div class="body-text">
        <p>
            <b>During this block of instruction, we have covered Manage Command Interest Programs to include:</b>
        </p>
        <ul>
            <li>Equal Opportunity (EO)</li>
            <li>Army Voting Assistance Program (AVAP)</li>
            <li>Army Substance Abuse Program (ASAP)</li>
            <li>Army Body Composition Program</li>
            <li>Combined Federal Campaign (CFC)</li>
            <li>Army Emergency Relief (AER)</li>
            <li>Army Suicide Prevention Program</li>
            <li>Total Army Sponsorship Program (TASP)</li>
            <li>Sexual Harassment/Assault Response and Prevention (SHARP) Program</li>
            <li>Ready and Resilient (R2) Program</li>
            <li>Quality of Life and Family Programs</li>
        </ul>
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
li {
  margin-bottom: 15px;
}
</style>