<template>
  <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="service-header mx-auto text-center">
          <h1 class="display-4">Service</h1>
        </div>
        <div class="carousel-item active">
          <div class="album py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-4 mx-auto text-center">
                  <div class="card mb-4 mx-auto text-center">
                    <img
                      :src="card1"
                      alt="card1"
                      id="card1"
                      class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
                      width="170"
                      height="170"
                    >

                    <div class="card-body">
                      <h2 class="card-title">Logo design</h2>
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group mx-auto text-center">
                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="card mb-4">
                    <img
                      :src="card2"
                      alt="card2"
                      id="card2"
                      class="bd-placeholder-img mx-auto text-center mt-4"
                      width="180"
                      height="180"
                    >
                    <div class="card-body">
                      <h2 class="card-title">Web design</h2>
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4">
                    <img
                      :src="card3"
                      alt="card3"
                      id="card3"
                      class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
                      width="180"
                      height="180"
                    >
                    <div class="card-body">
                      <h2 class="card-title">Illustration design</h2>
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="album py-5">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-4">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                         <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-4">
                    <svg
                      class="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#55595c"></rect>
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                      <p
                        class="card-text"
                      >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                          Buy Now
                          </button>

                          <button class="btn btn-sm btn-outline-secondary" role="button" @click="buyNow">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
        
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

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

<style lang="scss" scoped>
.service-header {
  max-width: 700px;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  height: 80px;
  width: 80px;
  outline: grey;
  background-size: 80%, 80%;
  border-radius: 50%;
  border: none;
  background-image: none;
  background: rgb(51, 51, 51);
}

.carousel-control-next-icon:after {
  content: ">";
  font-size: 50px;
  color: rgb(150, 150, 150);
}

.carousel-control-prev-icon:after {
  content: "<";
  font-size: 50px;
  color: rgb(150, 150, 150);
}
.card {
  text-align: center;
}
a .carousel-control-next{
  width: 180px;
  height: 180px;
}
</style>

<script>
import $ from "jquery";

export default {
  name: "Carousel",
  data() {
    return {
      card1: "static/images/logo.png",
      card2: "static/images/html5.png",
      card3: "static/images/illustration.jpg"
    };
  },
  methods: {
    buyNow() {
      $("#productModal").modal("show");
    }
  }
};
</script>