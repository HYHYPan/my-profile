<template>
  <div id="home">
    <!-- header -->
    <header>
      <NavBar></NavBar>
    </header>

    <!-- main contents -->
    <main role="main ">
      <div class="bigBanner">
        <div class="bigBanner-table mx-auto text-center">
          <div class="bigBanner-table-cell">
            <h1 class="big-title display-4">Hazel Pan</h1>

            <div class="actions" >
              <a href="#about">
              <button type="button" class="btn btn-outline-warning btn-lg" >
                <strong>Learn more</strong>
                
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Marketing messaging and featurettes
      ==================================================-->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container">
        <!-- <div class="row featurette">
          <h1 class="l-title display-4 mx-auto text-center">About Me</h1>
          <div class="col-md-12">
            <div class="col-md-5 mt-4 mb-3 about-img col-left">
              <img
                :src="aboutImg"
                alt="about-img"
                class="bd-placeholder-img featurette-image img-fluid mx-auto container"
              >
            </div>

            <div class="col-md-5 mb-3 col-right">
              <h5>
                <i class="fas fa-female"></i> FEMALE
              </h5>

              <h5>
                <i class="fas fa-walking"></i> PERSONAITY
              </h5>

              <ul>
                <li>Have strong passions to innovated good ideas to help and communicate with people.</li>
                <li>Willing to learn about new processes and concepts with a strong sense of curiosity.</li>
              </ul>

              <h5>
                <i class="fas fa-university"></i> EDUCATION
              </h5>

              <ul>
                <li>
                  National Cheng Chi University (NCCU)
                  <ul>
                    <li>Bachelor of Chinese Literature, Jun. 2013.</li>
                    <li>Minor: Economics, Jun. 2013.</li>
                  </ul>
                </li>
                <li>Taipei Municipal Datong High School</li>
              </ul>
            </div>
          </div>
        </div> -->

        <!-- <hr class="featurette-divider mt-4"> -->
          <div id="about">
            <About></About>
          </div>
          
        
        <hr class="featurette-divider mt-4">

        <div id="service">
          <Carousel></Carousel>
        </div>

        <!-- START THE Works -->

        <hr class="featurette-divider">
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
        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->

      <!-- FOOTER -->
      <Footer/>
    </main>

    <!-- Modal -->
    <div
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
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import Carousel from "@/components/pages/homeComponents/Carousel";
import Works from "@/components/pages/homeComponents/Works";
import Skills from "@/components/pages/homeComponents/Skills";
import Contact from "@/components/pages/homeComponents/Contact";
import About from "@/components/pages/homeComponents/About";
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
    Carousel,
    Works,
    Skills,
    Contact,
    About,
  },
  methods: {
    buyNow() {
      $("#productModal").modal("show");
    },
    
  }
};
</script>




