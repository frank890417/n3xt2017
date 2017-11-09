<template>
  <nav class="navbar navbar-default" :class="{ 'at_top':!scrollTop, 'navbar-fixed-top': $route.path=='/' ||  $route.path=='/event' }">
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
                n3xtcon
            </router-link>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                &nbsp;
            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->
                <li><router-link to="/event">Events</router-link></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <a href="/logout"
                                onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="/logout" method="POST" style="display: none;">
                                <!-- {{ csrf_field() }} -->
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
  </nav> 
</template>

<script>
import {mapState} from 'vuex'
export default {

    computed:{
      ...mapState(['scrollTop'])
    }
}
</script>

<style>

</style>
