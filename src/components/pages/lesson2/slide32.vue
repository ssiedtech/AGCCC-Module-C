<template>
  <div class="page" id="content">
    <div class="title">TLO Summary</div>
    <div class="body-text">
      <p>
        During this block of instruction, we have covered:
      </p>
      <ul>
        <li>Purpose, Principles, and Objectives of the MWR, and HR Support.</li>
        <li>Responsible Agencies, Roles and Responsibilities for MWR Support and Battlefield Flow</li>
        <li>Military MWR programs and nonappropriated fund instrumentalities (NAFIs), group structure, funding categories and other MWR Services</li>
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
.page {
  overflow: scroll;
}
.graphic {
  width: 40%;
}
.body-text {
  text-align: left;
}
li {
  margin-bottom: 15px;
}
.slide-container {
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 100%;
  /* border: 1px solid red; */
}
</style>