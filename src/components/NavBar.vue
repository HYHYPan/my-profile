<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top flex-md-nowrap p-1 shadow">
        
        <img style="width:40px;" alt="logo" v-bind:src="logo">
        <a class="navbar-brand mr-auto font" href="#" @click.prevent="getToPage('/')">Hazel Pan</a>
        
        <button type="button" class="menu-button">
         三
         
        </button>
        <input type="checkbox" class="menu-button-checkbox">
        
        <ul class="nav justify-content-end">
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/about')">About</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/education')">Education</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/work')">Work experience</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/skill')">Skills</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/portfolio')">Portfolio</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/login')">Login</a></li>
        </ul>
        
      </nav>
    </header>
    <!-- start Curtain  -->
    <transition name="zoom">
          
    <nav class="col-md-11  d-md-block sidebar" v-if="change">
          <div class="sidebar-sticky col-md-12">
            <div class="sidebar-box-left col-md-4 ml-1">
              <h1 class="sidebar-title font ml-2">Hazel Pan</h1>
              <p class="sidebar-text font mt-4 ml-5">
                “ Life is a great big canvas, and you should throw all the paint on if you can ”
               - Danny Kaye
              </p>
            </div>
            <div class="sidebar-box-right col-md-8">
             <button class="zoom-btn btn font" @click="zoomOut()" > >> </button>
             </div>
          </div>
        
        </nav>
       
        </transition>  
    


  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 15px;
}

.font{
  font-family: Noto, sans;
}

 .navbar{
   background: #6A7E91;
}

.nav-item{
  color: white;
  font-family: Noto, sans;
}

.zoom-btn{
  font-size: 2.5rem;
  color: white;
}
.zoom-btn:hover{
   text-shadow: 0px 0px 5px white;
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

}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: 2rem 0 0 #527598;
  height: 100%;
  background-color: #2a4764;
  border:0rem;
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  align-items: center;
   justify-content: center;
}

.sidebar-box-left {
  text-align: center;
  padding:0rem;
 justify-content: center;
}

.sidebar-box-right {
  text-align: right;
}

.sidebar-title {
  color: white;
  font-weight: lighter;
  font-size: 4rem;
  margin: 0rem;
}

.sidebar-text {
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1.1rem;
  width: 20rem;
  line-height: 1.5rem;
  font-weight: lighter;
  margin-left: 0rem;
  margin-right: 0rem;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: white;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

// The transition

  .zoom-enter, .zoom-leave-to {
    width: 0px;

  }
  .zoom-enter-active, .zoom-leave-active {
    transition: width 1s, height 0s; 
    transition-duration: 2s;
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
       change: true,
       currentRoute: this.$router.name,

    };
  },
  
  methods: {
    getToPage(page){
      if(page=='/' ){
        this.change = true;
      }else{
        this.change = false;
      }
      this.$router.push(page);
    },
    zoomOut(){
      this.change = !this.change;
      this.$router.push('/about');
      
    },
    reload () {
    //if(router.go(0)){
      if(currentRoute == "Home" ){
      
      this.change = true;
    //  this.$nextTick(() => (this.change = true))
    }else{
      this.change = false;
    }
   // }
    
     
   }
  },
  mounted() {
    this.$nextTick(function () {
        this.getToPage(page);
      })
  },
};
</script>

