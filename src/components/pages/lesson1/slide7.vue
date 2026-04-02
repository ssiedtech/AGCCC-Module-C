<template>
  <div class="page" id="content">
    <div class="title">Checklist</div>
    <div class="body-text">
      <ul>
        <li>Most programs have specific requirements or procedures to follow.</li>
        <li> A checklist ensures completion of each component is on time and in the proper
        order.</li>
        <li>At any time, the checklist can be updated to reflect procedure changes.</li>
        <li>In some cases, the S-1 may not perform some or any of the duties on the checklist
        beyond assuring that a responsible agent is appointed.</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information you may refer to ATP 1-0.1, Para. 5-4.
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