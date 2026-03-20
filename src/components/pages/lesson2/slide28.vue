<template>
  <div class="page" id="content">
    <div class="title">Installation Management Command (IMCOM)</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>The functional proponent for deployed ARC, Army Continuing Education System, and MWR personnel is the IMCOM.  The IMCOM G-9 Family and MWR Programs Division executes MWR support</li>
          <li>Coordinates with ASCC for:</li>
          <ul>
            <li>MWR manpower, materiel, supplies, and other assistance</li>
            <li>Live entertainment for Soldiers and authorized Civilians in the AO</li>
            <li>Developing a system for procuring, transporting, accounting, training, and providing MWR technical assistance to subordinate units</li>
            <li>Development of a policy and operational support system for club operations</li>
          </ul>
        </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>IMCOM HQ maintains a roster of MWR emergency essential civilian (EEC) personnel who are available to augment the G-1/AG and S-1 in coordinating and conducting MWR support activities. Upon deployment, MWR EEC specialists are paid with contingency funds.</p>
    <p>Both appropriated fund and non-appropriated fund MWR personnel may be used, but non-appropriated fund salaries of deployed personnel are reimbursed to the appropriate non-appropriated fund account with contingency funds IAW DOD MWR Utilization, Support and Accountability rules.</p>
    <p>For additional information, refer to ATP 1-0.1, Para. 4-151 to 4-153.</p>
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