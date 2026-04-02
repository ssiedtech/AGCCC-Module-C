<template>
  <div class="page" id="content">
    <div class="title">Quality of Life & Family Programs</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide22_a.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
        Quality of Life and Family Programs remain a top priority for Army leaders.  A vast array of Army resources are provided at installations worldwide to help Families respond to various transitions such as PCS, separations, and deployments.
    </p>
    <p>
        The overarching intent of these programs is not only to improve the quality of life for Army families, thereby retaining your force, but also to ensure that your war fighter has a comfort level that the systems at home station are in place to ensure that their family is well taken care of and allowing them to focus on their deployed mission.
    </p>
    <p>
        Family Programs provide a wide range of services to Soldiers, DoD civilians, retirees, and their Family members.  The full range of programs and services are available from Army OneSource, through the Installation Army Community Service, or RC Family Services.  Some of the programs available are listed on this slide.
    </p>
    <p>
        Many of these fall directly under the S1’s responsibility to track, manage, and ensure that trained soldiers are in place – such as the Unit Victim Advocate or the Deployed Sexual Assault Response Coordinator.  Other areas like transitional compensation and financial assistance; the Role of the S1 is as the unit subject matter expert and does the staff coordination to facilitate with those external agencies to get assistance to the soldier or their family.

    </p>
     <p>
        <b>  
            For additional information, refer to AR 608-1 and  https://www.armymwr.com/programs-and-services.
        </b>
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
.page {
  overflow: scroll;
}
.graphic {
  width: 70%;
}
</style>