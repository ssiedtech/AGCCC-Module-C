<template>
    <div @click="$store.state.showNotes = !$store.state.showNotes" class="notesContainer">
        <div class="notesBox">
            <div class="contentBox">
                <div class="notesText" id="notes-comp"></div>
                <!-- <div class="boxContainer">
                    <div class="box1"></div>
                    <div class="box2"></div>
                    <div class="box3"></div>
                    <div class="box4"></div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'notesComp',
  components: {
  },
  mounted() {
    console.log("Notes has reached Mounted()")
  },
  beforeUnmount() {
    console.log("Notes has reached beforeUnmount()")
  }
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
    height: 100%;
    overflow: scroll;
    padding: 8px;
    /* border: 1px solid red; */
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
        "box1 . box2"
        ". . ."
        "box3 . box4";
}

.box1 {
    grid-area: box1;
    width: 100%;
    height: 100%;
    border-top: 1px solid white;
    border-left: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1s;
}

.box2 {
    grid-area: box2;
    width: 100%;
    height: 100%;
    border-top: 1px solid white;
    border-right: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1s;
}

.box3 {
    grid-area: box3;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1s;
}

.box4 {
    grid-area: box4;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
    animation-delay: 0.3s;
    animation: grow 1s;
}

</style>
