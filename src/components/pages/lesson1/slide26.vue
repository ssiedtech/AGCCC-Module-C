<template>
  <div class="page" id="content">
    <div class="title">TLO - Summary</div>
    <div class="body-text">
        <p>
            <b>During this block of instruction, we have covered the following Learning Activities and related topics:</b>
        </p>
       <p>
            LSA 1.  Communicate the personnel support functions of Command Interest Programs
       </p>
         <ul>
            <li>Human Resources Support</li>
            <li>Personnel Support Functions for Command Interest Programs (CIP)</li>
            <li>Responsible Agent/Agency</li>
            <li>Regulatory Guidance or Statutory Requirements</li>
            <li>Compliance Protocols</li>
            <li>Reporting Requirements</li>
        </ul>
        <p>
            LSA 2. Manage Command Interest Programs
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

        <div style="text-align: center;">
          <button class="homebutton" @click="this.$store.commit('goHome')">Return to Home Page</button>
        </div>

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
  async mounted() {
    this.$store.commit('pageloaded')
    this.$store.commit('setLessonComplete', 0)
    await this.$store.commit('saveModuleProgress')
  }
}
</script>
<style scoped>
.page {
  overflow: scroll;
}
.body-text {
  text-align: left;
  overflow: scroll;
  /* border: 1px solid red; */
}
li {
  margin-bottom: 15px;
}
</style>