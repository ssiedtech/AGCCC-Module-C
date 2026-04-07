<template>
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-text">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "MultiModal",
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  display: flex;
  background-color: #555656;
  box-shadow: 1.2px 3px 2px black;
  text-align: center;
  overflow-x: auto;
  border-radius: 8px;
  width: 40%;
  z-index: 1000;
  font-size: 2.2vmin;
  min-height: 10%;
  padding: 1.5%;
}

.modal-text {
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>

