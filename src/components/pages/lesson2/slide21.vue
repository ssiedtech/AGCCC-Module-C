<template>
  <div class="page" id="content">
    <div class="title">Funding Categories: Category A - Mission Sustaining Programs</div>
    <div class="body-text">
      <ul>
        <li>Armed Forces Entertainment</li>
        <li>Better Opportunities for Single Soldiers (BOSS)</li>
        <li>Gymnasiums. Field houses, pools for aquatic training, and other physical fitness facilities/training programs programs</li>
        <li>Library and Information Services</li>
        <li>Movies (free admission overseas and isolated/remote locations)</li>
        <li>Natural areas, undeveloped</li>
        <li>Nature centers and nature and fitness trails</li>
        <li>Parks, picnic areas, barbecue pits, pavilions, game fields, playgrounds</li>
        <li>Community Recreation Centers</li>
        <li>Sports (individual, intramural, unit)</li>
        <li>Unit (or company) level activities (support/activities that maintain mission readiness, improve unit teamwork, and create esprit de corps)</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information, refer to AR 215-1, Figure 3-1.
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
  width: 75%;
}
.body-text {
  text-align: left;
}
li {
  margin-bottom: 15px;
}
</style>