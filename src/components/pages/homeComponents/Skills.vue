<template>
  <div>
    <div class="row featurette">
      <div class="container text-center">
        <div class="service-header mx-auto text-center">
          <h1 class="display-4 l-title">Skills</h1>
        </div>
      </div>
    </div>
    <!-- content*8 -->
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_1"
            alt="skill_1"
            id="skill_1"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">HTML</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_2"
            alt="skill_2"
            id="skill_2"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">CSS</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_3"
            alt="skill_3"
            id="skill_3"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">JavaScript</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_4"
            alt="skill_4"
            id="skill_4"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">VUE</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_5"
            alt="skill_5"
            id="skill_5"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">SCSS</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_6"
            alt="skill_6"
            id="skill_6"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">Toeic</h3>
        </div>
        <!-- /.col-lg-3 -->
        <div class="col-lg-3 mx-auto text-center">
          <img
            :src="skill_7"
            alt="skill_7"
            id="skill_7"
            class="bd-placeholder-img rounded-circle mx-auto text-center mt-4"
            width="150"
            height="150"
          >
          <h3 class="skill-title">金融數位力證照</h3>
        </div>
        <!-- /.col-lg-3 -->
      </div>
      <!-- /.row -->

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

.bd-placeholder-img{
  overflow:hidden;
}


</style>

<script>
import $ from "jquery";

export default {
  name: "Skills",
  data() {
    return {
        skill_1: "static/images/Skills/html5.png",
        skill_2: "static/images/Skills/css.png",
        skill_3: "static/images/Skills/js.png",
        skill_4: "static/images/Skills/vue-logo.png",
        skill_5: "static/images/Skills/sass.png",
        skill_6: "static/images/Skills/toeic.jpg",
        skill_7: "static/images/Skills/金融數位力.png",
    };
  },
  methods: {
    openPhoto() {
      $("#worksModal").modal("show");
    }
  }
};
</script>