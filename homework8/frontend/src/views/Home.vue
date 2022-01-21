<template>
    <div>
        <section>
            <h2>All Movies ({{movieList.length}} results)</h2>
            <div class="dropdown">
                <h3 class="dropbtn">{{dropdown_title}}</h3>
                <div class="dropdown-content">
                <a @click.prevent="showCategory(category)" v-for="category in categories" :key="category" href="#">{{category}}</a>
                </div>
            </div>
            <hr>
            <movie-card :movieList="movieList" />
        </section>
        
    </div>
</template>

<script>
import MovieCard from "@/components/movie-card.vue"
import {mapActions, mapGetters} from "vuex"
export default {
    components: {
        MovieCard,
    },
    data(){
        return{
            categories: ["Drama", "Action", "Fantastic", "Sci-Fi", "Horror"],
            dropdown_title: "Select a category"
        }
    },
    created(){
        this.loadMovieList()
    },
    methods:{
        ...mapActions(["loadMovieList"]),
        showCategory(category){
            this.dropdown_title = category
            this.$router.push({name: "Category", path: `/categories/${category}`, params: {category: category} })
        }
    },
    computed: {
        ...mapGetters(["movieList"])
    },
    
}
</script>

<style>

.dropbtn {
  background-color: white;
  color: #2c3e50;
  border: 1px solid rgb(240, 107, 107);
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: rgb(240, 107, 107);
  color: white;
}
</style>