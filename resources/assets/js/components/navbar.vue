<template>
  <nav class="navbar navbar-default" :class="{ 'at_top':scrollTop<=2, 'navbar-fixed-top': fixed }">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <router-link class="navbar-brand" to="/">
                <!-- n3xtcon -->
                <div class="logowraper">
                    <img class="logo white" src="/img/Logo.svg" alt="">
                    <img class="logo black" src="/img/LogoBlack.svg" alt="">
                </div>
            </router-link>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <!-- <ul class="nav navbar-nav">
                &nbsp;
            </ul> -->

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                <li @click="toggleNav"><router-link to="/about">About</router-link></li>
                <li @click="toggleNav" class="confList">
                     <li class="nav-item dropdown">
                        <router-link to="/conference" class="nav-link" href="#" id="navbarDropdown" role="button"  aria-haspopup="true" aria-expanded="false">Conference</router-link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="dropdown-item" to="/conference/2018"/>
                            <router-link class="dropdown-item" to="/conference/2017"/>
                            <router-link class="dropdown-item" to="/conference/2016"/>

                       </div>
                    </li>
                    <!-- <ul class="sublist">
                        <router-link to="/conference/2018">2018</router-link>
                        <router-link to="/conference/2017">2017</router-link>
                    </ul>     -->
                </li>

                <li @click="toggleNav"><router-link to="/event">Events</router-link></li>
                <li @click="toggleNav"><router-link to="/speaker">Speakers</router-link></li>
                <!-- <li @click="toggleNav"><router-link to="/blog">Blog</router-link></li> -->
                <!-- <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">

                        <li><a href="/login">Login</a></li>
                        <li><a href="/register">Register</a></li>
                        <li>
                            <a href="/logout"
                                onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="/logout" method="POST" style="display: none;">
                               
                            </form>
                        </li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </div>
  </nav> 
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: ['fixed'],
    computed:{
      ...mapState(['scrollTop'])
    },
    methods: {
        toggleNav(){
            $(".navbar-collapse").collapse('hide');
        },
    }
}
</script>

<style>

</style>
