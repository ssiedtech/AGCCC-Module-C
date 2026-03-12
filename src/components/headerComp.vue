<template>
  <div class="header gradient">
    <div class="home">
      <img class="home-icon" src="../assets/home.png" @click="goHome()">
    </div>

    <div class="titles">
      <div class="title-text">ADJUTANT GENERAL SCHOOL |<span class="ccc-text"> CAPTAIN CAREER COURSE</span></div>
      <div class="lesson-title" v-if="!$store.state.home && !$store.state.completed"><span v-html="$store.state.lessonTitles[$store.state.lessonNum - 1]"></span></div>
    </div>

    <div class="icons">
      <img @click="$store.state.showNotes = !$store.state.showNotes" class="notes-icon" src="../assets/notes.png">
      <img class="crest-icon" src="../assets/ags_crest.png">
    </div>
  </div>
  <notes-comp v-show="$store.state.showNotes" />
</template>

<script>
import notesComp from "./notesComp.vue"

export default {
  name: 'headerComp',
  components: {
    notesComp,
  },
  methods: {
    goHome() {
      if (!this.$store.state.postTest && !this.$store.state.completed)
        this.$store.commit('goHome')
    },
  }
}
</script>

<style>

.header {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 8% 80% 12%;
  grid-template-areas:
    "home titles icons"
}

.home {
  grid-area: home;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
}

.titles {
  grid-area: titles;
  height: 68%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* border: 1px solid blue; */
}

.icons {
  grid-area: icons;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid green; */
}

.gradient { 
  background : -moz-linear-gradient(101.54% 102.15% 174.83deg,rgba(31, 39, 49, 1) 0.06%,rgba(32, 38, 45, 1) 9.04%,rgba(34, 36, 37, 1) 39.25%,rgba(35, 35, 35, 1) 99.58%); background : -webkit-linear-gradient(174.83deg, rgba(31, 39, 49, 1) 0.06%, rgba(32, 38, 45, 1) 9.04%, rgba(34, 36, 37, 1) 39.25%, rgba(35, 35, 35, 1) 99.58%); background : -webkit-gradient(linear,101.54% 102.15% ,-0.4% -1% ,color-stop(0.0006,rgba(31, 39, 49, 1) ),color-stop(0.0904,rgba(32, 38, 45, 1) ),color-stop(0.3925,rgba(34, 36, 37, 1) ),color-stop(0.9958,rgba(35, 35, 35, 1) )); background : -o-linear-gradient(174.83deg, rgba(31, 39, 49, 1) 0.06%, rgba(32, 38, 45, 1) 9.04%, rgba(34, 36, 37, 1) 39.25%, rgba(35, 35, 35, 1) 99.58%); background : -ms-linear-gradient(174.83deg, rgba(31, 39, 49, 1) 0.06%, rgba(32, 38, 45, 1) 9.04%, rgba(34, 36, 37, 1) 39.25%, rgba(35, 35, 35, 1) 99.58%); -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#1F2731', endColorstr='#232323' ,GradientType=0)"; background : linear-gradient(-84.83deg, rgba(31, 39, 49, 1) 0.06%, rgba(32, 38, 45, 1) 9.04%, rgba(34, 36, 37, 1) 39.25%, rgba(35, 35, 35, 1) 99.58%); box-shadow : 3.63px 2.72px 2.72px rgba(0, 0, 0, 0.36); filter: progid:DXImageTransform.Microsoft.dropshadow(OffX=3.63, OffY=2.72, Color='#000000') progid:DXImageTransform.Microsoft.gradient(startColorstr='#1F2731',endColorstr='#232323' , GradientType=1);
}

.home-icon {
  height: 30%;
  cursor: pointer;
}

.notes-icon {
  height: 45%;
  /* border: 1px solid red; */
}

.crest-icon {
  height: 55%;
  /* border: 1px solid red; */
}

.title-text {
  color: white;
  font-size: 2.5vmin;
  font-weight: bold;
  letter-spacing: .4vmin;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  /* border: 1px solid red; */
}

.ccc-text {
  font-weight: normal;
  letter-spacing: normal;
  font-size: 2vmin;
}

.lesson-title {
  color: white;
  font-size: 2vmin;
  font-family: Arial, Helvetica, sans-serif;
}
</style>