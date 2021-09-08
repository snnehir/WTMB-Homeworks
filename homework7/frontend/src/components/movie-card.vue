<template>
<section>
    <div v-for="movie in movieList" :key="movie._id" class="container">
        <h3>{{movie.name}}</h3>
        <p>Category: {{movie.category}}</p>
        <p>Price: ₺{{movie.price}}</p>
        <button @click="deleteMovie(movie._id)"  class="delete-btn" >🗑</button>
    </div>
</section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        movieList: {
            type: Array
        }
    },
    methods:{
        ...mapActions(["deleteMovie"])
    }
}
</script>

<style scoped>
.container{
    padding: 30px 0;
    display: inline-block;
    min-width: 350px;
    border: 1px solid rgb(240, 107, 107);
    margin: 10px;
}
.delete-btn{
    background-color: rgb(240, 107, 107);
    color: white;
    font-size: 25px;
    border: 1px solid white;
    border-radius: 10px;
    margin-bottom: 5px;
    cursor: pointer;
}
</style>