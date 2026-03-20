<template>
  <div class="page" id="content">
    <div class="title">NAFI Group 4-6</div>
    <div class="body-text">
      <p>
        Graphic
      </p>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Program Group IV: Lodging Program supplemental mission funds.  Army lodging is an APF mission.  The Army Lodging Program Supplemental Mission Fund is a NAFI and receives APF and NAF support comparable to a category C program. 
    </p>

    <p>
      Program Group V:  Supplemental mission funds.  These programs are APF mission programs.  Supplemental mission funds are accounted for as NAFs and receive funding support comparable to category C programs.  Nonappropriated fund instrumentalities in this group include, but are not limited to:
    </p>
      <ul>
        <li>School Lunch Program</li>
        <li>Museums</li>
        <li>Vehicle Registration Fund</li>
        <li>Cadet Activities Fund</li>
        <li>Athletic Association Fund</li>
        <li>U.S. Disciplinary Barracks</li>
        <li>Stars and Stripes</li>
        <li>Military Treatment Lodging Facilities</li>
      </ul>
    <p>
      Program Group VI:  Special Purpose Central Funds.  These funds are sole providers of a consolidated NAF function, such as construction, accounting, procurement, personnel administration, employee health and life insurance, and risk management.  These are HQ-level programs.  Expenses of these funds are generally recovered through premiums or assessments charged or offset against earnings prior to distribution.  These funds are authorized the same APF and NAF support authorized for category C programs. 
    </p>

    <p>
      <b>
        For additional information on NAFI Group 1-3, refer to AR 215-1, Chapter 3, para 3-1 thru 3-6, and Table 3-1.
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