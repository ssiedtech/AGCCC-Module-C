<template>
    <div class="question-container">
        <p class="question-text">{{ question }}</p>
        <div class="choices">
            <button v-for="choice in choices" :key="choice" @click="selectAnswer(choice)" :class="isSelected(choice)">
                {{ choice }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "multiComp",
    data() {
        return {
            currentAnswer: '',
            correct: false
        }
    },
    props: ['question', 'choices', 'correctAnswer'],
    methods: {
        selectAnswer(answer) {
            this.currentAnswer = answer
            if (this.currentAnswer == this.correctAnswer)
                this.correct = true
            else
                this.correct = false
        },
        // will update selected buttons color to show whether the answer is correct or not. 
        // the correct answer will not be shown if the currentAnswer prop is not set. (Use this for exams)
        isSelected(answer) {
            if (answer == this.currentAnswer) {
                if (this.correctAnswer == null)
                    return "selected"

                else if (answer == this.correctAnswer)
                    return "correct"

                else
                    return "wrong"
            }
            else {
                return "choice-button"
            }
        }
    },
}
</script>

<style scoped>
.question-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid red; */
}

.question-text {
    width: 90%;
    font-weight: bold;
    white-space: pre-wrap;
    text-align: center;
    margin-bottom: 10px;
}

.choices {
    display: flex;
    height: 85%;
    /* width: 80%; */
    min-width: 15%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 2%;
    /* border: 1px solid blue; */
}

.choice-button {
    border: none;
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    color: white;
    background-color: #111626;
    cursor: pointer;
    padding: 10px;
    box-shadow: 1px 2px 1px black;
}

.wrong {
    border: none;
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    padding: 10px;
    box-shadow: 1px 2px 1px black;
    background-color: #a82a39;
}

.correct {
    border: none;
    width: 100%;
    border-radius: 10px;
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    padding: 10px;
    box-shadow: 1px 2px 1px black;
    background-color: green;
}
</style>
