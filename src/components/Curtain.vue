<template>
  <div>

    <!-- start curtan  -->
    
    <nav class="col-md-11 d-none d-md-block sidebar">
          <div class="sidebar-sticky col-md-4">
            <div class="sidebar-box">
              <h1 class="sidebar-title font">Hazel Pan</h1>
              <p class="sidebar-text font mt-4">
                A dreammaker and an altruist.
                
                <br>“ Life is a great big canvas, and you should throw all the paint on if you can ”
              </p>
            </div>
          </div>
          <button @click.prevent="goToAbout()"> >> </button>
          <div class="sidebar-button">
          <a href="#" @click.prevent="goToAbout()" > >> </a>
          </div>
        </nav>
        
        
      </div>
   
 
</template>

<style lang="scss" scoped>
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
  text-align: left;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  // justify-content: center;
  align-items: center;
}

.sidebar-box {
  text-align: center;
}

.sidebar-title {
  color: white;
  font-weight: lighter;
  font-size: 5vw;
}

.sidebar-text {
  text-align: center;
  color: white;
  width: 22.5vw;
  line-height: 2vw;
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
</style>



<script>
import $ from "jquery";

export default {
  name: "Curtain",
  data() {
    return {
      class: "col-md-11",
    };
  },
  methods:{
    goToAbout(){
      
      this.$router.push('/about');
    }
  }

  
};
</script>




