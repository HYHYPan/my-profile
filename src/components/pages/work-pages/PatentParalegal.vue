<template>
  <div>
    
    <div class="text-box content-box pt-5  align-content-center justify-content-center">
      <div class="title-box">
        <h1 class="font font-weight-normal left">Patent Paralegal</h1>
        
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary title-btn right"
          data-toggle="modal" data-target="#ppModal"
          @click="openPhoto()"
        >Photo</button>
      </div>
      <div class="text-box">
      <div class="text">
        <p>SAYA Network Co., Ltd</p>
        <p>Jul.2015 - Dec.2017</p>
        <ul>
          <li>Facebook Ads Account Manager：Managed, optimized and analyzing Facebook Ads.</li>
          <li>LINE@ Account Manager：In charge of LINE@ and LINE@ market affairs.</li>
        </ul>
      </div>
    </div>
    <div class="image-box">
    
      <img class="main-image" :src="mainImage" alt="Main image">
    
    </div>
    </div>

    <!-- Modal -->
      <div class="modal fade " id="ppModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <div class="carousel-inner" >
                <div class="modal-box carousel-item active" >
              <img :src="img1" alt="img" class="modal-img d-block w-100">
            </div>
              <div class="modal-box carousel-item">
              <img :src="img2" alt="img" class="modal-img d-block w-100">
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
.font{
  font-family: Noto, sans;
}

.image-box{
  // position: fixed;
  bottom: 0;
  // z-index: 100; /* Behind the navbar */
  text-align: center;
   
}

.main-image{
    text-align: center;
     height:100%;
     width: 100%;

    }
    .title-box{
  border-bottom:1px #2a4764 solid; 
  padding-bottom:5px; 
  margin:  2rem 14rem; 
  // font-weight: lighter;
  font-family: Noto, sans;
text-align: left;
  // font-size: 2.3vw;
}

.title-btn{
     margin-left: 6vw;
}

.text-box {
  font-family: Noto, sans;
  text-align: center;
}

.btn {
  border-radius: 50rem;
}

.text{
  text-align: left;
  padding: 0 20vw;
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
  name: "patent-paralegal",
  data() {
    return {
      mainImage: "static/images/Works/patent_paralegal/main-img.png",
      img1:"static/images/Works/program_designer/reference.png",
      img2:"static/images/Works/program_designer/reference2.png",
    };
  },
  methods: {
    openPhoto() {
      $("#Modal").modal("show");
    }
  }
};
</script>