<template>
  <div class="content-box d-flex flex-column">
    <!-- <div class=" pt-5 align-content-center justify-content-center"> -->
      <div class="text-box">
      <div class="title-box  justify-content-between align-items-center">
        <p class="content-title font font-weight-normal">Patent Paralegal</p>

        <button
          type="button"
          class="btn btn-sm btn-outline-secondary title-btn"
          data-toggle="modal"
          data-target="#ppModal"
          @click="openPhoto()"
        >Photo</button>
      </div>
      
        <div class="text">
          <p>Essen patent & trademark office</p>
          <p>Apr. 2014 - May. 2015</p>
          <ul>
            <li>Be responsible for client’s application of patent and trademark, led patent agents to finish works on time, coordinated subagents and clients to resolve application issues, and carried out the every steps of application thoroughly.</li>
            
<li>Acquired the professional knowledge about international laws and regulations of patent and trademark</li>
          </ul>
        </div>
      <!-- </div> -->
      
        <img class="main-image" :src="mainImage" alt="Main image">
      
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="ppModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Photo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div id="carouselExampleControls3" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="modal-box carousel-item active">
                  <img :src="img1" alt="img" class="modal-img d-block w-100">
                </div>
                <div class="modal-box carousel-item" v-for="item in carousel" :key="item">
                  <img :src="item.img" alt="img" class="modal-img d-block w-100">
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls3"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls3"
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
            <button type="button" class="btn btn-primary">Save changes</button>
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

.font {
  font-family: Noto, sans;
}


.title-box {
  border-bottom: 1px #2a4764 solid;
  text-align: left;
  display: flex;
  align-items: center;
   font-family: Noto, sans;
}

.content-title{
  font-size: 2rem;
}

.image-box {
  bottom: 0;
  text-align: center;
  align-items: bottom;
  justify-items:center;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}

.main-image {
  text-align: center;
  width: 100%;
  bottom: 0;
}

.title-btn {
  margin-left: 3rem;
}

.text-box {
  font-family: Noto, sans;
  text-align: center;
}

.btn {
  border-radius: 50rem;
}

.text {
  text-align: left;
  padding: 1rem 0rem ;
}

@media (min-width: 768px) {
.content-box{
  position: relative;
  height: calc(100vh - 48px);
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  justify-content: center;
align-items: center;
}

    .text-box{
  margin: 2rem 12rem;
}

  }

@media (max-width: 767px) {

.content-box {
  position: relative;
  height: 100%;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  justify-content: center;
  align-items: center;
}

  .text-box{
  margin: 2rem 4rem;
}

}

/*
 * modal
 */

.modal-box {
  overflow: auto;
}
#carouselExampleControls3 {
  text-align: center;
  margin: 0rem;
  height: 100%;
  overflow: auto;
}
.modal-img {
  width: auto;
  height: auto;
  overflow: auto;
}
</style>

<script>
export default {
  name: "patent-paralegal",
  data() {
    return {
      mainImage: "static/images/Works/patent_paralegal/main-img.png",
      img1: "static/images/Works/patent_paralegal/photo1.jpg",
      carousel: [
        { img: "static/images/Works/patent_paralegal/photo2.jpg" },
      ]
    };
  },
  methods: {
    openPhoto() {
      $("#Modal").modal("show");
    }
  }
};
</script>