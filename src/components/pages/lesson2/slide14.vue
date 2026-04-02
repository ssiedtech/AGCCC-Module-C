<template>
  <div class="page" id="content">
    <div class="title">Battlefield Flow</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide15.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For planning purposes, these guidelines show an establish a time-phased schedule for deploying MWR resources to support military operations.  Actual timelines and operations depend on METT-TC.
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