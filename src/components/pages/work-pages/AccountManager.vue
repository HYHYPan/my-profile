<template>
    <div>
      <div class="d-flex">
        <img class="main-image " :src="mainImage" alt="Main image">
        </div>
        <div class="text-box">
          
        <div class="title-box">
          Account Manager
            <button type="button" class="btn btn-sm btn-outline-secondary title-btn">
             
              Photo
            </button>
          
          

        </div>

      <div class="text">
        <p >SAYA Network Co., Ltd</p>

        <p>Jul.2015 - Dec.2017</p>

        <ul>
          <li>Facebook Ads Account Manager：Managed, optimized and analyzing Facebook Ads. </li>
          <li>LINE@ Account Manager：In charge of LINE@ and LINE@ market affairs.</li>
         
        </ul>
      </div>
  </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-image{
      width: 66.6vw;
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

// .title-text{
     
//   margin:0px;
// }

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
    name: "account-manager",
  data() {
    return {
      mainImage: "static/images/Works/work3-img.png",
      
    };
  },
}
</script>