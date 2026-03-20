<template>
  <div class="page" id="content">
    <div class="title">Morale, Welfare, & Recreation (MWR) Program (1 of 3)
  </div>
    <div class="body-text">
      <ul>
        <li> Morale, welfare, and recreation programs support readiness by assisting personnel with maintaining physical fitness and alleviating combat stress.</li>
        <li>The G-1/AG and S-1 coordinate for MWR support with Army and Air Force Exchange Service (AAFES) and American Red Cross (ARC) agencies.</li>
        <li>Morale, welfare, and recreation programs are activities supporting and improving the morale and well-being of the deployed force.</li>
        <li>Morale, welfare, and recreation support is mission essential to combat readiness.</li>
        <li>Commanders at all levels are responsible for ensuring MWR support programs are available</li>
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