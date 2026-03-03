<template>
  <div class="page" id="content">
    <div class="title">Operational Environment (OE) Variables</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/image11.png">
    </div>
  </div>
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