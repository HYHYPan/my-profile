<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">
              <h1 class="sidebar-title font">Education</h1>

              <p class="sidebar-text font font-weight-light">Here is about my education, ability and certificate.</p>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 align-items-center">
          <div class="content justify-content-center">
            
              
            
            <div class="box box-content">
              <div
              class="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            >
              <h1 class="font font-weight-normal content-title">Education</h1>

              <button
                type="button"
                class="btn btn-sm btn-outline-secondary content-btn font justify-content-end"
                data-toggle="modal"
                data-target="#eduModal"
                @click="openPhoto()"
              >Photo</button>
              </div>
              <h3 class="font font-weight-normal content-title-2">National Cheng Chi University (NCCU)</h3>
              <p class="font  ml-2">
                Bachelor of Chinese Literature, Jun. 2013.
                Minor: Economics, Jun. 2013.
              </p>
            </div>
          </div>

          <div class="content justify-content-center mt-5">
            
            <div class="box box-content">
              <div
              class="d-flex flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
            >
              <h1 class="font font-weight-normal content-title">Certificate & Ability</h1>
            </div>
              <ul class="ml-1">
                <li>
                  <h4 class="font font-weight-normal content-title-2">Basic Test on the FinTech Knowledge</h4>
                </li>
                <li class="mt-2">
                  <h4 class="font font-weight-normal content-title-2">TOEIC Test：790 points</h4>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="eduModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="eduModal"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eduModalLabel">Photos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" >
                <div class="modal-box carousel-item active" >
              <img :src="img1" alt="img" class="modal-img d-block w-100">
            </div>
              <div class="modal-box carousel-item">
              <img :src="img2" alt="img" class="modal-img d-block w-100">
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
html {
  font-size: 15px;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

.font {
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

.sidebar-text {
  color: white;
  font-size: 1.1rem;
  width: 17rem;
  font-weight: lighter;
}

.sidebar-title {
  font-size: 4rem;
  color: white;
  font-weight: lighter;
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

/*
 * modal
 */
.modal-box{
  overflow:auto;
}
#carouselExampleControls{
  text-align: center;
  height: 100%;
  overflow:auto;
  margin: 0%;
}
.modal-img {
  width: auto;
	height: auto;
	overflow:auto;
 
}


/*
 * Content
 */

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
  padding-right: 4vw;
  padding-left: 4vw;
}

.content-btn {
  border-radius: 50rem;
  float:right;
  margin-left: 2vw;
  
}
@media (min-width: 768px) {
  [role="main"] {
    padding-top: 3rem; /* Space for fixed navbar */
    padding-right: 4vw;
    padding-left: 4vw;
  }

  .content {
    margin: 4rem;
  }


  .box {
    padding-left:  3rem;
    padding-right: 3rem;
  }
  .border-bottom {
    margin-left: 0rem;
    margin-right: 5rem;
  }
}

@media (max-width: 767px) {
  [role="main"] {
    padding-top: 3rem; /* Space for fixed navbar */
    padding-right: 4rem;
    padding-left: 4rem;
  }

  .content {
    margin-top: 2rem;
  }
  .content-title{
  
  font-size: 2rem;
   } 

   .content-title-2{
     font-size: 1.5rem;
   }


  .box {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .border-bottom {
    margin-left: 0rem;
    margin-right: 3rem;
  }
}
</style>

<script>
import $ from "jquery";

export default {
  name: "Education",
  data() {
    return {
      img1: "static/images/Education/Photo1.jpg",
      img2: "static/images/Education/Photo2.jpg",
      
    };
  },
  methods: {
    openPhoto() {
      $("#eduModal").modal("show");
    }
  }
};
</script>