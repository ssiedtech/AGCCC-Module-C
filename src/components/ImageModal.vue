<template>
  <div>
      <div :class="relative != true ? 'frame' : 'relative-frame'">
        <figure>
          <img class="slideImg" :src="getImgUrl(filename)" @click="modal = !modal">
          <figcaption>Click To Enlarge</figcaption>
        </figure>
    </div>
    <!-- The Modal -->
    <div v-if="modal" class="modal">
      <span class="close"></span>
      <img class="modal-content" :src="getImgUrl(filename)">
      <span class="close" @click="modal = !modal">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageModal",
  props: ['filename', 'width', 'height', 'relative'],
  data() {
    return {
      modal: false,
    }
  },
  methods: {
    getImgUrl(filename) {
      return require('@/assets/' + filename)
    },
  }
}
</script>

<style scoped>
.frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: v-bind(width);
  height: v-bind(height);
  margin: auto;
  /* border: 1px solid blue;  */
}

.slideImg {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  transition: 0.3s;
}

.slideImg:hover {
  opacity: 0.7;
}

.modal {
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.95);
}

figure {
  height: 100%;
}

figcaption {
  background-color: transparent;
  color: white;
  font-size: 1.2vmin;
  text-align: center;
  font-style: italic;
}

/* Modal Content (image) */
.modal-content {
  display: block;
  max-width: 90%;
  max-height: 90%;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0)
  }

  to {
    -webkit-transform: scale(1)
  }
}

@keyframes zoom {
  from {
    transform: scale(0)
  }

  to {
    transform: scale(1)
  }
}

/* The Close Button */
.close {
  color: white;
  font-size: 6vw;
  font-weight: bold;
  align-self: flex-start;
  justify-self: flex-end;
}

.close:hover,
.close:focus {
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>

