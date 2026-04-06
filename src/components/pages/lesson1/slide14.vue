<template>
  <div class="page" id="content">
    <div class="title">Army Voting Assistance Program (AVAP)</div>
    <div class="body-text">
      <ImageModal class="graphic" :filename="'slide14_a.png'" :width="'100%'" :height="'80%'" />
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
       VAOs must make registration and voting information, materials, and assistance readily available to all eligible Army voters and those being all Army Soldiers and their family members, civilian, and contractors regardless of their component.  VAOs must educate eligible voters about the importance of voting and provide every opportunity to register and cast a ballot regardless of where they are located in the world. 
    </p>
    <p>
       Ensuring that VAOs not only meet the appointment requirements such as rank and time remaining on station, it is also important that the VAO is a self-starter and posses a level of maturity that shows they have consideration for the political views of all voters. They must make voters aware of the importance of voting as well as provide registration and voting information in a non-coercive and non-partisan manner.
    </p>
    <p>
        Appoint, in writing, unit VAOs (in the grades of 1LT/SFC or above) in all units with 25 or more permanently assigned members. (Appoint an additional VAO for each 50 unit members above the 25-member base.)
    </p>
      <ul>
        <li>(1) Ensure that an appointed VAO can remain assigned through the election cycle or ensure that a VAO who is scheduled for reassignment is replaced before he or she leaves.</li>
        <li>(2) Ensure that VAOs have attend the Federal Voting Assistance Workshop within 90 days of appointment and know and understand the AVAP support channels.</li>
        <li>(3) Educate and engage eligible voters on the program, suspenses, policies and procedures through unit newsletters, online media, Command and Staff, Training and FRG meetings.</li>
        <li>(4) Ensure that the program is being included and assessed in the Commander's Inspection Program.</li>
        <li>(5) Provide feedback to the chain of command on the program's advantages, challenges and ways to improve.</li>
      </ul>
      <p>
        For additional information, refer to AR 608-20, Chapter 2.
      </p>
  </Teleport>

</template>

<script>
import ImageModal from '@/components/ImageModal.vue'

export default {
  name: 'slideOne',
  mounted() {
    this.$store.commit('pageloaded')
  },
  components: {
    ImageModal,
  },
}
</script>
<style scoped>
.page {
  overflow: scroll;
}
.graphic {
  width: 70%;
}
.body-text {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
}
</style>