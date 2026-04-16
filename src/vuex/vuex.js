import { createStore } from 'vuex'
import pipwerks from '@/assets/scorm-api-wrapper.js';

const store = createStore({
  state: {
    pageNum: 1,
    totalPages: [26, 32],
    lessonNum: 1,
    home: true,
    postTest: false,
    completed: false,
    navLock: false,
    loaded: false,
    showModal: false,
    results: false,
    failedTest: false,
    local: false,
    completedCOLs: [],
    missedCOL: 0,
    grade: 0,
    examInfo: '',
    examAnswers: [],
    showNotes: false,
    inLesson: false,
    disableNotes: false,
    testing: false,
    moduleComplete: false,
    lessonTitles: [
      "Manage Command Interest Programs at the S-1 Level",
      "Manage Unit Morale, Welfare and Recreation (MWR) Operations",
    ],
    lessonsCompleted: [
      false,
      false,
    ],
  },
  mutations: {
    nextPage(state) {
      if (state.loaded) {
        state.pageNum += 1
        if (!state.postTest)
          state.loaded = false
      }
    },
    prevPage(state) {
      state.pageNum -= 1
      state.navLock = false
    },
    lockNotes(state) {
      state.disableNotes = true
    },
    unlockNotes(state) {
      state.disableNotes = false

      //If there are notes, we are locking them until they are opened
      state.navLock = true

      //for testing:
      if(state.testing) {
        state.navLock = false
      }
    },
    lockNav(state) {
      state.navLock = true

      //for testing:
      if(state.testing) {
        state.navLock = false
      }
    },
    unlockNav(state) {
      state.navLock = false
    },
    navToggle(state, payload) {
      //if COL check if already completed
      if (payload) {
        if (state.completedCOLs.includes(state.pageNum)) {
          state.navLock = false
        }
        else {
          state.navLock = payload
        }
      }
      else {
        state.navLock = payload
      }
    },
    pageloaded(state) {
      state.loaded = true
    },
    closeModal(state) {
      state.failedTest = false
    },
    //payload is true or false based on correct / incorrect
    submitResults(state, payload) {
      state.results = payload

      //If they missed the answer iterate the missed COL counter
      if (payload == false && !state.completedCOLs.includes(state.pageNum)) {
        state.missedCOL += 1
        //If they missed it twice send them back to page 1
        if (state.missedCOL >= 2) {
          state.pageNum = 1
          state.missedCOL = 0
          state.results = undefined
          state.navLock = false
          state.completedCOLs = new Array()
        }
      }
      state.showModal = true

      //release navlock and add COL to completedCOLs
      if (payload) {
        state.navLock = false
        state.missedCOL = 0
        state.completedCOLs.push(state.pageNum)
      }
    },
    changeLesson(state, payload) {
      // console.log("changing to lesson: ", payload)
      state.lessonNum = payload
      state.pageNum = 1
      state.missedCOL = 0
      state.home = false
      //reset completedCOLs
      state.completedCOLs = new Array()
    },
    goHome(state) {
      state.home = true
      state.completed = false
      state.navLock = false
      state.showNotes = false
      console.log("Lessons Complete:", state.lessonsCompleted)
    },
    setLessonComplete(state, payload) {
      console.log("setting lesson ", payload, "complete")
      state.lessonsCompleted[payload] = true;
    },
    //sets state.moduleComplete to true if all lessons complete and pushes SCORM completions
    allLessonsComplete(state) {
      let isComplete = true
      for(let i = 0; i < state.lessonsCompleted.length; i++) {
        if(state.lessonsCompleted[i] == false) {
          isComplete = false
        }
      }
      if(isComplete) {
        state.moduleComplete = true
        pipwerks.SCORM.data.set("cmi.score.raw", "100");
        pipwerks.SCORM.data.set("cmi.score.scaled", "1");
        pipwerks.SCORM.data.set("cmi.success_status", "passed");
        pipwerks.SCORM.data.set("cmi.completion_status", "completed");
        pipwerks.SCORM.data.save();
        pipwerks.SCORM.quit();
      }
    },
    //adds a completed lesson to suspend data to save module state
    saveModuleProgress(state) {
      let currentProgress = pipwerks.SCORM.get(`cmi.suspend_data`)
      let progressToArray
      //If this is the first lesson being set init the array
      if (currentProgress == 'null') {
        progressToArray = new Array()
      }
      else {
        progressToArray = currentProgress.split('-')
      }
      //if this lesson is not already complete
      if (!progressToArray.includes(state.lessonNum.toString())) {
        progressToArray.push(state.lessonNum)
        //update suspendData
        let newProgress = progressToArray.join("-")
        console.log(typeof newProgress, newProgress)
        pipwerks.SCORM.data.set(`cmi.suspend_data`, newProgress)
      }
    },
  }
});

export default store;