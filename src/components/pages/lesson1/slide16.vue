<template>
  <div class="page" id="content">
    <div class="title">Army Body Composition Program (ABCP)</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide16_a.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
       The primary objective of the Army Body Composition Program is to ensure all Soldiers achieve and maintain optimal well-being and performance under all conditions.
    </p>
    <p>
       The secondary objectives of the ABCP are to - 
    </p>
    <ul>
        <li>(1) Assist in establishing and maintaining—</li>
            <ul>
                <li>Operational readiness</li>
                <li>Physical fitness</li>
                <li>Health</li>
                <li>A professional military appearance in accordance with Army Regulation (AR) 670-1.</li>
            </ul>
        <li>(2) Establish body fat standards</li>
        <li>(3) Provide procedures by which personnel are counseled to assist in meeting the standards prescribed in this regulation.</li>
      </ul>

      <p>
        The inability of Soldiers to maintain proper health impacts a unit's operational and readiness status, and affects the soldiers eligibility for favorable HR actions (such as retention, promotion, or other career decisions).
      </p>
      <p>
        The Army Body Composition program is a commanders responsibility that is enforced by the NCO channels (1SG) of the organizations.  Leaders should maintain a roster or tracking system on all Soldiers enrolled in the ABCP in their command. 
      </p>
      <p>
        S-1s should conduct inspections of all subordinate units ABCP programs to ensure proper documentation and that Soldiers who are enrolled in the program are flagged accordingly.
      </p>
      <p>
        Ensure that personnel responsible for issuing TDY/Permanent Change of Station orders include the required weight control information. “You are responsible for reporting to your next duty station/ school in satisfactory physical condition, able to pass the Army Fitness Test (APFT) and meet weight standards.
      </p>
      <p>
        <b>NOTE:  Effective 4 August 2016, filing of specific documents from the ABCP packet (AR 600-9) is required in iPERMS per AR 600-8-104, appendix B.</b>
      </p>
      <p><b>
        For additional information, refer to FM 4-1 and AR 600-9, Chapter 1, Chapter 2 and Chapter 3.
      </b></p>
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