<template>
  <div class="page" id="content">
    <div class="title">Battlefield Flow</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide13.png'" :width="'80%'" :height="'60%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Commanders at all levels are responsible for the MWR support provided to their Soldiers and DOD and DA Civilians.  Morale, welfare, and recreation programs are at all echelons on the battlefield and in all operational scenarios.  MWR requirements are based on the combat environment and availability of resources.  
    </p>

    <p>
     Battalions and below self-administer their programs using their command appointed unit athletic and recreation officers or NCOs; brigades and above assist all subordinate units in planning and executing their MWR programs.
    </p>

    <p>
      <b>For additional information, refer to ATP 1-0.1, Table 4-2 and Para. 1-159.</b>
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
  /* width: 65%; */
}
.body-text {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>