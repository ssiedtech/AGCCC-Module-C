<template>
  <div class="content">
    <div class="course-title">MODULE C <br>Coordinate Personnel Support</div>

    <div class="button-container">
      <span v-for="(titles, index) in $store.state.lessonTitles" :key="titles">
        <button v-if="index != $store.state.lessonTitles.length" class="lesson" :id="'lesson '+ (index + 1)"
          @click="this.$store.commit('changeLesson', index + 1)">
          <span class="button-title" v-html="titles"></span>
          <div class="checkbox-container">
            <img class="checkbox" src="../../assets/checkbox.svg" v-if="$store.state.lessonsCompleted[index]" />
          </div>
          
        </button>
      </span>

    </div>
    <MultiModal v-if="moduleComplete" @click="modal = false">
      <div>You have completed Module C. You can now safely close this window.</div>
    </MultiModal>
  </div>
</template>

<script>
import MultiModal from '@/components/MultiModal.vue'

export default {
  name: 'homePage',
  data() {
    return {
      modal: true,
      finalGrid: '4 / 1'
    }
  },
  components: {
    MultiModal
  },
  //set grid of post test to be at the bottom based on amount of lessons
  mounted() {
    let length = this.$store.state.lessonTitles.length - 1
    let row =  Math.floor((length / 2) + 1)
    let column = 1
    if ((length % 2) == 1)
      column = 2

    this.finalGrid = `${row}/${column}`
    // console.log(this.finalGrid)

    this.$store.commit('allLessonsComplete')

  },
  computed: {
    moduleComplete() {
        return this.$store.state.moduleComplete
    },
  },
}
</script>

<style>

.content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10%;
  width: 100%;
  height: 80%;
  bottom: 0;
  left: 0;
  /* border: 1px solid red; */
}

.button-container {
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: center;
  gap: 5%;
  /* border: 1px solid blue; */
}

.lesson {
  width: 550px;
  height: 50px;
  padding: 1%;
  background-color: #555656;
  border: none;
  font-size: 1vw;
  text-align: left;
  text-wrap: pretty;
  display: grid;
  grid-template-columns: 93% 7%;
  grid-template-rows: 100%;
  /* border: 1px solid red; */
}

.lesson:hover {
  background: #6373ae;
  border-color: #f9e6c4;
  cursor: pointer;
}

.course-title {
  font-size: 1.6vw;
  align-self: center;
  text-align: center;
  font-weight: bold;
  letter-spacing: .3vmin;
  width: 100%;
  /* border: 1px solid red; */
}

.button-title {
  grid-column-start: 1;
  grid-column-end: 1;
  justify-self: flex-start;
  align-self: center;
}

.checkbox-container {
  width: 100%;
  height: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  display: flex;
  justify-content: flex-end;
  /* border: 1px solid red; */
}

.checkbox {
  align-self: center;
  height: 80%;
}
</style>