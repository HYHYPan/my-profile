<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top flex-md-nowrap p-1 shadow">
        <img style="width:40px;" alt="logo" v-bind:src="logo">
        <a class="navbar-brand mr-auto" href="#" @click.prevent="getToPage('/')">Hazel Pan</a>
        <ul class="nav justify-content-end">
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/about')">About</a>
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/education')">Education</a>
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/work')">Work experience</a>
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/skill')">Skills</a>
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/portfolio')">Portfolio</a>
          <a class="nav-link nav-item" href="#" @click.prevent="getToPage('/login')">Login</a>
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

