<template>
  <div>
    

   
    <!-- NavBar -->
    <NavBar></NavBar>

        <!-- content of each page -->
        <router-view></router-view>
        
      </div>
   
 
</template>


<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
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
      row3: "static/images/illustration.jpg",
      sideContent: ``
    };
  },

  components: {
    NavBar,
    SideBar
  },
};
</script>




