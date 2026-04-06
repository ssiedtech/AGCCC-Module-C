<template>
  <div class="page" id="content">
    <div class="title">Equal Opportunity (EO)</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide13_a.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
        The Equal Opportunity (EO) program formulates, directs, and sustains a comprehensive effort to maximize human potential to ensure fair treatment for military personnel, family members, and DA civilians without regard to race, color, gender, religion, or national origin, and provide an environment free of unlawful discrimination and offensive behavior.
    </p>
    <p>
        Command emphasis essential to a unit's EO/EEO program, and it is the role of S1s at the BN and BDE level to ensure that there is an on-going EO Action Plan in effect.  Coordination with EO Reps and S-3s is essential to ensure that EO training is conducted and data is compiled-keeping CDRs in compliance with Army EO Policy.  Other S-1 responsibilities may include:
    </p>
     <ul>
        <li>(1) Ensure EOAs, EEO Officers, EOR, and EOLs are identified, trained, and on appointment orders.</li>
        <li>(2) Ensure that EO Policy Letters and Memorandums are updated, signed, and posted.</li>
        <li>(3) Provide EO support, as appropriate, for EO matters to theater units.</li>
        <li>(4) Ensure EO Advisors are deployed with assigned units.</li>
        <li>(5) Staff Assistance Visits for EO to ensure subordinate units are in compliance with Army Policy.</li>
        <li>(6) Command Inspections for EO.</li>
        <li>(7) Ensure military and civilian EO and Equal Employment Opportunity programs complement each other.</li>
        <li>(8) Ensure the Command provides personnel, funding, and other resources to carry out the EO program.</li>
        <li>(9) Equal Opportunity Action Plans (EOAP).</li>
        <li>(10) Affirmative Employment Plans  for civilian employees are in effect</li>
      </ul>

      <p>
        Coordinate with EO Representatives and S-3s to ensure:
      </p>
      <ul>
        <li>(1) Command Climate Survey and Assessments are being conducted.</li>
        <li>(2) Senior leader and executive-level seminar training.</li>
        <li>(3) Quarterly and annual training.</li>
        <li>(4) EO narrative and statistical data are compiled, maintained and submitted.</li>
      </ul>

      <p>
        Staffing requirements differ between the AC, USAR, and NG:
      </p>
       <ul>
        <li>(1) AC/USAR staffing requirements established by G-1.</li>
        <li>(2) BN and Below: Equal Opportunity Representatives/Leaders (EOR/EOL).</li>
        <li>(3) BDE and higher: Equal Opportunity Advisors.</li>
        <li>(4) NG staffing requirements established by CNGB.</li>
        <li>(5) EO representative from Company to Division level, and State Equal Employment Manager (SEEM) at JFHQ.</li>
        <li>(6) DA Civilians: Represented by EEO Officers.</li>
      </ul>

      <p>
        Each unit of action or equivalent unit will have, as a minimum, one full-time EOA with the rank of SFC or higher.  Each division will have four EOAs: one officer (LTC) and three NCOs (one MSG and two SFC).  A SSG(P) or above, can be selected as a program manager/equal opportunity advisor, with less than 18 years time in service upon completion of DEOMI (time in service waiverable).  
      </p>
      <p>
        For additional information, refer to AR 600-20, Chapter 6.
      </p>
  </Teleport>

</template>

<script>
import ImageModal from '@/components/ImageModal.vue'

export default {
  name: 'slideOne',
  mounted() {
    this.$store.commit('pageloaded')
  },
  components: {
    ImageModal,
  },
}
</script>
<style scoped>
.page {
  overflow: scroll;
}
.graphic {
  width: 70%;
}
.body-text {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
}
</style>