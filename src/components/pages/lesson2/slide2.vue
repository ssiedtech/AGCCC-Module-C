<template>
  <div class="page" id="content">
    <div class="title">Operational Variables (OE)</div>
    <div class="body-text">
      <img class="graphic" src="../../../assets/image10.png">
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <ol>
      <li>
        The OE is a forward-looking effort to more accurately discern the challenges the Army will face at the operational level of war and determine its inherent implications.  The OE describes the composite conditions, circumstances, and influences that affect commanders' decisions on the employment of military capabilities.  Analysis of the OE identifies potential implications for the U.S. Army training, experimentation, and doctrinal development communities; establishes the framework for thinking about threat capabilities and environmental influences on conflict; and identifies points of reference necessary for guiding the capabilities-based model for force development.
      </li><br>
      <ol type="a">
        <li>
          Political - Describes the distribution of responsibility and power at all levels of governance formally.
        </li>
        <li>
          Military - constituted authorities, as well as informal or covert political powers Explores the military and paramilitary capabilities of all relevant actors (enemy, friendly, and neutral) in a given operational environment.
        </li>
        <li>
          Economic - Encompasses individual and group behaviors related to producing, distributing, and consuming resources. 
        </li>
        <li>
          Social - Describes the cultural, religious, and ethnic makeup within an operational environment and the beliefs, values, customs, and behaviors of society members.
        </li>
        <li>
          Information - Describes the nature, scope, characteristics, and effects of individuals, organizations, and systems that collect, process, disseminate, or act on information. 
        </li>
        <li>
          Infrastructure - Is composed of the basic facilities, services, and installations needed for the functioning of a community or society.
        </li>
        <li>
          Physical - environment Includes the geography and manmade structures, as well as the climate and weather in the area of operations. 
        </li>
        <li>
          Time - Describes the timing and duration of activities, events, or conditions within an operational environment, as well as how the timing and duration are perceived by various actors in the operational environment.
        </li>
      </ol><br>
      <li>What challenges is the military facing based on the Operational Variables (OE)?</li>
    </ol>
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