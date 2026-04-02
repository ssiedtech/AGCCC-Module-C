<template>
  <div class="page" id="content">
    <div class="title">Personnel Support Functions for Command Interest Programs (CIP)
  </div>
    <div class="body-text">
      <ul>
        <li> CIPs are of general interest to organizations and Soldiers</li>
        <li>Some programs that traditionally fall within the purview are provided as examples to
          understand the principles of support involved but should not be considered all-inclusive</li>
        <li>Generally have five key components</li>
          <ul>
            <li>Responsible agent or agency</li>
            <li>Regulatory or statutory guidance</li>
            <li>Checklist</li>
            <li>Compliance protocols</li>
            <li>Reporting requirements</li>
          </ul>
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