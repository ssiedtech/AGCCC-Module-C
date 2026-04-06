<template>
  <div class="page" id="content">
    <div class="title">Ready and Resilient (R2) Program</div>
    <!-- <div class="body-text">
      <img class="graphic" src="../../../assets/slide21_a.png">
    </div> -->
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide21_a.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
       The Ready and Resilient Campaign integrates and synchronizes multiple efforts and initiatives to improve the readiness and resilience of the Total Army - Soldiers (Active Duty, Reserve, National Guard), Army Civilians and Families. Ready and Resilient will build upon mental, physical, emotional, behavioral and spiritual resilience in our Soldiers, Families and Civilians to enhance their ability to manage the rigors and challenges of a demanding profession.  
    </p>
    <p>
        The DCS, G-1 is responsible for Army R2. It synchronizes and integrates all R2 programs, identifies and develops policy changes necessary to achieve the Army's R2 end-state and develops a holistic perspective of the human dimension's impact on readiness.  The DCS, G-1 is responsible for:
    </p>
      <ul>
        <li>(1) Serving as lead agent for R2</li>
        <li>(2) Establishing guidance to govern compliance with R2 initiatives</li>
        <li>(3) Appointing an R2 Director</li>
        <li>(4) Coordinates the agenda for and conducting of meetings for the R2 Senior Review Group (SRG)</li>
        <li>(5) Provide staffing and administrative support to the R2 SRG</li>
        <li>(6) Maintains and updates tools necessary to ensure a holistic approach to integrated strategic planning for R2 programs</li>
        <li>(7) Represent the holistic perspective of Army R2 programs in the planning, programming, budgeting, and execution proces</li>
      </ul>

      <p>
        Unit are responsible for ensuring the R2 objectives are incorporated into training schedules, calendars, and risk assessments.  Emphasis is to be put on training that builds mental, physical, spiritual, and emotional strength as well as addresses negative indicators and trends. Commanders must leverage local, region, and state support agencies to augment available services. They must also establish and oversee the Community Health Promotion Council (CHPC) and report trends, efforts, results, and best practices to Higher level leadership as req
      </p>

      <p>
        Leaders at all levels must provide an environment that contributes positively to the mental, physical, spiritual, and emotional dimensions of the lives of their Soldiers and their families. Leaders should demonstrate and promote resilience by setting the example, encouraging help-seeking behavior, and by remaining actively engaged with their Soldiers, Army Civilians, and Family members.
      </p>

      <p>
        <b>
            For additional information, refer to AR 600-20, Chapter 3. 
        </b>
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