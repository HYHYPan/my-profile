<template>
    <div class="content-box">
       
       
             <img class="main-image d-flex align-content-center pt-5" :src="mainImage" alt="Main image">
          
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
    width: 100%;
  }

 
</style>

<script>
export default {
    name: "patent-paralegal",
  data() {
    return {
       mainImage: "static/images/Works/main-img.png",
      
    };
  },
}
</script>