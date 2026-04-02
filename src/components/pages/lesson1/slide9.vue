<template>
  <div class="page" id="content">
    <div class="title">Reporting Requirements</div>
    <div class="body-text">
      <ul>
        <li>Each CIP’s governing regulation or implementing guidance usually provides the time and manner by which progress reports are submitted to the commander, higher HQ, or external agencies.</li>
        <li>The S-1 may act as the staff command principal for consolidating, formatting, and presenting the required information to the commander.</li>
        <li>Especially true for programs that require the commander’s signature for certification or authentication.</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information you may refer to ATP 1-0.1, Para. 5-6.
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