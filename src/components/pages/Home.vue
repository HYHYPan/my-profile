<template>
  <div>
    <!-- header -->
    <header>
      <NavBar/>
    </header>

    <!-- main contents -->
    <main role="main ">
      <div id="bigBanner">
        <div class="bigBanner-inner">
          <img :src="banner3" alt="banner3" style="width:100%">
        </div>
      </div>

      <!-- Marketing messaging and featurettes
      ==================================================-->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              About Me
              <span class="text-muted"></span>
            </h2>

            <h5 class="mt-4">
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

          <div class="col-md-5 order-md-1 mt-4 about-img">
            <img
              :src="aboutImg"
              alt="about-img"
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto container"
            >
          </div>
        </div>

        <hr class="featurette-divider mt-4">

        <!-- The row start from here-->
        <div class="row">
          <div class="col-lg-4">
            <title>Logo design</title>
            <img :src="row1" alt="row1" class="bd-placeholder-img rounded-circle"
              width="140"
              height="140">

            <h2>Logo design</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            
            <button class="btn btn-info" role="button" @click="buyNow" > Buy Now </button> 
            <button class="btn btn-info" role="button" @click="buyNow" > Add to Cart </button>
            
            
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
              <title>Web design</title>
              <img :src="row2" alt="row2" class="bd-placeholder-img "
              
              width="140"
              height="140">
            <h2>Web design</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <button class="btn btn-info" role="button" @click="buyNow" > Buy Now </button> 
            <button class="btn btn-info" role="button" @click="buyNow" > Add to Cart </button>
          </div>
          <!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img :src="row3" alt="row3" class="bd-placeholder-img rounded-circle"
              width="140"
              height="140">
            <h2>Illustration design</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <button class="btn btn-info" role="button" @click="buyNow" > Buy Now </button> 
            <button class="btn btn-info" role="button" @click="buyNow" > Add to Cart </button>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              First featurette heading.
              <span class="text-muted">It’ll blow your mind.</span>
            </h2>
            <p
              class="lead"
            >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
             <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 2013"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#777"></rect>
              <text x="50%" y="50%" fill="#000" dy=".3em">2013</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Oh yeah, it’s that good.
              <span class="text-muted">See for yourself.</span>
            </h2>
            <p
              class="lead"
            >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              And lastly, this one.
              <span class="text-muted">Checkmate.</span>
            </h2>
            <p
              class="lead"
            >Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <svg
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              role="img"
              aria-label="Placeholder: 500x500"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
            </svg>
          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- /.container -->

      <!-- FOOTER -->
      <Footer/>
    </main>

    <!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cart subtotal</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
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
import $ from 'jquery';

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
      row3: "static/images/illustration.jpg",
    };
  },
  components: {
    NavBar,
    Footer
  },
  methods:{
    buyNow(){
      $('#productModal').modal('show');
    },
  }
};
</script>




