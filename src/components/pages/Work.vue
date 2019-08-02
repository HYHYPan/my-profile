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
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm page-btn font-weight-light"
                  >Overview</button>
                </a>

                <a href="#about" @click.prevent="getToPage('pd')">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm page-btn font-weight-light"
                  >Program designer</button>
                </a>

                <a href="#about" @click.prevent="getToPage('am')">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm page-btn font-weight-light"
                  >Account Manager</button>
                </a>

                <a href="#about" @click.prevent="getToPage('pp')">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm page-btn font-weight-light"
                  >Patent Paralegal</button>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <!-- main content -->
        <main
          role="main"
          class="col-md-8 ml-sm-auto col-lg-8 align-items-center justify-content-center"
        >
          <!-- @media (min-width: 768px) -->
          <div
            class="box-lg d-flex flex-wrap flex-md-nowrap align-content-center justify-content-center"
            v-if="screenWidth >= 768"
          >
            <router-view class="box-lg" v-if=" screenWidth >= 768"></router-view>
          </div>

          <!-- @media (max-width: 767px) -->
          <div
            class="d-flex flex-wrap flex-md-nowrap align-content-center justify-content-center"
            v-if="screenWidth <= 767"
          >
            <h1
              class="box-sm title justify-content-center font font-weight-normal"
              v-if="screenWidth <= 767"
            >Work experience</h1>
            <OverView class="box-sm justify-content-center border-bottom" v-if="screenWidth <= 767"></OverView>
            <ProgramDesigner class="box-sm justify-content-center" v-if="screenWidth <= 767"></ProgramDesigner>
            <AccountManager
              class="box-sm justify-content-center border-bottom"
              v-if="screenWidth <= 767"
            ></AccountManager>
            <PatentParalegal class="box-sm justify-content-center box-bg" v-if="screenWidth<= 767"></PatentParalegal>
          </div>
        </main>
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

.font {
  font-family: Noto, sans;
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
  // box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  background-color: #2a4764;
  line-height: 100px;
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
  font-size: 4.5vw;
}

.page-btn {
  border-radius: 50rem;
}

a {
  display: block;
  height: 2vw;
  margin: 2vw;
}

/*
 * Content
 */
[role="main"] {
  padding-top: 40px; /* Space for fixed navbar */
  padding-left: 0px;
  padding-right: 0px;
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 0rem; /* Space for fixed navbar */
  }

  .box-lg {
    justify-content: center;
    align-items: center;
  }
  .box-sm {
    display: none;
  }
}

@media (max-width: 767px) {
  .box-lg {
    display: none;
  }

  .box-sm {
    align-items: center;
    margin-bottom: 0rem;
  }

  .border-bottom {
    border-bottom: #96acc3 1rem solid;
  }
}
</style>

<script>
import $ from "jquery";
import OverView from "@/components/pages/work-pages/OverView";
import ProgramDesigner from "@/components/pages/work-pages/ProgramDesigner";
import AccountManager from "@/components/pages/work-pages/AccountManager";
import PatentParalegal from "@/components/pages/work-pages/PatentParalegal";

export default {
  name: "work",
  data() {
    return {
      screenWidth: window.innerWidth
    };
  },
  components: {
    OverView,
    ProgramDesigner,
    AccountManager,
    PatentParalegal
  },
  methods: {
    getToPage(page) {
      if (page === "ov") {
        this.$router.push("/work");
      } else if (page === "pd") {
        this.$router.push("/work/program-designer");
      } else if (page === "am") {
        this.$router.push("/work/account-manager");
      } else if (page === "pp") {
        this.$router.push("/work/patent-paralegal");
      }
    },
    setWidowWidth() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.screenWidth = window.innerWidth;
          that.screenWidth = window.screenWidth;
        })();
      };
    },
    watchTheWidth(val) {
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          console.log(that.screenWidth);
          that.timer = false;
        }, 400);
      }
    }
  },
  mounted() {
    this.setWidowWidth();
  },
  watch: {
    screenWidth: {
      handler: "watchTheWidth",
      deep: true
    }
  }
};
</script>