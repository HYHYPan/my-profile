<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top flex-md-nowrap p-1 shadow">
        <img style="width:40px;" alt="logo" v-bind:src="logo">
        <a class="navbar-brand mr-auto font" href="#" @click.prevent="getToPage('/')">Hazel Pan</a>

        <button type="button" @click="changeHamburger()" class="menu-button">三</button>
        <!-- @media screen and (min-width: 1024px) -->
        <ul class="nav nav-normal justify-content-end" >
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/about')">About</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/education')">Education</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/work')">Work experience</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/skill')">Skills</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/portfolio')">Portfolio</a>
          </li>
        </ul>
        <!-- @media screen and (max-width: 1023px) -->
        
        <ul class="nav nav-hamburger justify-content-end" v-if="hamburger">
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/about')">About</a></li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/education')">Education</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/work')">Work experience</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/skill')">Skills</a>
          </li>
          <li><a class="nav-link nav-item font" href="#" @click.prevent="getToPage('/portfolio')">Portfolio</a>
          </li>
        </ul>

        <div class="nav-bg" v-if="hamburger" @click="changeHamburger()"></div>
      </nav>
    </header>
   
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 15px;
}

.font {
  font-family: Noto, sans;
}

.navbar {
  background: #6a7e91;
}

.nav-item {
  color: white;
  font-family: Noto, sans;
}

.zoom-btn {
  font-size: 2.5rem;
  color: white;
}
.zoom-btn:hover {
  text-shadow: 0px 0px 5px white;
}

@media screen and (min-width: 1024px) {
  .menu-button,
  .menu-button-checkbox,
  .nav-hamburger,
  .nav-bg {
    display: none;
  }
}

@media screen and (max-width: 1023px) {
  .nav-normal{
    display: none;
  }
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

  .nav-hamburger {
    z-index: 100;
    display: block;
    margin-top: 0;
    padding-left: 0;
    position: fixed;
    right: 0;
    top: 45px;
    width: 150px;
    height: 100%;
    background: #3d6892;
  }
  .nav-bg{
    z-index: 99;
    top: 45px;
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0.0;
    background-color: #fff;
  }

  .nav-item {
    border: 0;
    border-radius: 0;
  }

  .nav-item:hover,
  .nav-item:active {
    background: rgb(129, 146, 161);
  }
}


</style>

<script>
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Education from "@/components/pages/Education";
import Work from "@/components/pages/Work";
import Skill from "@/components/pages/Skill";
import Portfolio from "@/components/pages/Portfolio";

export default {
  name: "NavBar",
  data() {
    return {
      logo: "static/images/logo.png",
      page: "",
      change: true,
      hamburger: false,
    };
  },

  methods: {
    getToPage(page) {
      if (page == "/") {
        this.change = true;
      } else {
        this.change = false;
      }
      this.hamburger = false;
      this.$router.push(page);
      
    },
    changeHamburger() {
      this.hamburger = !this.hamburger;
    },
  },

};
</script>

