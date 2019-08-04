<template>
  <div >
    <div class="d-flex" id="work-am">
      <img class="main-image" :src="mainImage" alt="Main image">
    </div>
    <div class="content-box">
      <div class="title-box font">
        <h1 class="left font font-weight-normal"> Account Manager</h1>   
        <button
          type="button"
          class="right btn btn-sm btn-outline-secondary content-btn "
          data-toggle="modal" data-target="#amModal"
          @click="openPhoto()"
        >Photo</button>
      </div>

      <div class="text font ">
        <p>SAYA Network Co., Ltd</p>

        <p>Jul.2015 - Dec.2017</p>

        <ul>
          <li>Facebook Ads Account Manager：Managed, optimized and analyzing Facebook Ads.</li>
          <li>LINE@ Account Manager：In charge of LINE@ and LINE@ market affairs.</li>
        </ul>
      </div>
    </div>

    <!-- Modal -->
      <div class="modal fade bd-example-modal-lg" id="amModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Photo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" >
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" >
                <div class="modal-box carousel-item active">
              <img :src="img1" alt="img" class="modal-img d-block w-100">
            </div>
                <div class="modal-box carousel-item" v-for="item in carousel" :key="item" >
              <img :src="item.img" alt="img" class="modal-img d-block w-100">
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
.font{
  font-family: Noto, sans;
}
.main-image {
  width: 100%;
  // height: 23vw;
}
.content-box {
  text-align: center;
   align-items: center;
}
.title-box {
  border-bottom: 1px #2a4764 solid;
  margin: 2rem 14rem;
  text-align: left;
  // display: inline-block ;
  display: flex;
  align-items: center;
  
}
.left{
  margin-right:3rem;
  float: left;
}
  .right{
    float: left;
align-items: center;
  }

.content-btn {
  border-radius: 50rem;
  
}

.text {
  // border-top: 1px #2a4764 solid;
  // padding-bottom: 5px;
  text-align: left;
  padding: 0rem 15rem;
}

/*
 * modal
 */
.modal-box{
  overflow:auto;
}
#carouselExampleControls{
  text-align: center;
  height: 100%;
  overflow:auto;
  margin: 0%;
}
.modal-img {
  width: auto;
	height: auto;
	overflow:auto;
 
}

</style>

<script>
export default {
  name: "account-manager",
  data() {
    return {
      mainImage: "static/images/Works/account_manager/main-img.png",
      img1:"static/images/Works/account_manager/success_story.png",
      carousel:[ 
      {img:"static/images/Works/account_manager/photo2.png"},
      {img:"static/images/Works/account_manager/photo3.png"},
      {img:"static/images/Works/account_manager/photo4.png"},
      {img:"static/images/Works/account_manager/photo5.jpg"},
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