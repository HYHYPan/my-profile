<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->
        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">
              <h1 class="sidebar-title">Portfolio</h1>
              <p class="sidebar-text">Here are my portfolio and creative works.</p>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap box">
            <!-- <div class="box"> -->

            <div class="box-content">
              <a
                href="#portfolioModal"
                @click="openPhoto()"
                data-toggle="modal"
                data-target="#portfolioModal"
                v-for="item in portfolio1"
                :key="item"
              >
                <img :src="item.img" alt="img" class="box-img">
              </a>
            </div>

            <div class="box-content">
              <a
                href="#portfolioModal"
                @click.prevent="openPhoto()"
                data-toggle="modal"
                data-target="#portfolioModal"
                v-for="item in portfolio2"
                :key="item"
              >
                <img :src="item.img" alt="img" class="box-img">
              </a>
            </div>

            <div class="box-content2">
              <a
                href="#portfolioModal"
                @click.prevent="openPhoto()"
                data-toggle="modal"
                data-target="#portfolioModal"
                v-for="item in carousel"
                :key="item"
              >
                <img :src="item.img" alt="img" class="box-img">
              </a>
            </div>
          </div>
          <!-- </div> -->
        </main>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="portfolioModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="portfolioModalLabel">Portfolio</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="modal-box carousel-item active">
                  <img :src="img1" alt="img" class="modal-img d-block w-100">
                </div>
                <div class="modal-box carousel-item" v-for="item in carousel" :key="item">
                  <img :src="item.img" class="modal-img d-block w-100">
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
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
.sidebar-title {
  font-size: 4rem;
  color: white;
  font-weight: lighter;
  font-family: Noto, sans;
}

.sidebar-text {
  color: white;
  font-size: 1.1rem;
  width: 14rem;
  font-weight: lighter;
  font-family: Noto, sans;
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

/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
  padding-right: 4vw;
  padding-left: 4vw;
  text-align: center;
}

@media (min-width: 768px) {
  [role="main"] {
    padding: 2rem 4rem; /* Space for fixed navbar */
  }
  .box-content {
    text-align: center;
    width: 40%;
    float: left;
    margin: 5%;
  }
  .box-content2 {
    display: none;
  }
}

@media (max-width: 767px) {
  [role="main"] {
    padding: 0rem; /* Space for fixed navbar */
  }
  .box-content {
    display: none;
  }

  .box-content2 {
    text-align: center;
    width: 70%;
    float: left;
    margin: 15%;
  }
}

.box-img {
  text-align: center;
  width: 100%;
  margin-bottom: 3rem;
}
/*
 * modal
 */
.modal-box {
  overflow: auto;
}
#carouselExampleControls {
  text-align: center;
  height: 100%;
  overflow: auto;
  margin: 0rem;
  align-items: center;
}
.modal-img {
  width: auto;
  height: auto;
  overflow: auto;
}
</style>

<script>
import $ from "jquery";

export default {
  name: "Portfolio",
  data() {
    return {
      img1: "static/images/Portfolio/18.jpg",
      portfolio1: [
        { img: "static/images/Portfolio/18.jpg" },
        { img: "static/images/Portfolio/7.jpg" },
        { img: "static/images/Portfolio/8.jpg" },
        { img: "static/images/Portfolio/9.jpg" },
        { img: "static/images/Portfolio/11.jpg" },
        { img: "static/images/Portfolio/1.png" },
        { img: "static/images/Portfolio/21.png" },
        { img: "static/images/Portfolio/2.jpg" },
        { img: "static/images/Portfolio/15.png" },
        { img: "static/images/Portfolio/14.png" }
      ],
      portfolio2: [
        { img: "static/images/Portfolio/12.jpg" },
        { img: "static/images/Portfolio/20.jpg" },
        { img: "static/images/Portfolio/6.jpg" },
        { img: "static/images/Portfolio/10.jpg" },
        { img: "static/images/Portfolio/16.jpg" },
        { img: "static/images/Portfolio/4.png" },
        { img: "static/images/Portfolio/3.jpg" },
        { img: "static/images/Portfolio/13.png" }
      ],
      carousel: [
        { img: "static/images/Portfolio/18.jpg" },
        { img: "static/images/Portfolio/12.jpg" },
        { img: "static/images/Portfolio/7.jpg" },
        { img: "static/images/Portfolio/20.jpg" },
        { img: "static/images/Portfolio/8.jpg" },
        { img: "static/images/Portfolio/6.jpg" },
        { img: "static/images/Portfolio/9.jpg" },
        { img: "static/images/Portfolio/10.jpg" },
        { img: "static/images/Portfolio/11.jpg" },
        { img: "static/images/Portfolio/16.jpg" },
        { img: "static/images/Portfolio/1.png" },
        { img: "static/images/Portfolio/4.png" },
        { img: "static/images/Portfolio/21.png" },
        { img: "static/images/Portfolio/3.jpg" },
        { img: "static/images/Portfolio/2.jpg" },
        { img: "static/images/Portfolio/13.png" },
        { img: "static/images/Portfolio/15.png" },
        { img: "static/images/Portfolio/14.png" }
      ]
    };
  },
  methods: {
    openPhoto() {
      $("#portfolioModal").modal("show");
    }
  }
};
</script>