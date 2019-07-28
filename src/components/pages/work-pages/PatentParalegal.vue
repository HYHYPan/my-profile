<template>
  <div>
    
    <div class="text-box content-box pt-5  align-content-center justify-content-center">
      <div class="title-box">
        Patent Paralegal
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary title-btn"
        >Photo</button>
      </div>

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


 

    

</template>

<style lang="scss" scoped>

.image-box{
  // position: fixed;
  bottom: 0;
  z-index: 100; /* Behind the navbar */
    text-align: center;



}
.main-image{
    text-align: center;
      width: 80vw;
      height: 23vw;

    }
    .title-box{
  border-bottom:1px #2a4764 solid; 
  padding-bottom:5px; 
  margin: 2vw 15vw; 
  // font-weight: lighter;
  font-family: Noto, sans;
text-align: left;
  font-size: 2.3vw;
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
</style>

<script>
export default {
  name: "patent-paralegal",
  data() {
    return {
      mainImage: "static/images/Works/work4-img.png",
    };
  }
};
</script>