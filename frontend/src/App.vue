<template>
  <v-wait for="video">
        <template>
            <div id="spinner">
                <div class="spinner-circle"></div>
            </div>
        </template>

        <SidebarComponent :vidSorted="vidSorted" :icons="icons" @ClickedVideoID="changeVideoID" />
        <ButtonsComponent  @isMuted="ToggleMute" :videoURL="videoURL" @PlayRandomVideo="PlayRandomVideo" :videoID="videoID" />
        <IframeComponent :Muted="Muted" :videoID="videoID"/>
    </v-wait>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue'
import ButtonsComponent from './components/Global/ButtonsComponent.vue'
import IframeComponent from './components/IframeComponent.vue'
import axios from 'axios'

export default {
  name: "HomeComponent",
  components: {
    SidebarComponent,
    ButtonsComponent,
    IframeComponent
  },
  data(){
    return {
      videoURL: '',
      videoID: '',
      vidSorted: [],
      icons: [],
      Muted: true
    }
  },
  methods: {
    ToggleMute(value){
        this.Muted = value
    },
    PlayRandomVideo(){
      let randomIndex = Math.floor(Math.random() * this.vidSorted.length);
      this.changeVideoID(this.vidSorted[randomIndex].vid)
    },
    changeVideoID(videoID){
      this.videoID = `${videoID}`
      this.videoURL = `https://www.youtube.com/watch?v=${videoID}`;
    }
  },
  async created() {
    this.$wait.start('video');

    let VidUsedIndexes = [];
    let NewVideosIndexes = [];

    const videosData = await axios.get('http://localhost:3000/api/getvideos');
    const iconsData = await axios.get('http://localhost:3000/api/geticons');

    const videos = videosData.data.data
    const icons = iconsData.data.data

    for (let i = 0; i < videos.length; i++) {
        let randomIndex = Math.floor(Math.random() * videos.length);
        while(VidUsedIndexes.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * videos.length);
        }
        VidUsedIndexes.push(randomIndex);
        NewVideosIndexes.push({
            id: randomIndex, 
            vid: videos[randomIndex].vid, 
            country: videos[randomIndex].country, 
            place: videos[randomIndex].place, 
            continent: videos[randomIndex].continent,
            weather: videos[randomIndex].weather,
            type: videos[randomIndex].type
        });
    }
    this.vidSorted = NewVideosIndexes
    this.icons = icons
    const randomIndex = Math.floor(Math.random() * this.vidSorted.length);
    const randomVideo = this.vidSorted[randomIndex].vid;
    
    this.changeVideoID(randomVideo);

    this.$wait.end('video');
   },
}
</script>