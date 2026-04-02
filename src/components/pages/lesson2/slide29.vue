<template>
  <div class="page" id="content">
    <div class="title">Check on Learning - LSA #3</div>
    <div class="body-text">Complete a Check on Learning to summarize the Learning Activity and assess your understanding of the material presented in this LSA.</div>
    <div class="content-box">

      <div class="question">
        <multi-comp :question="'Q1. Nonappropriated fund instrumentalities (NAFIs) and their programs are classified into how many groups?'" :choices="[
        '3',
        '6',
        '2',
        '4']" :correctAnswer="'6'" />
      </div>
      <div class="question">
        <multi-comp :question="'Q2. True or False:  Military personnel normally operate tactical field exchanges.'" :choices="[
        'True',
        'False']" :correctAnswer="'True'" />
      </div>
    </div>


  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      Q1. Reference AR 215-1, Chapter 3. Section I.<br>
      Q2. Reference FM 4-1, Para. 4-127.
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