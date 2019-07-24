<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->
        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">
              <h1 class="sidebar-title">Skill</h1>
              <p
                class="sidebar-text"
              >There are four main groups of my skills : Program, Design, Marketing and Office software.</p>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4">
          <div class="flex-wrap flex-md-nowrap align-items-center justify-content-center">
            <div class="box">
              <h1>Program</h1>
              <a
                href="#"
                @click.prevent="openPhot(1)"
                data-toggle="modal"
                data-target="#skillModal"
              >
                <img :src="img1" alt="img-1" class="box-img">
              </a>
            </div>

            <div class="box">
              <h1>Design</h1>
              <a href="#" @click.prevent="openPhoto(2)" data-toggle="modal"
                data-target="#skillModal2">
                <img :src="img2" alt="img-2" class="box-img">
              </a>
            </div>

            <div class="box">
              <h1>Marketing</h1>
              <a href="#" @click.prevent="openPhoto(3)" data-toggle="modal"
                data-target="#skillModal3">
                <img :src="img3" alt="img-3" class="box-img">
              </a>
            </div>

            <div class="box">
              <h1>Office Software</h1>
              <a href="#" @click.prevent="openPhoto(4)" data-toggle="modal"
                data-target="#skillModal4">
                <img :src="img4" alt="img-4" class="box-img">
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>

    <!-- Modal-1 -->
    <div
      class="modal fade "
      id="skillModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="skillModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="skillModalLabel">Program</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" >
           
            <div class="modal-box" v-for="item in program" :key="item">
              <img :src="item.img" alt="img" class="modal-img">
            </div>
 
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          
          </div>
        </div>
      </div>
    </div>
    <!-- Modal-2 -->
    <div
      class="modal fade"
      id="skillModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="skillModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="skillModalLabel">Design</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
              <div class="modal-box" v-for="item in design" :key="item">
              <img :src="item.img" alt="img" class="modal-img">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          
          </div>
        </div>
      </div>
    </div>

    <!-- Modal-3 -->
    <div
      class="modal fade"
      id="skillModal3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="skillModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="skillModalLabel">Marketing</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-box" v-for="item in marketing" :key="item">
              <img :src="item.img" alt="img" class="modal-img">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          
          </div>
        </div>
      </div>
    </div>

    <!-- Modal-4 -->
    <div
      class="modal fade"
      id="skillModal4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="skillModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="skillModalLabel">Office software</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-box" v-for="item in officeSoftware" :key="item">
              <img :src="item.img" alt="img" class="modal-img">
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
  font-size: 4vw;
  color: white;
  font-weight: lighter;
  font-family: Noto, sans;
}

.sidebar-text {
  color: white;
  width: 15vw;
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


.btn {
  border-radius: 50rem;
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

.box {
  text-align: center;
  margin-bottom: 6vw;
}

.box-img {
  text-align: center;
  // border: #707070 1px solid;
  height: 15vw;
  width: 15vw;
}

.modal-body, .modal-box{
  text-align: center;
}

.modal-img {
  text-align: center;
  float: left;
  width: 10vw;
  height: 10vw;
  padding:2vw;
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
    padding-right: 4vw;
    padding-left: 4vw;
  }
}


</style>

<script>
import $ from "jquery";

export default {
  name: "Skills",
  data() {
    return {
      img1: "static/images/Skills/program.png",
      img2: "static/images/Skills/design.png",
      img3: "static/images/Skills/marketing.png",
      img4: "static/images/Skills/office_software.png",
      program: [
        {img:"static/images/Skills/Program/css.png"},
        {img:"static/images/Skills/Program/html5.png"},
        {img:"static/images/Skills/Program/js.png"},
        {img:"static/images/Skills/Program/vue.png"},
      ],
      design: [
        {img:"static/images/Skills/Design/xd.png"},
        {img:"static/images/Skills/Design/marvel.png"},
        {img:"static/images/Skills/Design/ps.png"},
        {img:"static/images/Skills/Design/ai.png"},
        {img:"static/images/Skills/Design/sketch.png"},
      ],
      marketing: [
        {img:"static/images/Skills/Marketing/line@.png"},
        {img:"static/images/Skills/Marketing/fb.png"},
        {img:"static/images/Skills/Marketing/ga.png"},

      ],
      officeSoftware: [
        {img:"static/images/Skills/Office_software/word.png"},
        {img:"static/images/Skills/Office_software/ppt.png"},
        {img:"static/images/Skills/Office_software/pdf.png"},

      ],
      
    };
  },
  methods: {
    openPhoto(num) {
      if(num === 1){
        $("#skillModal").modal("show");
      }else if(num === 2){
         $("#skillModal2").modal("show");
      }else if(num === 3){
         $("#skillModal3").modal("show");
      }else if(num === 4){
         $("#skillModal4").modal("show");
      }
      
      
    }
  }
};
</script>