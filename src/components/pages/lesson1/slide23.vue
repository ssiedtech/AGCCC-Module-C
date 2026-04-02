<template>
  <div class="page" id="content">
    <div class="title">Check on Learning - LSA #2</div>
    <div class="body-text">Complete a Check on Learning to summarize the Learning Activity and assess your understanding of the material presented in this LSA.</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1:  What is primary objective of the Army Body Composition Program?'" :choices="[
        'Establish body fat standards.',
        'Assist in establishing and maintaining physical fitness.',
        'To ensure all Soldiers achieve and maintain optimal well-being and performance under all conditions.',
        'Assist in establishing and maintaining a professional military appearance.']" :correctAnswer="'To ensure all Soldiers achieve and maintain optimal well-being and performance under all conditions.'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2:  True or False:  CFC is the only authorized fund-raising organization for the general public that the Army may officially support.'" :choices="[
        'True',
        'False',]" :correctAnswer="'True'" />
      </div>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Q1: Reference: AR 600-9, Para. 1-5.<br>
      Q2: Reference: AR 1-10, Para. 2-1.a.
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