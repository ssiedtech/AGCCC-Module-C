<template>
  <div class="page" id="content">
    <div class="title">Organize Military MWR programs and nonappropriated fund instrumentalities (NAFIs)</div>
    <div class="body-text">
      <ul>
        <li>NAFIs and their programs are classified into one of six program groups</li>
        <li>Within each group, programs are further classified into one of three funding categories</li>
        <li>The funding categories are the basis for appropriated fund (APF) and nonappropriated fund (NAF) authorizations</li>
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