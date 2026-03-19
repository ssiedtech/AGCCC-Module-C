<template>
  <div class="page" id="content">
    <div class="title">Interpret The Roles and Responsibiltiies for MWR Support</div>
    <div class="body-text">
      <p>
        No Text Included
      </p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Commanders at all levels are responsible for the MWR support provided to their Soldiers and DOD and DA Civilians.  Morale, welfare, and recreation programs are at all echelons on the battlefield and in all operational scenarios.  MWR requirements are based on the combat environment and availability of resources.  
    </p>

    <p>
     Battalions and below self-administer their programs using their command appointed unit athletic and recreation officers or NCOs; brigades and above assist all subordinate units in planning and executing their MWR programs.
    </p>

    <p>
      <b>For additional information, refer to ATP 1-0.1, Table 4-2 and Para. 1-159.</b>
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