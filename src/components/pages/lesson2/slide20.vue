<template>
  <div class="page" id="content">
    <div class="title">Funding Categories: Category A - Mission Sustaining Programs</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>Considered essential to sustaining readiness, these programs generally enhance and promote the physical and mental well-being of Soldiers</li>
          <li>Programs in this category have little or no capacity for generating NAF income and are supported almost entirely with APFs</li>
      </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
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
.body-text {
  text-align: left;
}
</style>