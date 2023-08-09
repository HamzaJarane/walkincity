<template>
  <div class="ytplayer">
    <VueYtframe
      :video-id="videoID"
      :player-vars="{ autoplay: 1 }"
      @state-change="onPlayerStateChange"
      @ready="OnReady"
    />
  </div>
</template>

<script>
export default {
  name: 'IframeComponent',
  props: {
    videoID: String,
    Muted: Boolean
  },
  data() {
    return {
      playerInstance: null
    };
  },
  methods: {
    onPlayerStateChange(player) {
      if(player.getPlayerState() === 1){
        console.log("Player is playing")
      }
      
      if(player.getPlayerState() === 2){
        player.seekTo(60)
        player.playVideo()
      }
    },
    OnReady(player){
      this.playerInstance = player;
      player.mute()
      player.seekTo(60)
      player.playVideo()
      console.log("Player is ready")
    },
    updateMuteState(value) {
      if (this.playerInstance) {
        if (value) {
          this.playerInstance.mute();
        } else {
          this.playerInstance.unMute();
        }
      }
    }
  },
  watch: {
    Muted(value){
      this.updateMuteState(value);
    },
  },
}
</script>