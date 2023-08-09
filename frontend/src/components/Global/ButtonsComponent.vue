<template>
    <div id="player-container">
        <div id="notification" class="notification">
            <p>Copied!</p>
        </div>
    </div>

    <button 
        class="btn-crn" 
        @click="toggleFullScreen" 
        style="top: 134px !important;right: 17px !important;"
        ><i :class="isFullScreen ? 'fa-solid fa-compress':'fa-solid fa-expand'"></i>
    </button>

    <button 
        @click="playRandomVideo"
        class="btn-crn"
        style="top: 100px !important;right: 18px !important;"
        ><i class="fa-solid fa-dice-five"></i>
    </button>

    <button 
        @click="openVideoURL"
        class="btn-crn"
        style="top: 170px !important;right: 15px !important;"
        ><i class="fa-brands fa-youtube"></i>
    </button>

    <button
        @click="copyURL"
        class="btn-crn" style="top: 205px !important;right: 15px !important;"
        ><i class="fa-solid fa-share"></i>
    </button>

    <button 
        onclick="window.open('/info')" 
        class="btn-crn" 
        style="top: 238px;right: 16px !important;width: 32px;"
        ><i class="fa-solid fa-info"></i>
    </button>

    <button 
        @click="toggleVideoSound"
        class="btn-crn"
        ><i :class="isMuted ? 'fa-solid fa-volume-xmark' : 'fa-solid fa-volume-high'" ></i>
    </button>
</template>


<script>

export default {
  name: 'ButtonsComponent',
  props: {
    videoURL: String,
    videoID: String
  },
  data() {
    return {
        isFullScreen: false,
        isMuted: true
    }
  },
  methods: {
    toggleFullScreen(){
        this.isFullScreen = !this.isFullScreen
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    },
    toggleVideoSound(){
        this.isMuted = !this.isMuted
        this.$emit('isMuted', this.isMuted);
    },
    async copyURL(){
        await navigator.clipboard.writeText("https://walkin.city/?v="+this.videoID);
        document.getElementById("notification").classList.remove("notification-hide");
        document.getElementById("notification").classList.add("notification-show");
        setTimeout(() => {
            document.getElementById("notification").classList.add("notification-hide");
            document.getElementById("notification").classList.remove("notification-show");
        }, 2000)
    },
    openVideoURL(){
        window.location.href = this.videoURL;
    },
    playRandomVideo(){
        this.$emit('PlayRandomVideo', true);
    }
  }
}

</script>