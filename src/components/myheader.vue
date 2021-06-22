<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item ban">
                    <router-link class="text-white px-4" to="/">home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-4" to="/test1">test1</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-4" to="/test2">test2</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="text-white px-4" to="/test3">test3</router-link>
                </li>
                </ul>
                <div class="titles">
                </div>
            </div>
        </nav>
    </div>
</template>

<style header-css>

a{

    text-decoration: none;
}

.navbar{

    padding-top:   1%;
    padding-bottom: 1%;
    font-size:1.5rem;
}
.titles{

    color:blue;
    margin-left:100px;
}
</style>