<template>
  <div>
    <!-- NavBar -->
    <NavBar></NavBar>

    <!-- content of each page -->
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
html {
  font-size: 15px;
}
</style>



<script>
import NavBar from "@/components/NavBar";
import $ from "jquery";

export default {
  name: "Home",
  components: {
    NavBar,
  }
};
</script>




