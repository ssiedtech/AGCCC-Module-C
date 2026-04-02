<template>
  <div class="page" id="content">
    <div class="title">Summary - LSA #1</div>
    <div class="body-text">
        <p>
            <b>During this block of instruction, we have covered Communicate the personnel support functions of Command Interest Programs to include:</b>
        </p>
        <ul>
        <li>Human Resources Support</li>
        <li>Personnel Support Functions for Command Interest Programs (CIP)</li>
        <li>Responsible Agent/Agency</li>
        <li>Regulatory Guidance or Statutory Requirements</li>
        <li>Compliance Protocols</li>
        <li>Reporting Requirements</li>
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