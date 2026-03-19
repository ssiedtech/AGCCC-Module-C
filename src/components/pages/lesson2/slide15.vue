<template>
  <div class="page" id="content">
    <div class="title">Check on Learning – LSA #2</div>
    <div class="body-text">
      <p>
        Question 1 and 2.
      </p>
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
</style>