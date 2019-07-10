<template>
  <div>
     <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <h1 class="sidebar-text">Education</h1>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <span
                    data-feather="home"
                    class="sidebar-text"
                  >sjiojdoij sodjoisjoidjoisjodi osidjo</span>
                </a>

                <a href="#about">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm"
                    
                  >
                    <strong>Learn more</strong>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4">
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 class="h2">Education</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
              <div class="btn-group mr-2">
                <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>
          <h1>
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
            sjiojdoij sodjoisjoidjoisjodi osidjosjiojdoij sodjoisjoidjoisjodi osidjo
          </h1>
        </main>
      </div>
    </div>
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
  height:100%;
  background-color:#2A4764;
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  vertical-align:middle;

}

.sidebar-text{
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

.btn-sm{
  border-radius: 50rem;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}
</style>

<script>
import $ from "jquery";


export default {
  name: "Education",
  data() {
    return {
      card1: "static/images/Service/social_media.jpg",
      card2: "static/images/Service/f_logo_250.png",
      card3: "static/images/Service/html5.png",
      card4: "static/images/Service/head.png",
      card5: "static/images/Service/photo.jpg",
      card6: "static/images/Service/illustration.jpg"
    };
  },
  methods: {
    buyNow() {
      $("#productModal").modal("show");
    }
  },
  
};
</script>