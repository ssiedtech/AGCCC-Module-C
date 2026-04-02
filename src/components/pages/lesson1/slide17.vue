<template>
  <div class="page" id="content">
    <div class="title">Combined Federal Campaign (CFC)</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide17_a.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
       CFC is the world's largest and most successful annual workplace charity campaign.  The campaign season is September 1st  to December 15th and donations support eligible non-profit organizations.  CFC is a great way to promote volunteerism and giving back to the community.  CFC is the only authorized fund-raising organization for the general public that the Army may officially support.
    </p>
    <p>
        Commanders:
    </p>
      <ul>
        <li>(1) Making a realistic goal promotes motivation and direction for the Campaign; do not establish personal dollar goals.</li>
        <li>(2) Attempt to make the 100% solicitation goals, which is sometimes hard when in deployed theater.</li>
        <li>(3) Endorse the Campaign; ensuring all employees receive information; urging them to be familiar with CFC.</li>
      </ul>
      
      <p>
        The BDE S-1 supports Commanders participation in CFC by:
      </p>
      <ul>
        <li>(1) Identifying key personnel and ensuring that they are trained and will be present for entire timeframe (1 Sep-15 Dec).</li>
        <li>(2) Ensure Commander is aware of personnel being recognized and when CFC Kick-off and other CFC events are.</li>
        <li>(3) Ensure not to develop lists of non-contributors when keeping track of goals.</li>
        <li>(4) When Campaign is over, turn in any unused materials to G1 and ensure all contribution slips have been turned in.</li>
      </ul>

      <p>
        For additional information, rto AR 600-29, Chapter 1 and Chapter 2.
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
  width: 70%;
}
</style>