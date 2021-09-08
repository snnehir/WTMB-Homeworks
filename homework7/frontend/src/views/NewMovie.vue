<template>
    <div>
        <h3>Add new movie</h3>
        <label for="name">Name</label>
        <input v-model="movie.name" id="name" type="text" placeholder="Enter name of movie">
        <label for="category" id="name">Category</label>
        <input v-model="movie.category" id="category" type="text" placeholder="Enter category of movie">
        <label for="price">Price</label>
        <input v-model="movie.price" id="price" type="text" placeholder="Enter ticket price of movie">
        <button  @click="onAdd(movie)">Add</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            movie: {
                name: null,
                category: null,
                price: null,
            }
            
        }
    },
    methods:{
        ...mapActions(["addMovie"]),
        onAdd(movie){
            this.addMovie(movie)
            this.$router.push("/")
        }
    }
}
</script>

<style scoped>
div{
    background-image: linear-gradient(to right, rgb(252, 251, 196), rgb(252, 183, 183), rgb(252, 200, 190));
    width: 40%;
    padding: 40px;
    margin: auto;
    border-radius: 10px;
}
input{
    display: block;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 5px;
    background-color: rgb(255, 219, 212);
    border: none;
    border-radius: 3px;
    padding-top: 3px;
    padding-bottom: 3px;
}
button{
    cursor: pointer;
    background-color: rgb(252, 251, 196);
    border: none;
    color: #2c3e50;
    border-radius: 3px;
    padding: 4px 10px;
}
h3{
    margin-top: 0px;
    margin-bottom: 30px;
}
</style>