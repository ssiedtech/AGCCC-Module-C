<template>
    <div @click="$store.state.showNotes = !$store.state.showNotes" class="notesContainer">
        <div class="notesBox">
            <div class="contentBox">
                <div class="boxContainer">

                    <div class="box1">
                        <div class="lines1"></div>
                    </div>

                    <div class="box2">
                        <div class="lines2"></div>
                    </div>
                    
                    <div class="notesText" id="notes-comp" ref="teleportTarget"></div> <!-- Observer Ref to catch teleport event -->

                    <div class="box3">
                        <div class="lines3"></div>
                    </div>

                    <div class="box4">
                        <div class="lines4"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'notesComp',
    data() {
        return {
            // currentNotes: '',
        }
    },
    mounted() {
        // Create observer for $teleportTarget ref
        this.observer = new MutationObserver(() => {
            this.checkIfEmpty();
        });

        // watch teleport div for child changes
        if (this.$refs.teleportTarget) {
        this.observer.observe(this.$refs.teleportTarget, { 
            childList: true 
        });
        }
    },
    methods: {
        checkIfEmpty() {
            let currentTextContent = this.$refs.teleportTarget.textContent.trim()

            if(currentTextContent === ""){
                //This is currently commented out because it is causing a jitter effect on the icon
            }
            else if(currentTextContent === "N/A") {
                this.$store.commit('lockNotes')
            }
            else {
                this.$store.commit('unlockNotes')
            }
        }
    },
}
</script>

<style>

@keyframes notesContainerAnimation {
  from {background-color: rgba(0, 0, 0, 0.0);}
  to {background-color: rgba(0, 0, 0, 0.5);}
}

@keyframes boxAnim {
    from {opacity: 0;}
    to {opacity: 1;}
}

@keyframes grow {
    
    from {
        width: 0%;
        height: 0%;
    }
    to {
        width: 100%;
        height: 100%;
    }
}

.notesContainer {
    position: absolute;
    width: 100%;
    height: 88%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
    animation: notesContainerAnimation 0.3s ease-out forwards;
    z-index: 3;
}

.notesBox {
    position: relative;
    width: 70%;
    height: 99.9%;
    background-color: #282828;
    border-radius: 12px;
    box-shadow: -1px 10px 15px 1px #000000;
    animation: boxAnim 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notesText {
    font-size: 2vmin;
    overflow: scroll;
    padding: 8px;
    grid-area: text;
}

.contentBox {
    height: 90%;
    width: 90%;
    /* border: 1px solid red; */
}

.boxContainer {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 5% 90% 5%;
    grid-template-columns: 5% 90% 5%;
    grid-template-areas:
        "box1 text box2"
        ". text ."
        "box3 text box4";
    /* border: 1px solid red; */
}

.box1 {
    grid-area: box1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

.box2 {
    grid-area: box2;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
}

.box3 {
    grid-area: box3;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
}

.box4 {
    grid-area: box4;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

.lines1 {
    width: 100%;
    height: 100%;
    border-top: 1px solid white;
    border-left: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1.5s;
}

.lines2 {
    width: 100%;
    height: 100%;
    border-top: 1px solid white;
    border-right: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1.5s;
}

.lines3 {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1.5s;
}

.lines4 {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1.5s;
}

</style>
