<template>
  <div class="page" id="content">
    <div class="title">Scope</div>
    <div class="body-text">
      <p>
        The intended outcome of this lesson is to produce officers who can Manage Command Interest Programs at the S-1 level in their future assignments. This lesson begins by reviewing a baseline of doctrinal and regulatory concepts related to Command Interest Programs. The lesson concludes with a brief overview of the mandated and most common Command Interest Programs. 
      </p>
    </div>

    <MultiModal v-if="modal" @click="modal = false">
      <div>You must review all slide notes before proceeding. The Notes icon will be animated when there are notes ready for review.</div>
    </MultiModal>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      N/A
    </p>
  </Teleport>

</template>

<script>
import MultiModal from '@/components/MultiModal.vue'

export default {
  name: 'slideOne',
  data() {
    return {
      modal: true,
    }
  },
  mounted() {
    this.$store.commit('pageloaded')
  },
  components: {
    MultiModal
  },
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