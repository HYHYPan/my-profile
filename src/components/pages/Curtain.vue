<template>
  <div>
    
    <!-- start Curtain  -->
    <transition name="zoom">
      <nav class="d-flex col-md-11 d-md-block sidebar" v-if="change">
        <div class="sidebar-sticky col-md-12">
          <div class="sidebar-box-left col-md-4 ml-3">
            <h1 class="sidebar-title font ">Hazel Pan</h1>
            <p class="sidebar-text font mt-4 ">
              “ Life is a great big canvas, and you should throw all the paint on if you can ”
              - Danny Kaye
            </p>
          </div>
          <div class="sidebar-box-right col-md-8">
            <button class="zoom-btn btn font" @click="zoomOut()">>></button>
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

.font {
  font-family: Noto, sans;
}


/*
 * Sidebar Curtain
 */

.zoom-btn {
  font-size: 2.5rem;
  color: white;
}
.zoom-btn:hover {
  text-shadow: 0px 0px 5px white;
}

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
  border: 0rem;
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
  padding: 0rem;
  justify-content: center;
}

.sidebar-box-right {
  text-align: right;
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

@media (min-width: 768px){
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
  // margin-left: 3rem;
  // margin-right: 0rem;
  display: inline-block;
}
}

@media (max-width: 767px){
  .sidebar-title {
  color: white;
  font-weight: lighter;
  font-size: 3rem;
  margin: 0rem;
}

.sidebar-text {
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 1rem;
  width: 15rem; 
  line-height: 1.5rem;
  font-weight: lighter;
  // margin-left: 1.5rem;
  // margin-right: 0rem;
  display: inline-block;
}
}

// The transition

.zoom-enter,
.zoom-leave-to {
  width: 0px;
  // transition-duration: 2s;
}
.zoom-enter-active,
.zoom-leave-active {
  transition: width 2s;
  // transition-duration: 2s;
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
  name: "Curtain",
  data() {
    return {
      page: "",
      change: true,
    };
  },

  methods: {
    zoomOut() {
      this.change = !this.change;
      this.$router.push("/about");
    },
    
  },

};
</script>

