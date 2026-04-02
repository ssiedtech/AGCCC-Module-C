<template>
  <div class="page" id="content">
    <div class="title">Terminal Learning Objective</div>
    <div class="body-text">
      <p><b>ACTION:</b></p>
        <br/>
         Manage Command Interest Programs at the S-1 Level.
      
      <p><b>CONDITION:</b></p>
      <br/>
        HR Professionals in a virtual environment with access to the Army Publishing Directorate, self-study exercises, handouts, personal experiences and an awareness of the Operational Environment (OE), variables and actors.

      <p><b>STANDARD:</b></p>
      <br/>
      <ol>
        <li>Communicate the personnel support functions of Command Interest Programs.</li>
        <li>Manage Command Interest Programs.</li>
      </ol>
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