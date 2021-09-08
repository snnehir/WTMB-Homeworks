<template>
    <div>
        <h2>Category: {{category}} ({{movieList.length}} results)</h2>
        <movie-card :movieList = "movieList" />
    </div>
</template>

<script>

import MovieCard from "@/components/movie-card.vue"
export default {
    components:{
        MovieCard
    },
    props: ["category"],
    data(){
        return {
            movieList : []
        }
    },
    created(){
        this.$axios.get(`http://localhost:3000/movie/categories/${this.category}/json`).then(res => {
            console.log(res.data)
            this.movieList = res.data
                
        })
    }
}
</script>
