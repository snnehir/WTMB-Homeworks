<template>
    <div>
        <nav class="nav-bar">
            <ul>
                <li>
                    <router-link to="/" class="nav-item">
                        All
                    </router-link>
                </li>
                <li>
                    <router-link to="/add-movie" class="nav-item">
                        Add
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.nav-bar li{ 
    display: inline;
    margin: 5px;
    background-color: rgb(252, 183, 183);
    padding: 5px 20px;
    border-radius: 5px;
}
.nav-bar{
    text-align: right;
    margin-left: 10px;
    margin-bottom: 50px ;
}
.nav-item{
    text-decoration: none;
    color: #2c3e50;
}
</style>