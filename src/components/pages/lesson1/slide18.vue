<template>
  <div class="page" id="content">
    <div class="title">Army Emergency Relief (AER)</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide18_a.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
        Army Emergency Relief is a non-profit organization incorporated in 1942 by the Secretary of War and the Army Chief of Staff.  The purpose of Army Emergency Relief is “Helping the Army Take Care of Its Own”.  Army Emergency Relief provides commanders with a valuable asset in accomplishing their basic command responsibility of caring for the moral and welfare of their Soldiers.  The key to the success of this program is the knowledge and involvement of our junior leadership in the Army Emergency Relief.

    </p>
     <ul>
        <li>(1) Ensure that all unit officers and noncommissioned officers (NCOs) are familiar with and help their Soldiers get Army Emergency Relief assistance when needed.</li>
        <li>(2) The BDE and BN S-1's main responsibility will be to provide Company level leadership with guidance and assistance in implementing Army Emergency Relief support to their Soldiers.</li>
        <li>(3) The Bde/Bn S-1's will become knowledgeable on AR 930-4, in order to advise and mentor junior leaders; they will also establish a working relationship with the installation AER officer in order to facilitate any assistance requests and ensure that the Bde has the latest information on the program.  Additionally, S-1's will prepare AER briefs that the Companies can use to inform all Soldiers within their formations of the AER program.  Army Emergency Relief can be given to assist with a variety of emergency financial need situations; ranging from food, rent, utilities; funeral expenses; medical/dental expenses, to pay problems and many others.</li>
        <li>(4) Army Emergency Relief can be provided in the form of interest free loans, grants and combination of the two.</li>
        <li>(5) There is no limit to the funding provided by AER, it is based on need. </li>
      </ul>
    <p>
        For additional information, refer to AR 930-4, Chapter 1.
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