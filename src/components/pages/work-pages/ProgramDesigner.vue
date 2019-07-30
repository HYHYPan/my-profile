<template>
  
    <div class="content-box pt-5 d-flex">
      <div class="main-image d-flex">
        <img class="d-flex align-content-end" :src="mainImage" alt="Main image">
      </div>

      <div class="text-box font">
        <h1 class="font font-weight-normal">Program designer</h1>
        <br>
        
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary content-btn"
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