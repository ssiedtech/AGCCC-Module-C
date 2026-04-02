<template>
  <div class="page" id="content">
    <div class="title">Check on Learning - LSA #1</div>
    <div class="body-text">Complete a Check on Learning to summarize the Learning Activity and assess your understanding of the material presented in this LSA.</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1. Which of the following IS NOT a key component of command interest programs?'" :choices="[
        'Responsible agent or agency',
        'Regulatory or statutory guidance',
        'Public Affairs protocols',
        'Reporting requirements']" :correctAnswer="'Public Affairs protocols'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2. Which key component of command interest programs ensures completion of each component is on time and in the proper order?'" :choices="[
        'Reporting requirements',
        'Checklist',
        'Compliance protocols',
        'Responsible agent or agency']" :correctAnswer="'Checklist'" />
      </div>
    </div>


  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Q1. Reference: ATP 1-0.1, Para. 5-1.<br>
      Q1. Reference: ATP 1-0.1, Para. 5-4.
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