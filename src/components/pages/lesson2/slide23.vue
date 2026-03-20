<template>
  <div class="page" id="content">
    <div class="title">Funding Categories:  Category B - Community Support Programs</div>
    <div class="body-text">
      <ul>
        <li>Arts and crafts</li>
        <li>Automotive Skill (includes self help car wash)</li>
        <li>Bowling centers (12 lanes or fewer)</li>
        <li>Cable/community TV</li>
        <li>Child, Youth, and School Services (CYSS)</li>
        <li>Entertainment (performing arts: music, drama, theater)</li>
        <li>Information, ticketing, and registration services</li>
        <li>Outdoor recreation programs; examples include;</li>
          <ul>
            <li>Archery ranges</li>
            <li>Beach facilities, including bathhouses, and lifeguard stations</li>
            <li>Recreational vehicles/campgrounds, small</li>
            <li>Garden plots</li>
            <li>High adventure activity areas (such as adventure training, hand gliding, rappelling facilities)</li>
            <li>Hunting/fishing areas and control stations</li>
            <li>Marinas without retail sales, or private boat berthing</li>
            <li>Off road vehicle areas and trails</li>
            <li>Outdoor recreation checkout centers (includes tents, coolers, sleeping bags, stoves, water and snow skis, canoes, jon boats, bicycles, and other program related equipment, such as chain saws lawn mowers, boats and trailers designed for overnight use, and resale activities which are Considered category C programs, and must be funded with NAFs)</li>
            <li>Stables (Government owned or lease horses for recreational riding)</li>
          </ul>
        <li>Sports above intermural level (including athletic courts, fields and courses)</li>
        <li>Swimming Pools (recreational/stand alone)</li>
        <li>World Class Athlete Program</li>
      </ul>
    </div>
  </div>

  <!-- NOTES -->
  <Teleport to="#notes-comp">
    <p>
      For additional information, refer to AR 215-1, Figure 3-1.
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
  width: 40%;
}
.body-text {
  text-align: left;
}
li {
  margin-bottom: 5px;
}
</style>