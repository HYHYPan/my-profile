<template>
  <div>
    
       <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">


              

            </div>
          </div>
        </nav>

        

        
   
  </div>
</template>

<style lang="scss" scoped>


.font{
  font-family: Noto, sans;
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
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  background-color: #2a4764;
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
  justify-content: center;
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

export default {
  name:'SideBar',
  data() {
    return {
      
    }
  },
  methods:{
    
  }

}
</script>


