<template>
  
    <div class="content pt-5  align-content-center justify-content-center">
      <div class="main-image ">
        <img class="d-flex align-content-end left" :src="mainImage" alt="Main image">
      </div>

      <div class="text align-content-center justify-content-center">
        <h1>Program designer</h1>
        <br>
        <p>BNP PARIBAS CARDIF</p>

        <p>July.2018 - Dec.2018 (temp worker)</p>

        <ul>
          <li>Design the programs of interior system.</li>
          <li>Fix the system issues.</li>
          <li>Improve the programs and functions based on users’ feedbacks.</li>
        </ul>
      </div>
    </div>
  
</template>

<style lang="scss" scoped>
.main-image{
    
    width: 35vw;
  }
.text {
  font-weight: lighter;
  font-family: Noto, sans;
  float: left;
  width: 50%;
  padding-left: 1vw;
}

.left {
  float: left;
  width: 50%;
  padding: 0px;
}
</style>

<script>
export default {
  name: "program-designer",
  data() {
    return {
      mainImage: "static/images/Works/work2-img.png"
    };
  }
};
</script>