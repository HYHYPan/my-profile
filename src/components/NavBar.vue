<template>
  <div>
    <header>
       
      <nav class="navbar navbar-expand-md navbar-dark fixed-top flex-md-nowrap p-1 shadow">
        <img style="width:40px;" alt="logo" v-bind:src="logo">
        <a class="navbar-brand mr-auto " href="#"> Hazel Pan </a>
        
        <ul class="nav justify-content-end">

        <a class="nav-link nav-item" href="#" @click.prevent="getToPage('about')">About</a>
        <a class="nav-link  nav-item" href="#" @click.prevent="getToPage('education')">Education</a>
        <a class="nav-link nav-item" href="#" @click.prevent="getToPage('work')">Work experience</a>
        <a class="nav-link nav-item" href="#" @click.prevent="getToPage('skill')">Skills</a>
        <a class="nav-link nav-item" href="#" @click.prevent="getToPage('portfolio')">Portfolio</a>
          <!-- <ul class="nav justify-content-end "> -->
            
            
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
}

// .class{
//   height: 1.5rem;

// }

/*
 * Navbar
 */

// .navbar-brand {
//   padding-top: 0.75rem;
//   padding-bottom: 0.75rem;
//   font-size: 1rem;
//   // background-color: rgba(0, 0, 0, 0.25);
//   box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
// }

// .navbar .form-control {
//   padding: 0.75rem 1rem;
//   border-width: 0;
//   border-radius: 0;
// }

// .form-control-dark {
//   color: #fff;
//   background-color: rgba(255, 255, 255, 0.1);
//   border-color: rgba(255, 255, 255, 0.1);
// }

// .form-control-dark:focus {
//   border-color: transparent;
//   box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
// }
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
  components: {
    About,
    Education,
    Work,
    Skill,
    Portfolio,
  },
  methods: {
    getToPage(page){
      if(page === 'about'){
        this.$router.push('/about');
      }else if(page === 'education'){
        this.$router.push('/education');
      }else if(page === 'work'){
        this.$router.push('/work');
      }else if(page === 'skill'){
        this.$router.push('/skill');
      }else if(page === 'portfolio'){
        this.$router.push('/portfolio');
      }
    },

  }
};
</script>

