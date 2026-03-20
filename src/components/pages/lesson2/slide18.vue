<template>
  <div class="page" id="content">
    <div class="title">NAFI Group 1-3</div>
    <div class="body-text">
      <p>
        Graphic
      </p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      NAFIs and their programs are classified into one of six program groups:
    </p>
    <ul>
      <li>Military morale, welfare, and recreation programs</li>
      <li>Armed Forces Exchanges</li>
      <li>Civilian morale, welfare, and recreation programs</li>
      <li>Lodging Program supplemental mission funds</li>
      <li> Supplemental mission funds</li>
      <li>Special purpose central funds</li>
    </ul>

    <p>
      Military MWR programs are classified into three funding categories. 
    </p>

    <p>
      Program Group I:  Military morale, recreation and welfare programs.  All military MWR programs, to include Child Development Services and School Age Care, are included within this group.  Policies pertaining to these programs are contained in AR 215-1 and AR 608-10. 
    </p>

    <p>
      Program Group II:  Armed Forces exchanges.  Policies pertaining to this group of NAFIs are contained in AR 215-8.  Exchanges are classified as a category C program.
    </p>

    <p>
      Program Group III:  Civilian morale, recreation and welfare programs.  Policies pertaining to this group of NAFIs are contained in AR 215-7.  Civilian MWR programs are classified as a category C program. 
    </p>

    <p>
      <b>
        For additional information on NAFI Group 1-3, refer to AR 215-1, Chapter 3, para 3-1 thru 3-6.
      </b>
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