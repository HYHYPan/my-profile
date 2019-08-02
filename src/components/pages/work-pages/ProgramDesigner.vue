<template>
  
    <div class="content-box pt-5 d-flex">
      <!-- <div class="main-image d-flex"> -->
        <img class="d-flex align-content-end main-image" :src="mainImage" alt="Main image">
      <!-- </div> -->

      <div class="text-box font">
        <h1 class="font font-weight-normal">Program designer</h1>
        <br>
        
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary content-btn" data-toggle="modal" data-target="#Modal"
          @click="openPhoto()"
        >Photo</button>
        <p>BNP PARIBAS CARDIF</p>
        <p>July.2018 - Dec.2018 (temp worker)</p>

        <ul>
          <li>Design the programs of interior system.</li>
          <li>Fix the system issues.</li>
          <li>Improve the programs and functions based on users’ feedbacks.</li>
        </ul>
      </div>

<!-- Modal -->
      <div class="modal fade bd-example-modal-lg" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Photo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" >
                <div class="modal-box carousel-item active " >
              <img :src="img1" alt="img" class="modal-img d-block w-100">
            </div>
              <div class="modal-box carousel-item">
              <img :src="img2" alt="img" class="modal-img d-block w-100">
            </div>
            <div class="modal-box carousel-item">
              <img :src="img3" alt="img" class="modal-img d-block w-100">
            </div>

            </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
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

.content-box{
  position: relative;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-image{
   width: 30%;
   float: left;
}
.font{
  font-family: Noto, sans;
}

.text-box {
  text-align: left;
  
  float: left;
  width: 50%;
  padding: 0 3%;
}

.content-btn{
  border-radius: 50rem;
  float:right;
}

/*
 * modal
 */


.modal-box{
  overflow:auto;
}
#carouselExampleControls{
  text-align: center;
  // width: 100%;
  height: 100%;
  overflow:auto;
}
.modal-img {
  width: auto;
	height: auto;
	overflow:auto;
 
}

</style>

<script>
export default {
  name: "program-designer",
  data() {
    return {
      mainImage: "static/images/Works/program_designer/main-img.png",
      img1:"static/images/Works/program_designer/reference.png",
      img2:"static/images/Works/program_designer/photo1.jpg",
      img3:"static/images/Works/program_designer/photo2.jpg",
    };
  },
  methods: {
    openPhoto() {
      $("#Modal").modal("show");
    }
  }
};
</script>