import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        name: "Home",
        path: "/",
        props: true,
        component: () => import("../views/Home.vue")
    },
    {
        name: "NewMovie",
        path: "/add-movie",
        component: () => import("../views/NewMovie.vue")
    },
    {
        name: "Category",
        path: "/categories/:category?",
        props: true,
        component: () => import("../views/Category.vue")
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router