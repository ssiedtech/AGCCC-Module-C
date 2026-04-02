<template>
  <div class="page" id="content">
    <div class="title">Army Suicide Prevention Program</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/slide19_a.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
       The goal of any Army Suicide Prevention Program is to minimize suicidal behavior among our Soldiers, Family members, Department of the Army (DA) civilians, and retirees. 
    </p>
      <ul>
        <li>(1) As the S-1, it is important that we coordinate with the BDE Chaplain as his/her involvement in the ASPP is critical to the success of the program.</li>
        <li>(2) Additionally, we will establish or help establish a SOP that includes training requirements, preventative measures, and procedures for dealing with Soldiers with suicidal behavior.  The SOP will include reporting procedures IAW the Army Suicide Prevention Program.   It is our role to ensure that our subordinate battalions are aware of the reporting procedures and that they report accurate data in a timely manner.</li>
        <li>(3) Lastly, as new policies and regulations are published, we must extract information critical to our unit and distribute it to the lowest level.</li>
      </ul>
    <p>
        For additional information, refer to AR 600-63, Chapter 1 and Chapter 4.
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