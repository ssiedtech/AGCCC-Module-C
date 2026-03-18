<template>
  <div class="content">
    <div class="course-title">MODULE C <br>Coordinate Personnel Support</div>

    <div class="button-container">
      <span v-for="(titles, index) in $store.state.lessonTitles" :key="titles">
        <button v-if="index != $store.state.lessonTitles.length" class="lesson" :id="'lesson '+ (index + 1)"
          @click="this.$store.commit('changeLesson', index + 1)">
          <span v-html="titles"></span>
          <img src="../../assets/checkbox.svg" class="checkbox" v-if="$store.state.lessonsCompleted[index]" />
        </button>
      </span>

    </div>
    <MultiModal v-if="modal" @click="modal = false">
      <div>Please complete all lessons before attempting the Post-Test.</div>
    </MultiModal>
  </div>
</template>

<script>
import MultiModal from '@/components/MultiModal.vue'

export default {
  name: 'homePage',
  components: {
    MultiModal
  },
  data() {
    return {
      modal: false,
      finalGrid: '4 / 1'
    }
  },
  //set grid of post test to be at the bottom based on amount of lessons
  mounted() {
    let length = this.$store.state.lessonTitles.length - 1
    let row =  Math.floor((length / 2) + 1)
    let column = 1
    if ((length % 2) == 1)
      column = 2

    this.finalGrid = `${row}/${column}`
    console.log(this.finalGrid)
  },
  methods: {
    goToPostTest() {
      if (this.$store.state.lessonsCompleted.includes(false))
        this.modal = true
      else
        this.$store.commit('goPostTest')
    },
  }
}
</script>

<style>

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10%;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
}

/* .button-container {
  display: grid;
  justify-self: center;
  grid-template-rows: 33% 33% 33%;
  grid-template-columns: 50% 50%;
  grid-auto-flow: column;
  width: 90%;
  height: 25%;
  border: 1px solid blue;
  margin-left: 10%;
} */

.button-container {
  display: flex;
  align-self: flex-end;
  width: 90%;
  height: 25%;
  /* border: 1px solid blue; */
  justify-content: center;
  /* margin-left: 10%; */
}

.lesson,
.lesson-post-test {
  width: 80%;
  padding: 1%;
  padding-left: 3%;
  background-color: #555656;
  /* background-color: #111626; */
  border: none;
  font-size: 1vw;
  text-align: left;
}

.lesson:hover,
.lesson-post-test:hover {
  background: #6373ae;
  border-color: #f9e6c4;
  cursor: pointer;
}

/* .lesson-post-test {
  grid-area: v-bind(finalGrid);
} */

.course-title {
  font-size: 1.6vw;
  align-self: center;
  text-align: center;
  font-weight: bold;
  letter-spacing: .3vmin;
}

.checkbox {
  width: 3.5%;
  float: right;
  color: #be9854;
}
</style>