<template>
    <div>
       
       
             <img class="main-image d-flex align-content-end pt-5" :src="mainImage" alt="Main image">
          
    </div>
</template>

<style lang="scss" scoped>
    .main-image{
    height: 50vw;
    width: 50vw;
  }
</style>

<script>
export default {
    name: "patent-paralegal",
  data() {
    return {
       mainImage: "static/images/Works/main-image.png",
      
    };
  },
}
</script>