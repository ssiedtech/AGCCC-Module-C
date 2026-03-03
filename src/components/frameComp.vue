<template>
    <div class="frame-content">
        <div class="header1-area">
            <!-- <img class="left-line" src="../assets/line-left.svg"> -->
        </div>
        <div class="header3-area">
            <nav-comp v-if="!$store.state.home && !$store.state.completed" />
        </div>
        <div class="content-area-flex">
            <div class="content-area">
                <component :is="asyncPageName"></component>
            </div>
        </div>
        <div class="footer3-area">
            <div class="page-counter">
                <span v-if="!$store.state.home && !$store.state.completed">
                    {{ $store.state.pageNum }}/{{ $store.state.totalPages[$store.state.lessonNum - 1] }}
                </span>
            </div>
            <div v-if="!this.isHome" class="total-percent-lesson">
                <div class="progress"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import navComp from "./navComp.vue"
import pipwerks from '@/assets/scorm-api-wrapper.js'

export default {
    name: 'frameComp',
    components: {
        navComp
    },
    data() {
        return {
            active: pipwerks.SCORM.connection.isActive,
        }
    },
    mounted() {
        var url = window.location.origin
        if (url.includes('clle.blackboard.com')) {
            setInterval(() => {
                this.active = pipwerks.SCORM.connection.isActive
                console.log("CHECKING CONNECTION", pipwerks.SCORM.connection.isActive)
            }, 5000)
        }
        else {
            this.active = true
        }
    },
    computed: {
        asyncPageName() {
            if (this.active) {
                if (this.$store.state.home)
                    return defineAsyncComponent(() => import(`@/components/pages/homePage`));
                else if (this.$store.state.postTest)
                    return defineAsyncComponent(() => import(`@/components/pages/postTest`));
                if (this.$store.state.completed)
                    return defineAsyncComponent(() => import(`@/components/pages/completedPage`));
                else {
                    var page = this.$store.state.pageNum;
                    var lesson = this.$store.state.lessonNum;
                    return defineAsyncComponent(() => import(`@/components/pages/lesson${lesson}/slide${page}`));
                }
            }
            else {
                if (this.$store.state.completed)
                    return defineAsyncComponent(() => import(`@/components/pages/completedPage`));
                else
                    return defineAsyncComponent(() => import(`@/components/pages/connectionLostPage`));
            }
        },
        progress() {
            return (this.$store.state.pageNum / this.$store.state.totalPages[this.$store.state.lessonNum - 1] * 100) + "%"
        },
        isHome() {
            return this.$store.state.home
        }
    }
}
</script>

<style>
.frame-content {
    background-color: #282828;
    font-size: 2.3vh;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 15% 75% 10%;
    grid-template-columns: 0.4fr 10fr 1.5fr;
    grid-template-areas:
        "header1 content header3"
        ". content ."
        "footer1 content footer3";
}

.content-area-flex {
    height: 100%;
    width: 100%;
    display: flex;
    grid-area: content;
    align-items: center;
    justify-content: center;
}

.content-area {
    height: 92%;
    width: 95%;
    /* border: 1px solid red; */
}

.header1-area {
    height: 100%;
    width: 100%;
    grid-area: header1;
    /* border: 1px solid green; */
}

.header3-area {
    height: 100%;
    width: 100%;
    grid-area: header3;
}

.footer3-area {
    height: 100%;
    width: 100%;
    grid-area: footer3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* gap: 25%; */
    /* border: 1px solid blue; */
}

.page-counter {
    align-self: center;
    font-size: 2vmin;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100;
    }
}

/* style shared in all slides */
.page{
  width: 100%;
  height: 100%;
}

.title {
    /* font-size: 3vh; */
    font-size: 3vmin;
    margin-bottom: 6.4vmin;
    text-align: center;
}

.body-text {
    font-size: 2vmin;
    text-align: center;
}

.homebutton {
    color: black;
    width: 100%;
    max-width: 455px;
    text-align: center;
    margin-top: 8vmin;
    height: 7vh;
    background-color: #be9854;
    border-radius: 5px;
    z-index: 1;
    font-size: 100%;
    cursor: pointer;
    z-index: 1;
}

/* .total-percent-lesson { 
    border-radius: 10px;
    position: absolute;
    bottom: 3%;
    right: 2%;
    z-index: 2;
    background: #BEBEBF;
    width: 10%;
    height: 1%;
} */

.total-percent-lesson { 
    border-radius: 10px;
    position: relative;
    z-index: 2;
    background: #BEBEBF;
    width: 80%;
    height: 10%;
}

.progress {
    border-radius: 10px;
    background: #1f5373;
    width: v-bind(progress);
    z-index: 3;
    transition: width .3s;
    height: 100%;
}

@media(max-width: 1600px) {
    .page {
        overflow-y: auto;
    }
}

</style>
