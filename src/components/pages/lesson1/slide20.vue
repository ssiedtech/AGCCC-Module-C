<template>
  <div class="page" id="content">
    <div class="title">Sexual Harassment/Assault Response & Prevention (SHARP) Program</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide20_a.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
        Prevention of Sexual Harassment is a commander's responsibility.  The Equal Opportunity Advisor (EOA) plays a pivotal role by assisting the commander with policy awareness, training, command climate assessments, complaints processing, and overall advisory assistance concerning SHARP.  
    </p>
    <p>
        Commanders and supervisors will:
    </p>
      <ul>
        <li>(1) Ensure that assigned personnel (to include RC personnel under their jurisdiction) are familiar with the Army policy on sexual harassment.</li>
        <li>(2) Publish and post written command's commitment to the Army's policy against sexual harassment and will reaffirm that sexual harassment will not be tolerated.</li>
        <li>(3) Continually assess and be aware of the climate of command regarding sexual harassment.</li>
        <li>(4) Set the standard.</li>
       <p>
        <b>
            For additional information, refer to AR 600-20, Chapter 7.
        </b>
      </p>>
      </ul>
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
  width: 70%;
}
</style>