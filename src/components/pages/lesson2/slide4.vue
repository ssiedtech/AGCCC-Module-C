<template>
  <div class="page" id="content">
    <div class="title">Human Resources Support</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/image10.png">
    </div>
    <p><b>For additional information you may refer to FM 4-1, Figure 1-1 and Para. 1-20 to 1-21.</b></p>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Human resources professionals must execute two fundamental core competencies in providing HR support.  As depicted in figure 1-1, each of the two core competencies includes subordinate key functions, which contribute to the success of the core competency. 
    </p>

    <p>
      ***This graphic emphasizes the critical role of personnel information management as the connective force supporting the execution of all HR core competencies and subordinate key functions.
    </p>

    <p>
      Success on the battlefield depends, in part, on the effective management of HR support.  Human resources operations enhance combat power by providing information and support to both commanders and Soldiers.  Human resources support concepts serve two major areas of concentration:  support for commanders and units (manning) and support to Soldiers (sustaining Soldiers).  Each subordinate key function can be described in terms of command support and Soldier support activities.
    </p>

    <p>
      Human resources professionals, units, and staffs perform the core competencies and subordinate key functions at all levels.
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
</style>