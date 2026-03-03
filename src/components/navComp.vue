<template>
  <div class="nav-buttons">
    <div class="left-arrow">
      <img v-if="$store.state.pageNum > 1" class="arrow" src="../assets/left-arrow.png" @click="$store.commit('prevPage')" id="nav-left">
    </div>
    <div class="right-arrow">
      <img v-if="$store.state.pageNum < $store.state.totalPages[$store.state.lessonNum - 1] && !$store.state.navLock" class="arrow" src="../assets/right-arrow.png" @click="$store.commit('nextPage')" id="nav-right">
    </div>
  </div>
  <div class="progress-area"></div>
</template>

<script>

export default {
  name: 'navComp',
  components: {
  }
}
</script>

<style>
  .nav-buttons {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    grid-template-areas:
      "left right";
    /* border: 1px solid red; */
  }

  .progress-area {
    grid-area: progress;
  }

  .left-arrow {
    display: flex;
    height: 100%;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
  }

  .right-arrow {
    display: flex;
    height: 100%;
    width: 100%;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    /* border: 1px solid red; */
  }

  .arrow:hover {
    opacity: 0.7;
  }

  .arrow {
    width: 35%;
    /* border: 1px solid red; */
  }

</style>
