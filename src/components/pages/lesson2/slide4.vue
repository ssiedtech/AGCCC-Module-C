<template>
  <div class="page" id="content">
    <div class="title">Concrete Experience</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      <b>Motivator:</b> One of the quickest ways to sabotage your credibility with your customers, boss and rating chain is to mess up promotions. Promotions are a very public event and directly impact your rater's and senior rater's reputation. Consequently, some officers who have mismanaged the promotion system have been relieved. Promotion of personnel is essential in the life of our Army. The Army needs and will continue to need NCOs to fill its ranks, but also a system by which to promote these NCOs to various jobs and levels of responsibility. The enlisted promotion system exists to ensure sufficient personnel exist at various ranks to meet the needs of the Army.
    </p>

    <p>
      <b>Note:</b> Review the “Beetle Bailey's Promotion” slide. Generate thoughts and reflect upon experiences (garrison and deployed) where enlisted promotions had an impact on mission accomplishment. What could be the second and third order effects because of improper administration of enlisted promotions? You will have 10 minutes to brainstorm your response. Write your questions at the top of the response list (this will make it easier when the results are revisit at the end of the lesson).
    </p>

    <p>
      <b>NOTE:</b> This CE is directly relatable to administering enlisted promotions and selections for Soldiers within units. Generate many topics from the cartoon. Keep those in mind as you continue through the lesson, many will be discussed again.
    </p>
  </Teleport>

</template>

<script>

export default {
  name: 'slideOne',
  mounted() {
    this.$store.commit('pageloaded')
  }
}
</script>
<style scoped>
.graphic {
  width: 75%;
}
</style>