<template>
  <div>
    <div class="row featurette">
      <div class="container text-center">
        <div class="service-header mx-auto text-center">
          <h1 class="display-4">Work Experiences</h1>
        </div>
      </div>

      <!-- content -->
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
            role="btn"
            aria-label="Placeholder: 2018"
            @click.prevent="openPhoto"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#6f42c1"></rect>
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em" font-size="20px">2018</text>
          </svg>

          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
              <h5>Kong Shiang Network Co., Ltd, Backend Engineer(temp worker), July.2018-Dec.2018</h5>
            </strong>
            Work as a Backend Engineer in a global insurance company. Fixing logic problems, building new functions are daily main jobs.
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
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em" font-size="18px">2016-2017</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
              <h5>SAYA Network Co., Ltd, LINE@ Account Manager, Dec.2016-Dec.2017</h5>
            </strong>

            In charge of LINE@ and LINE@ market affairs. Engaged in LINE@ promotion, price planning, strategy planning and other relevant works.
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
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em" font-size="18px">2015-2016</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
              <h5>SAYA Network Co., Ltd, Facebook Account Manager, Jul.2015 - Dec.2016</h5>
            </strong>
            Manage Facebook Ads, including setting up, optimizing, analyzing the data of Facebook Ads, and customizing the report of Facebook Ads data
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
            <text x="50%" y="50%" fill="#FFFAFA" dy=".3em" font-size="18px">2014-2015</text>
          </svg>
          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong class="d-block text-gray-dark">
              <h5>Essen patent & trademark office, Intelligent Property Management Attorney, Apr. 2014 - May. 2015</h5>
            </strong>
            Be responsible for client’s application of patent and trademark, led patent agents to finish works on time.
          </p>
        </div>

        <small class="d-block text-right mt-3">
          <a href="#">All updates</a>
        </small>
      </div>
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
</style>

<script>
import $ from "jquery";

export default {
  name: "Works",
  data() {
    return {
      photos: {
        img1: "static/images/Service/logo.png",
        img2: "static/images/Service/html5.png",
        img3: "static/images/Service/illustration.jpg",
        img4: "static/images/Service/illustration.jpg"
      }
    };
  },
  methods: {
    openPhoto() {
      $("#worksModal").modal("show");
    }
  }
};
</script>