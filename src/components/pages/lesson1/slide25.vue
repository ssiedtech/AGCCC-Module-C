<template>
  <div class="page" id="content">
    <div class="title">TLO - Check on Learning</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1: In reference to Command Interest Programs, what are the methods and procedures used to provide quality assurance as mandated by law for any federal agency?'" :choices="[
        'Checklist',
        'Reporting requirements',
        'Regulatory or statutory guidance',
        'Compliance protocols']" :correctAnswer="'Compliance protocols'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2: How is Army Emergency Relief provided to recipients?'" :choices="[
        'Grants',
        'Interest-free loans',
        'Combination of A and B',
        'All of the above',]" :correctAnswer="'All of the above'" />
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