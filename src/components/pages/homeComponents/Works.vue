<template>
  <div>
    <div class="row featurette">
      <div class="container text-center">
        <div class="service-header mx-auto text-center">
          <h1 class="display-4">Work Experiences</h1>
        </div>

        

        

        

        
      </div>
    </div>
    <!-- -->
    <div class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="100"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 2018"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#007bff"></rect>
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em">20
              <br /> 18</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark"><h5> Kong Shiang Network Co., Ltd, Backend Engineer  </h5></strong>
             
          </p>
        </div>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="100"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#e83e8c"></rect>
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em">2016 <br/>-2017</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark"> <h5> SAYA Network Co., Ltd,LINE@ Account Manager, Dec.2016-Dec.2017 </h5> </strong>
           
          </p>
        </div>
        <div class="media text-muted pt-3">
          <svg
            class="bd-placeholder-img mr-2 rounded"
            width="100"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 32x32"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#6f42c1"></rect>
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em">2015-2016</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark"> <h5>SAYA Network Co., Ltd </h5></strong>
            Facebook Account Manager, Jul.2015 - Dec.2016
          </p>
        </div>
        <small class="d-block text-right mt-3">
          <a href="#">All updates</a>
        </small>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  margin-left: 35px;
}
</style>

<script>
import $ from "jquery";

export default {
  name: "Works",
  data() {
    return {
      card1: "static/images/logo.png",
      card2: "static/images/html5.png",
      card3: "static/images/illustration.jpg"
    };
  },
  methods: {}
};
</script>