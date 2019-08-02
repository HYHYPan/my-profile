<template>
  <div>
    <!-- NavBar -->
    <NavBar></NavBar>

    <!-- content of each page -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
</style>



<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import $ from "jquery";

export default {
  name: "Home",
  components: {
    NavBar,
    SideBar
  }
};
</script>




