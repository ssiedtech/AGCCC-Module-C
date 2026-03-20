<template>
  <div class="page" id="content">
    <div class="title">Funding Categories: Category B - Community Support Programs</div>
    <div class="slide-container">
      <div class="body-text">
        <ul>
          <li>These programs are closely related, in terms of supporting the military mission, to those grouped in category A</li>
          <li>They satisfy the basic physiological and psychological needs of Soldiers and their Families</li>
          <li>These support programs will receive substantial amounts of APF support, but differ from those programs in category A, in part, because of their ability to generate NAF revenues </li>
          <li>The ability to generate revenues is limited, however, and in no case are sustainable without substantial APF support</li>
      </ul>
      </div>
      <img class="graphic" src="../../../assets/image10.png">
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