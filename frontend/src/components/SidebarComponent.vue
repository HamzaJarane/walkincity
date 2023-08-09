<template>
<div id="sidebar" class="sidebar" :class="{ 'open': open }">
    <ToggleSideBar @OpenSideBar="ToggleSideBar" />
    
    <ul>
      <WeatherFilterButtons :open="open"/>
      <ContinentFilterButtons :open="open"/>

      <div id="video-list">
          <!--<hr style=" border: 1px groove white;width: 238px;margin: auto;position: absolute;right: 100%;"> -->
          <div v-for="video in videos" :key="video.id">              
              <li @click="$emit('ClickedVideoID', video.vid)" :class="video.weather" id="result-uv" :data-weather-term="video.weather"  :data-search-term="video.vid">
                  {{video.country}}, {{video.place}}
                  <i :class="changeIconsText(video.weather)"></i>
              </li>
          </div>
      </div>
  </ul>
</div>
</template>

<script>
import ContinentFilterButtons from './SideBar/ContinentFilterButtons.vue'
import ToggleSideBar from './SideBar/ToggleSideBar.vue'
import WeatherFilterButtons from './SideBar/WeatherFilterButtons.vue'

export default {
  name: 'SideBarComponent',
  components: {
    ToggleSideBar,
    WeatherFilterButtons,
    ContinentFilterButtons
  },
  props: {
    vidSorted: Array,
    icons: Array
  },
  data(){
    return {
      open: false,
      videos: this.vidSorted
    }
  },
  methods: {
    changeIconsText(icon){
        for( let i = 0; i < this.icons.length; i++ ) { 
            if (icon == this.icons[i].old) { 
                return this.icons[i].new;
            }
        }
    },
    ToggleSideBar(){
      this.open = !this.open
    }
  }
}
</script>
