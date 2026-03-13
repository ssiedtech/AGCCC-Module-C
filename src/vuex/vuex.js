import { createStore } from 'vuex'
import pipwerks from '@/assets/scorm-api-wrapper.js';

const store = createStore({
  state: {
    pageNum: 1,
    totalPages: [4, 22, 48, 20, 18, 25, 25],
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
    lessonTitles: [
      "Manage Enlisted Promotions",
      "Manage Line of Duty (LOD) Investigations",
      "Manage Military Pay and Allowances",
      "Manage Officer Promotions",
      "Manage the Evaluations Reporting System",
      "Manage the HRC Information Management System (HRC-IMS)"
    ],
    lessonsCompleted: [
      false,
      false,
      false,
      false,
      false,
      false
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
      console.log("changing to lesson: ", payload)
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
    },
    goPostTest(state) {
      state.lessonNum = state.lessonTitles.length
      state.pageNum = 1
      state.home = false
      state.postTest = true
      state.navLock = false
    },
    setLessonComplete(state, payload) {
      state.lessonsCompleted[payload] = true;
    },
    shuffleExam(state) {
      // randomize the order of the questions
      let ans = state.examInfo
      state.examInfo = []
      for (let length = ans.length; length > 0; length--) {
        let i = Math.floor(Math.random() * (length - 1 + 1)) + 1

        // Ramdomizes the order of the choices of the question unless the question is a True or False
        if (ans[i - 1].questionType != "True or False") {
          let choices = ans[i - 1].selections
          ans[i - 1].selections = []
          //Check for an 'All the Above' answer to ensure its still at the bottom after a shuffle
          let ATA = false
          for (let len = choices.length; len > 0; len--) {
            let j = Math.floor(Math.random() * (len - 1 + 1)) + 1
            if (choices[j - 1] == "All the Above") {
              ATA = true
            }
            else {
              ans[i - 1].selections.push(choices[j - 1])
              choices.splice(j - 1, 1);
            }
          }
          if (ATA) {
            ans[i - 1].selections.push("All the Above")
          }
        }

        // If a matching question, Randomized the order of definitions
        if (ans[i - 1].questionType == "Matching") {
          let def = ans[i - 1].definitions
          ans[i - 1].definitions = []
          for (let len = def.length; len > 0; len--) {
            let j = Math.floor(Math.random() * (len - 1 + 1)) + 1
            ans[i - 1].definitions.push(def[j - 1])
            def.splice(j - 1, 1);
          }
        }

        state.examInfo.push(ans[i - 1])
        ans.splice(i - 1, 1);
      }
    },
    initializeExamAnswers(state) {
      for (let i = 0; i < state.totalPages[state.lessonTitles.length - 1]; i++) {
        state.examAnswers.push(null)
      }
    },
    changeAnswer(state, payload) {
      state.examAnswers[state.pageNum - 1] = payload;
      console.log(state.examAnswers)
    },
    submitPostTest(state) {
      let correct = 0
      let i = 0
      state.examInfo.forEach(value => {
        if (state.examAnswers[i] != null) {
          if (value.questionType == "Matching") {
            let j = 0
            let subcorrect = 0
            value.definitions.forEach(def => {
              if (def.key == state.examAnswers[i][j]) {
                subcorrect++
              }
              j++
            })
            if (subcorrect == value.definitions.length) {
              correct++
            }
          }
          else {
            if (value.correctAnswer == state.examAnswers[i]) {
              correct++
            }
          }
        }
        i++
      })

      state.grade = correct / state.examInfo.length
      console.log("grade is:", state.grade)

      //if you failed return home
      if (state.grade < 0.80) {
        state.home = true
        state.completed = false
        state.navLock = false
        state.failedTest = true

        //reset exam answers
        state.examAnswers = new Array()
        for (let i = 0; i < state.totalPages[state.lessonTitles.length - 1]; i++) {
          state.examAnswers.push(null)
        }
      }
      //you passed the test
      else {
        state.completed = true
        state.postTest = false
        console.log(correct)
        console.log(state.grade)

        pipwerks.SCORM.data.set("cmi.score.min", "0");
        pipwerks.SCORM.data.set("cmi.score.max", "100");
        pipwerks.SCORM.data.set("cmi.score.raw", `${(state.grade * 100).toFixed(2)}`);
        pipwerks.SCORM.data.set("cmi.score.scaled", `${state.grade}`);
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
    local(state) {
      state.local = true
    }
  }
});

export default store;