<template>
  <div class="page" id="content">
    <div class="title">Funding Categories: Category C - Revenue Generating Programs</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>These programs have less impact on readiness.</li>
          <li>They offer desirable social and recreational opportunities.</li>
          <li>Programs in this category have the capability of generating enough income to cover most of their operating expenses, but they lack the ability to sustain themselves based purely on their business activity; consequently, they receive limited APF support.</li>
      </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Programs in this category lack the ability to sustain themselves based purely on their business activity; consequently, they receive limited APF support.<br><br>

      For additional information, refer to AR 215-1, Para. 3-10.
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