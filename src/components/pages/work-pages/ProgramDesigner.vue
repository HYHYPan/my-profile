<template>
  
    <div class="content-box pt-5  align-content-center justify-content-center">
      <div class="main-image ">
        <img class="d-flex align-content-end left" :src="mainImage" alt="Main image">
      </div>

      <div class="text-box align-content-center justify-content-center">
        <h1>Program designer</h1>
        <br>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary title-btn"
        >Photo</button>
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
    width: 50%;
  }
.font{
  font-family: Noto, sans;
}
.text-box {
  font-weight: lighter;
  float: left;
  width: 50%;
  padding-left: 2%;
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