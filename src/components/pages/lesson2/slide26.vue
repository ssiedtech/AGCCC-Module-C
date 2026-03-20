<template>
  <div class="page" id="content">
    <div class="title">The American Red Cross (ARC)</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>Consistently delivers essential Red Cross services</li>
          <li>Assist in preventing, preparing for, and coping with
     emergencies</li>
          <li>Provides emergency communication services</li>
          <li>ARC National HQ is responsible for supplying the staff and managing and monitoring ARC operations in the field</li>
        </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>The ARC provides services such as emergency communication (for example, deaths and births, emergency financial assistance, counseling, and comfort kits in the deployed environment).</p>
    <p>Submit all requests for ARC personnel to accompany U.S. Forces into the JOA to the IMCOM G-9 Family and MWR Programs Division, the DOD executive agent for the deployment of ARC personnel during these situations. The division is responsible for coordinating and securing support for ARC personnel to support military operations, managing and monitoring military support to the ARC, funding travel to and from the AO for ARC personnel, and coordinating and preparing ARC personnel for deployment and return.</p>
    <p>A designated ARC representative is involved with the IMCOM G-9 Family and MWR Programs division, the appropriate military command, and the ARC National HQ in contingency planning to ensure proper coordination and clarification of requirements. In the JOA, coordination for ARC support (logistical and life support) falls under the ASCC G-1/AG. American Red Cross representatives are available at division and higher levels to assist with family emergencies and emergency communication between family members and deployed personnel.</p>
    <p>For additional information, refer to FM 4-1, Para. 4-124 thru 4-126.</p>
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