<template>
  <div class="page" id="content">
    <div class="title">Morale, Welfare, & Recreation (MWR) Program (3 of 3)</div>
    <div class="body-text">
      <ul>
        <li>Fosters community pride, Soldier morale, and Family wellness </li>
        <li>Eases the impact of unique aspects of military life</li>
        <li>Only minimum MWR services are provided during the initial deployment and early sustainment phase of military operations</li>
      </ul>
      <p><b style='color:red;'>
        *Plan MWR operations include unit recreation, sports programs, and R&R areas for military and deployed DOD and DA Civilian personnel
      </b></p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Morale, welfare, and recreation support includes a wide variety of services. Only minimum MWR services are provided during the initial deployment and early sustainment phase of military operations.  Minimum services include brigade sports equipment, health and comfort packs, ARC, and limited AAFES.
    </p>

    <p>
      The combatant commander, through the J-1/G-1 and J-4/G-4, determines MWR needs and requirements based on operational tempo and available MWR resources. While the J-1/G-1 is the primary staff office responsible for MWR, the J-4/G-4 is responsible for the execution of MWR logistics support requirements. Depending on AO stability and actions, the commander may use alternative sources such as the Logistics Civilian Augmentation Program or other contracted personnel.
    </p>

    <p>
      <b>
        For additional information, refer to FM 4-1, Para. 4-117 and 4-118.
      </b>
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