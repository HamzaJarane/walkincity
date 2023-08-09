<template>
    <br>
    <br>
    <button @click="toggleActiveContinent(0)" :style="style" :class="{ 'buttons-filter-active' : isActive[0] }" title="Global" class="buttons-filter btn-filter"><i class="fa-solid fa-globe"></i></button>
    <button @click="toggleActiveContinent(1)" :style="style" :class="{ 'buttons-filter-active' : isActive[1] }" title="Africa" class="buttons-filter btn-filter"><i class="fa-solid fa-earth-africa"></i></button>
    <button @click="toggleActiveContinent(2)" :style="style" :class="{ 'buttons-filter-active' : isActive[2] }" title="Americas" class="buttons-filter btn-filter"><i class="fa-solid fa-earth-americas"></i></button>
    <button @click="toggleActiveContinent(3)" :style="style" :class="{ 'buttons-filter-active' : isActive[3] }" title="Oceania" class="buttons-filter btn-filter"><i class="fa-solid fa-earth-oceania"></i></button>
    <br>
    <button @click="toggleActiveContinent(4)" :style="style" :class="{ 'buttons-filter-active' : isActive[4] }" title="Europe" class="buttons-filter btn-filter"><i class="fa-solid fa-earth-europe"></i></button>
    <button @click="toggleActiveContinent(5)" :style="style" :class="{ 'buttons-filter-active' : isActive[5] }" title="Asia" class="buttons-filter btn-filter"><i class="fa-solid fa-earth-asia"></i></button>
    <br>
</template>

<script>
export default({
    name: 'ContinentFilterButtons',
    props: {
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
                false
            ],
            continents: [
                'Global',
                'Africa',
                'Americas',
                'Oceania',
                'Europe',
                'Asia'
            ],
            CurrentActive: [],
            style: 'display: none'
        }
    },
    methods: {
        toggleActiveContinent(i) {
            if(i == 0){
                this.isActive[0] = !this.isActive[0]
                this.CurrentActive = this.isActive[0] ? [this.continents[0]] : []

                for (let j=1;j < this.isActive.length;++j){
                    this.isActive[j] = false
                }
            } else {
                this.isActive[0] = false
                this.isActive[i] = !this.isActive[i];
                this.CurrentActive.push(this.continents[i])
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