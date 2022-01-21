import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"
import SecureLS from "secure-ls"
import axios from "axios"
var ls = new SecureLS({ isCompression: false });

const store = createStore({
    state:{
        movieList: [],
        categoryList: []
    },
    mutations:{
        LOAD_MOVIE_LIST(state, movieList){
            state.movieList = movieList
        },
        ADD_MOVIE(state, movie){
            state.movieList.push(movie)
        },
        DELETE_MOVIE(state, movie_id){
            state.movieList = state.movieList.filter(m=>m._id !== movie_id)
        }
    },
    actions: {
        async loadMovieList({commit}){
            const res = await axios.get(`${process.env.VUE_APP_API_URL}/movie/all/json`)
            commit("LOAD_MOVIE_LIST", res.data)
        },
        async addMovie({commit}, movie){
            await axios.post(`${process.env.VUE_APP_API_URL}/movie/`, {name:movie.name, category: movie.category, price:movie.price})
            commit("ADD_MOVIE", movie)
        },
        async deleteMovie({commit}, movie_id){
            await axios.delete(`${process.env.VUE_APP_API_URL}/movie/${movie_id}`)
            commit("DELETE_MOVIE", movie_id)
        }
        

    },
    getters: {
        movieList: state => state.movieList,
        categoryList: state => state.categoryList
    },
    plugins: [createPersistedState({
        storage: {
          getItem: (key) => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: (key) => ls.remove(key),
        },
    }),]
})

export default store