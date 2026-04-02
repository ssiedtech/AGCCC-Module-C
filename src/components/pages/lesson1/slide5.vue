<template>
  <div class="page" id="content">
    <div class="title">Responsible Agent/Agency</div>
    <div class="body-text">
      <ul>
        <li>Someone specific or a subordinate element that is appointed, in writing, by order or
        policy memorandum.</li>
        <li>Establishes the scope and responsibilities of the duty to be performed, the length of
        time the duty is performed and any applicable references authorizing the order.</li>
        <li>Commander or designated representative must sign any order or policy
        memorandum establishing a responsible agent or agency for a command interest program.</li>
        <li>S-1 ensures the order is completed and maintained IAW the requirements for the
        program.</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information you may refer to ATP 1-0.1, Para. 5-2.
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