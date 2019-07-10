<template>
  <div>
    <!-- <div class="container-fluid"> -->
      <!-- <div class="row"> -->
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <h1 class="sidebar-text">Hazel Pan</h1>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span
                    data-feather="home"
                    class="sidebar-text"
                  >sjiojdoij sodjoisjoidjoisjodi osidjo</span>
                </a>

                <a href="#about">
                  <button type="button" class="btn btn-outline-light btn-sm">
                    <strong>Learn more</strong>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 ">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center "
          >
          
            <div class="left">
              <img class="left-img" :src="img1" alt="photo">
              <p class="mt-4">
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
              </p>
            </div>

            <div class="right">
              <p class="pt-3">
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
                sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
              </p>
              <img class="right-img mt-4" :src="img2" alt="photo">
            </div>
          
          </div>
          
        </main>
      <!-- </div> -->
    <!-- </div> -->
  </div>
</template>

<style lang="scss" scoped>
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
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
  vertical-align: middle;
}

.sidebar-text {
  color: white;
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

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.btn-sm {
  border-radius: 50rem;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 0rem; /* Space for fixed navbar */
  padding-left:0px;
  padding-right: 0px; 
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 0px; /* Space for fixed navbar */
  }
}

.left,
.right {
  float: left;
  width: 50%;
  padding: 0px;
}

.left-img,
.right-img {
  width: 100%;
  text-align: center;
  margin: 0px;
  padding: 0pt;
}
</style>

<script>
export default {
  data() {
    return {
      img1: "static/images/head-1.png",
      img2: "static/images/head-2.jpg"
    };
  }
};
</script>