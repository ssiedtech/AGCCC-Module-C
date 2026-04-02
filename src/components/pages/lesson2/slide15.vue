<template>
  <div class="page" id="content">
    <div class="title">Check on Learning - LSA #2</div>
    <div class="body-text">Complete a Check on Learning to summarize the Learning Activity and assess your understanding of the material presented in this LSA.</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1. Who is the Principal staff officer for all matters concerning HR support?'" :choices="[
        'ASCC G-1/AG',
        'Theater Personnel Operations Center',
        'Field Army G-1',
        'Theater Gateway Personnel Accountability Team']" :correctAnswer="'ASCC G-1/AG'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2. Battalions and below self-administer their programs using what?'" :choices="[
        'Availability of resources',
        'MWR support',
        'Their command appointed unit athletic and recreation officers or NCOs',
        'Personal equipment']" :correctAnswer="'Their command appointed unit athletic and recreation officers or NCOs'" />
      </div>
    </div>


  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Q1. Reference:  FM 4-1. Para. 2-17.<br>
      Q2. Reference ATP 1-0.1, Para. 4-159.
    </p>
  </Teleport>

</template>

<script>
import multiComp from '@/components/questions/multiComp.vue'

export default {
  name: 'slideOne',
  mounted() {
    this.$store.commit('pageloaded')
  },
  components: {
    multiComp,
  },
}
</script>
<style scoped>
.page {
  overflow: scroll;
}

.title {
  /* border: 1px solid red; */
  margin-bottom: 20px;
}
.body-text {
  font-size: 1.1rem;
}
.graphic {
  width: 75%;
}
.body-text {
  text-align: center;
  margin-bottom: 30px;
}
.content-box {
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
}
.question {
  height: 100%;
  width: 100%;
  margin-bottom: 20px;
}
</style>