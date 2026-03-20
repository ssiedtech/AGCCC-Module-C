<template>
  <div class="page" id="content">
    <div class="title">Army and Air Force Exchange Service (AAFES)</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>Supports major installations in CONUS, OCONUS, and
          units deployed to remote areas, field operations and         
          exercises</li>
          <li>In coordination with the ASCC commander, plans for and supports exchange operations</li>
          <li>Military personnel normally operate tactical field exchanges</li>
          <li>AAFES personnel operate direct operations exchange
          tactical operations</li>
        </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>An AAFES Board of Directors directs AAFES operations worldwide. The Army provides afloat pre-positioning force support in the form of materiel, facilities, transportation, field site support, military air and logistical support of AAFES operations. Logistical support of AAFES operations and personnel is provided by direct support or through the Logistics Civilian Augmentation Program.</p>
    <p>The AAFES deploys personnel to assist the Army in establishing direct retail operations and an exchange warehousing and distribution system.  The ASCC and corps G-1/AGs coordinate with their G-4s in the process of designating, training, deploying, and employing Army and Air Force personnel to support the AO AAFES system.  The AAFES may establish these activities using employees, which consist of U.S. nationals, contract operators, host-nation employees, third country national employees, or vendors.</p>
    <p>Military personnel normally operate tactical field exchanges.  Tactical field exchanges provide merchandise and services on a temporary basis in areas where permanent exchange activities are not present. </p>
    <p>Tactical field exchanges and direct operations exchange-tactical operations serves Soldiers and civilians and may locate as far forward as the brigade support area provided the tactical situation allows.</p>
    <p>The AAFES Imprest Fund Activity is a military-operated retail activity, usually operated in small or remote sites, when regular direct operation exchanges cannot be provided.  Should commanders choose to employ these activities, they must select and train personnel from their units to operate them.  The unit is issued an initial fund by AAFES to purchase a beginning inventory.  Use money generated from sales to replenish the merchandise stock.  A site commander can request the establishment of an AAFES Imprest Fund Activity from the general manager of the AAFES geographical area.</p>
    <p>For additional information, refer to FM 4-1, Para. 4-127 to 4-131. </p>
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
  width: 40%;
}
.body-text {
  text-align: left;
}
li {
  margin-bottom: 15px;
}
.slide-container {
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 100%;
  /* border: 1px solid red; */
}
</style>