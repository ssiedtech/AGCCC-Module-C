<template>
  <div class="page" id="content">
    <div class="title">Regulatory Guidance or Statutory Requirements</div>
    <div class="body-text">
      <ul>
        <li>CIPs must follow regulatory guidance or statutory requirements for successful
        execution of the program.</li>
        <li>The S-1 can assist to ensure the responsible agent has access to the current
        regulations or policies governing the program.</li>
        <li>For example, AR 600-20, Army Command Policy, establishes the Army Equal
        pportunity Program; for the commander, it highlights all the essential elements
        of the program to ensure equal opportunity and fair treatment to all Soldiers and their family members.</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information you may refer to ATP 1-0.1, Para. 5-3.
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