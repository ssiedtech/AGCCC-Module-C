<template>
  <div class="page" id="content">
    <div class="title">Check on Learning - LSA #1</div>
    <div class="body-text">Complete a Check on Learning to summarize the Learning Activity and assess your understanding of the material presented in this LSA.</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1. What are the funding categories within the nonappropriated fund instrumentalities (NAFIs)?'" :choices="[
        'Mission Sustaining Programs',
        'Community Support Programs',
        'Revenue Generating Programs',
        'All of the above.',]" :correctAnswer="'All of the above.'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2. Who provides strategic support to the force for MWR services?'" :choices="[
        'Army G-1',
        'ASCC G-1/AG',
        'Installation Management Command (IMCOM)',
        'Theater Personnel Action Center']" :correctAnswer="'Installation Management Command (IMCOM)'" />
      </div>
    </div>


  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Q1. Reference: AR 215-1, Figure 3-1<br>
      Q2. Reference: ATP 1-0.1, Para. 2-2.
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