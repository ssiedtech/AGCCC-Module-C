<template>
  <div class="page" id="content">
    <div class="title">Army Substance Abuse Program (ASAP)</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide15_a.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
        As defined by AR 600-85, The Army Substance Abuse Program is to integrate, coordinate, and approve all policies pertaining to the ASAP.  The purpose of the ASAP is to strengthen the overall fitness and effectiveness of the Army's total workforce and to enhance the combat readiness of its Soldiers.  The objectives of the ASAP are:
    </p>
      <ul>
        <li>(1) Increase individual fitness and overall unit readiness.</li>
        <li>(2) Provide services, which are adequate and responsive to the needs of the workforce and emphasize alcohol and other drug abuse deterrence, prevention, education, and treatment.</li>
        <li>(3) Implement alcohol and other drug risk reduction and prevention strategies that respond to potential problems before they jeopardize readiness, productivity, and careers.</li>
        <li>(4) Restore to duty those substance-impaired Soldiers who have the potential for continued military service</li>
        <li>(5) Provide effective alcohol and other drug abuse prevention and education at all levels of command and encourage commanders to provide alcohol and drug-free leisure activities.</li>
        <li>(6) Ensure subordinate commanders execute the military Drug-Testing Program (DTP) during the course of your Command or OIP.</li>
        <li>(7) Ensure battalion commanders appoint officers or NCOs (E-5 promotable or above) on orders as the battalion prevention leader (BPL) and alternate UPL to perform the duties specified in AR 600-85.</li>
        <li>(8) Ensure that units are prepared to conduct drug testing while deployed.</li>
        <li>(9) Ensure that the Unit Risk Inventory (URI) is administered to all Soldiers at least 30 days before an operational deployment and the Reintegration Unit Risk Inventory (R-URI) is administered to all Soldiers between 30 and 180 days after returning from an operational deployment.</li>
        <li>(10) Ensure subordinate commanders fulfill the unit prevention and education requirements required in paragraph.</li>
        <li>(11) Ensure subordinate commanders refer Soldiers to the ASAP for screening within 5 days of notification that the Soldiers received positive urinalysis results for illicit drug use or were involved in alcohol-related misconduct.</li>
      </ul>
      <p>
        For additional information, refer to AR 600-85, Para. 2-15 to 2-16.
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