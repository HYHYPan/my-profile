<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">
              <h1 class="sidebar-text">Education</h1>

              <p class="sidebar-text">
                Here is about my education, ability and certificate.
              </p>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 align-items-center">
          <div class="justify-content-between">
          <div
            class=" d-flex  flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1 >Education</h1>

            <button type="button" class="btn btn-sm btn-outline-secondary content-btn">
              Photo
            </button>
          </div>
          <div class="box box-content">
            <h2>National Cheng Chi University (NCCU)</h2>
          <p>
           Bachelor of Chinese Literature, Jun. 2013.
Minor: Economics, Jun. 2013.
          </p>
          </div>
          </div>

          <div class="justify-content-between">
          <div
            class=" d-flex  flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h1> Certificate & Ability </h1>

          </div>
          <div class="box box-content">
            <h2>Basic Test on the FinTech Knowledge </h2>
            <h2>BTOEIC Listening & Reading Test：790 points </h2>
          </div>
          </div>

        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.content-btn {
  border-radius: 50rem;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
  padding-right: 4vw;
  padding-left: 4vw;
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
    padding-right: 4vw;
  padding-left: 4vw;
  }

.box {
    padding-left: 6vw;
    padding-right: 6vw;
  }
.border-bottom{
  margin-left: 6vw;
  margin-right: 6vw;
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
  }
};
</script>