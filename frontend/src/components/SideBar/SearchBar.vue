<template>
    <li>
        <div :style="style" id="search-container">
            <input :style="style" v-model="SearchQuery" type="text" id="search-bar" placeholder="Search...">
         </div>
    </li>
</template>

<script>
export default({
    name: 'SearchBar',
    props: {
        open: Boolean
    },
    data(){
        return {
            SearchQuery: '',
            style: ''
        }
    },
    watch: {
        SearchQuery(text) {
            if(text){
                return this.$emit("SearchQuery", text)
            }
        },
        open(value) {
            if(value){
                this.style = ''
            } else {
                this.style = 'display: none'
            }
        }
  },
})
</script>