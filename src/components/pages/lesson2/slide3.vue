<template>
  <div class="page" id="content">
    <div class="title">Terminal Learning Objective</div>
    <div class="body-text">
      <p><b>ACTION:</b>
        <br />
        Manage Morale, Welfare, and Recreation Support Pan for Deployed Forces
      </p>

      <p><b>CONDITION:</b>
      <br />
        In a virtual classroom facilitation, using readings, handouts, classroom discussion, personal experiences and access to references to include AR 215-1 (Military MWR Programs and Nonappropriated Fund Instrumentalities) and FM 4-1 (Human Resources Support) and an awareness of the OE variables and actors.
      </p>

      <p><b>STANDARD:</b>
      <br />
      <ol>
        <li>Review the Purpose, Principles, and  Objectives of the MWR program.</li>
        <li>Interpret the Roles and Responsibilities for MWR Support.</li>
        <li>Manage Military MWR program and Nonappropriated Fund Instrumentalities (NAFIs).</li>
      </ol>
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