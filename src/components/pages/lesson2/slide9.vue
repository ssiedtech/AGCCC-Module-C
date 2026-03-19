<template>
  <div class="page" id="content">
    <div class="title">Objectives of the MWR Program</div>
    <div class="body-text">
      <p>
         <ul>
          <li>Supports combat readiness and effectiveness. </li>
          <li>Supports recruitment and retention of quality personnel.</li>
          <li>Provides leisure time activities, which support a quality of life commensurate with generally accepted American values.</li>
          <li>Promotes and maintains the mental and physical well-being of authorized personnel.</li>
          <li>Fosters community pride, Soldier morale, and Family wellness and promotes unit esprit de corps.</li>
          <li>Eases the impact of unique aspects of military life, such as frequent relocations and deployment.</li>
        </ul>
      </p>
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
</style>