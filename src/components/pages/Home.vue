<template>
  <div>
    <!-- NavBar -->
    <NavBar></NavBar>

     <router-view> </router-view>
    <!-- NavBar -->
    <!-- <NavBar></NavBar> -->

    <!-- SideBar -->
    <!-- <SideBar></SideBar> -->

    <!-- <div class="container-fluid"> -->
    <!-- <div class="row"> -->

    <!-- <main role="main "> -->
    <!-- <div class="bigBanner">
            <div class="bigBanner-table mx-auto text-center">
              <div class="bigBanner-table-cell">
                <h1 class="big-title display-4">Hazel Pan</h1>

                <div class="actions">
                  <a href="#about">
                    <button type="button" class="btn btn-outline-warning btn-lg">
                      <strong>Learn more</strong>
                    </button>
                  </a>
                </div>
              </div>
            </div>
    </div>-->

    <!-- Marketing messaging and featurettes
    ==================================================-->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <!-- <div class="container"> -->
    <!-- <hr class="featurette-divider mt-4"> -->
    <!-- <div id="about">
              <About></About>
            </div>

            <hr class="featurette-divider mt-4">

            <div id="service">
              <Carousel></Carousel>
    </div>-->

    <!-- START THE Works -->

    <!-- <hr class="featurette-divider">
            <div id="work">
              <Works></Works>
            </div>
            <hr class="featurette-divider">
            <div id="skill">
              <Skills></Skills>
            </div>
            <hr class="featurette-divider">
            <div id="contact">
              <Contact></Contact>
            </div>
    <hr class="featurette-divider">-->

    <!-- /END THE FEATURETTES -->
    <!-- </div> -->
    <!-- /.container -->

    <!-- FOOTER -->
    <!-- <Footer/> -->
    <!-- </main> -->
    <!-- </div> -->
    <!-- </div> -->

    <!-- Modal -->
    <!-- <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Cart subtotal</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Process to checkout</button>
          </div>
        </div>
      </div>
    </div>-->
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

// /*
//  * Navbar
//  */

// .navbar-brand {
//   padding-top: 0.75rem;
//   padding-bottom: 0.75rem;
//   font-size: 1rem;
//   background-color: rgba(0, 0, 0, 0.25);
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
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import $ from "jquery";

export default {
  name: "Home",
  data() {
    return {
      banner1: "static/images/banner01.png",
      banner2: "static/images/banner02.png",
      banner3: "static/images/banner03.png",
      aboutImg: "static/images/head-2.jpg",
      row1: "static/images/logo.png",
      row2: "static/images/html5.png",
      row3: "static/images/illustration.jpg"
    };
  },
  components: {
    NavBar,
    Footer,
    
  },
  methods: {
    buyNow() {
      $("#productModal").modal("show");
    }
  }
};
</script>




