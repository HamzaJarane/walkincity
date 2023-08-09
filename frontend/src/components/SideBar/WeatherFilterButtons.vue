<template>
    <button @click="toggleActive(0)" :style="style" :class="{ 'buttons-filter-active' : isActive[0] }" class="buttons-filter btn-filter" id="btn-weather" title="All" data-weather-term="weather-all"><i class="fa-solid fa-list"></i></button>
    <button @click="toggleActive(1)" :style="style" :class="{ 'buttons-filter-active' : isActive[1] }" class="buttons-filter btn-filter" id="btn-weather" title="Normal day" data-weather-term="weather-normal-morning"><i class="fa-solid fa-sun"></i></button>
    <button @click="toggleActive(2)" :style="style" :class="{ 'buttons-filter-active' : isActive[2] }" class="buttons-filter btn-filter" id="btn-weather" title="Night Rain" data-weather-term="weather-rain-night"><i class="fa-solid fa-cloud-moon-rain"></i></button>
    <button @click="toggleActive(3)" :style="style" :class="{ 'buttons-filter-active' : isActive[3] }" class="buttons-filter btn-filter" id="btn-weather" title="Cloudy day" data-weather-term="weather-cloud-morning"><i class="fa-solid fa-cloud"></i></button>
    <br>
    <button @click="toggleActive(4)" :style="style" :class="{ 'buttons-filter-active' : isActive[4] }" class="buttons-filter btn-filter" id="btn-weather" title="Snowing during the day" data-weather-term="weather-snow-morning"><i class="fa-regular fa-snowflake"></i></button>
    <button @click="toggleActive(5)" :style="style" :class="{ 'buttons-filter-active' : isActive[5] }" class="buttons-filter btn-filter" id="btn-weather" title="Night" data-weather-term="weather-normal-night"><i class="fa-solid fa-moon"></i></button>
    <button @click="toggleActive(6)" :style="style" :class="{ 'buttons-filter-active' : isActive[6] }" class="buttons-filter btn-filter" id="btn-weather" title="Snowing during the night" data-weather-term="weather-snow-night"><i class="fa-solid fa-cloud-meatball"></i></button>
    <button @click="toggleActive(7)" :style="style" :class="{ 'buttons-filter-active' : isActive[7] }" class="buttons-filter btn-filter" id="btn-weather" title="Raining during the day" data-weather-term="weather-rain-morning"><i class="fa-solid fa-cloud-rain"></i></button>
</template>

<script>
export default({
    name: 'WeatherFilterButtons',
    props:{
        open: Boolean
    },
    data(){
        return {
            isActive: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            style: 'display: none'
        }
    },
    methods: {
        toggleActive(i) {
            if(i == 0){
                this.isActive[0] = !this.isActive[0]
                for (let j=1;j < this.isActive.length;++j){
                    this.isActive[j] = false
                }
            } else {
                this.isActive[0] = false
                this.isActive[i] = !this.isActive[i];
            }
        }
    },
    watch: {
        open(value) {
            if(value){
                this.style = ''
            } else {
                this.style = 'display: none'
            }
        }
    }
})
</script>