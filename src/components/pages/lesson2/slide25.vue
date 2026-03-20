<template>
  <div class="page" id="content">
    <div class="title">Funding Categories: Category C - Revenue Generating Programs</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>Amusement machines</li>
          <li>Aquatics centers (recommended grade water theme parks)</li>
          <li>Armed Forces Recreation Centers/Joint Services facilities (accommodations, dining and resale functions)</li>
          <li>Army Recreation Machine Program (includes gaming and amusement machines and internet-based entertainment, wireless cafes, and related services and support)</li>
          <li>Audio/photo retail sales (overseas only)</li>
          <li>Bingo</li>
          <li>Bowling Centers (over 12 lanes)</li>
          <li>Commercial travel</li>
          <li>Food, beverage and entertainment operations (includes Theme, catering, snack bars, and meeting/conference type operations)</li>
          <li>Golf courses and associated operations</li>
          <li>Cabins, cottages, cabanas, and fixed mobile home/trailer operations</li>
      </ul>
      </div>
      <div class="body-text">
        <ul>
          <li>Flying activities</li>
          <li>Marinas, boathouses, (resale, private boat berthing, chartered boats)</li>
          <li>Motorcycle/moped/other motor sports activities</li>
          <li>Rod and gun activities/skeet and trap</li>
          <li>Ski slope operations</li>
          <li>Sport parachuting operations</li>
          <li>Stables (boarding for privately owned mounts)</li>
          <li>Recreational MWR lodging (includes cabins, cottages, hotels and motels)</li>
          <li>Recreational vehicle campgrounds, large</li>
          <li>Resale operations integral to MWR Operations</li>
          <li>Skating rinks, regardless of type</li>
          <li>Snack bars and soda fountains not operated by AAFES</li>
          <li>Other revenue generating programs, subject to resale policy (See Chap.12)</li>
      </ul>
      </div>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional Information, refer to AR 215-1, Figure 3-1.
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
.body-text {
  width: 50%;
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