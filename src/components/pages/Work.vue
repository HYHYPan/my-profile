<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky d-flex">
              <div class="sidebar-box">
                  <h1 class="sidebar-text sidebar-title">Work experience</h1>

                <div class="btn-each">
                <a href="#about" @click.prevent="getToPage('ov')">
                  <button type="button" class="btn btn-outline-light btn-sm">
                    Overview
                  </button>
                </a>
                <!-- </div> -->
                <!-- <div class="btn-each"> -->
                <a href="#about" @click.prevent="getToPage('pd')">
                  <button type="button" class="btn btn-outline-light btn-sm">
                    Program designer
                  </button>
                </a>
                <!-- </div> -->

                <!-- <div class="btn-each"> -->
                <a href="#about" @click.prevent="getToPage('am')">
                  <button type="button" class="btn btn-outline-light btn-sm">
                    Account Manager
                  </button>
                </a>
                <!-- </div> -->

                <!-- <div class="btn-each"> -->
                <a href="#about" @click.prevent="getToPage('pp')">
                  <button type="button" class="btn btn-outline-light btn-sm">
                    Patent Paralegal
                  </button>
                </a>
                </div>

              </div>

          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 align-items-center justify-content-center ">
          
          <div class=" d-flex flex-wrap flex-md-nowrap align-content-center justify-content-center">
             
              <router-view> </router-view>
          </div>
         
          

          

        </main>
      </div>
    </div>
    

    <!-- Modal -->
    <div
      class="modal fade"
      id="worksModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Photos</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="img1" alt="photos" class="photos">
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

<style lang="scss" scoped>
.line {
  margin-left: 35px;
}

.photos {
  height: 200px;
  width: 200px;
}

rect:hover {
  fill: rgb(65, 139, 207);
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
  line-height:100px;
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

.sidebar-title {
  font-size: 5vw;
  
}

.btn-sm {
  border-radius: 50rem;
}

a{
  display: block;
}

/*
 * Content
 */

[role="main"] {
  padding-top: 40px; /* Space for fixed navbar */
  padding-left:0px;
  padding-right: 0px; 
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 0rem; /* Space for fixed navbar */
  }


  
}


</style>

<script>
import $ from "jquery";
import OverView from '@/components/pages/work-pages/OverView'
import ProgramDesigner from '@/components/pages/work-pages/ProgramDesigner'
import AccountManager from '@/components/pages/work-pages/AccountManager'
import PatentParalegal from '@/components/pages/work-pages/PatentParalegal'

export default {
  name: "Works",
  data() {
    return {
     
    };
  },
  components: {
    OverView,
    ProgramDesigner,
    AccountManager,
    PatentParalegal,
  },
  methods: {
    getToPage(page){
      if(page === 'ov'){
        this.$router.push('/work');
      }else if(page === 'pd'){
        this.$router.push('/work/program-designer');
      }else if(page === 'am'){
        this.$router.push('/work/account-manager');
      }else if(page === 'pp'){
        this.$router.push('/work/patent-paralegal');
      }
    },

    


}
};
</script>