<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top flex-md-nowrap p-1 shadow">
        
        <img style="width:40px;" alt="logo" v-bind:src="logo">
        <a class="navbar-brand mr-auto" href="#" @click.prevent="getToPage('/')">Hazel Pan</a>
        
        <button type="button" class="menu-button">
         三
         
        </button>
        <input type="checkbox" class="menu-button-checkbox">
        
        <ul class="nav justify-content-end">
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/about')">About</a></li>
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/education')">Education</a></li>
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/work')">Work experience</a></li>
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/skill')">Skills</a></li>
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/portfolio')">Portfolio</a></li>
          <li><a class="nav-link nav-item" href="#" @click.prevent="getToPage('/login')">Login</a></li>
        </ul>
        
      </nav>
    </header>

    


  </div>
</template>

<style lang="scss" scoped>

 .navbar{
   background: #6A7E91;
}

.nav-item{
  color: white;
  font-family: Noto, sans;
}

@media screen and (min-width: 1024px) {
  .menu-button,
  .menu-button-checkbox  {
    display: none;
  }
}

@media screen and (max-width: 1023px) {

  .menu-button {
    float: right;
    font-size: 25px;
    line-height: 5vw;
    color: white;
    background: transparent;
    padding: 0 15px;
    border: 0;
  }

  .menu-button-checkbox {
    position: fixed;
    top: 0;
    right: 0;
    width: 55px;
    height: 40px;
    opacity: 0;
  }

  .menu-button-checkbox:checked ~ .nav {
    display: block;
  }

  // .navbar{
  //   height: 40px;
  // }
  .nav {
    display: none;
    margin-top: 0;
    padding-left: 0;
    position: fixed;
    right: 0;
    top: 44px;
    width: 150px;
    height: 100%;
    background: #2a4764;
  }

  .nav-item {
    border: 0;
    border-radius: 0;
  }

  .nav-item:hover, .nav-item:active {
  background:#6A7E91;
}

  /*
    往下繼續手機版 css code
  */
}


</style>

<script>

import Home from '@/components/pages/Home';
import About from '@/components/pages/About';
import Education from '@/components/pages/Education';
import Work from '@/components/pages/Work';
import Skill from '@/components/pages/Skill';
import Portfolio from '@/components/pages/Portfolio';

export default {
  name: "NavBar",
  data() {
    return {
      logo: "static/images/logo.png",
      
    };
  },
  
  methods: {
    getToPage(page){
      this.$router.push(page);
    },
  }
};
</script>

