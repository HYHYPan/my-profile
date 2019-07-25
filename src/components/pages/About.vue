<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- SideBar -->

        <nav class="col-md-4 d-none d-md-block sidebar">
          <div class="sidebar-sticky">
            <div class="sidebar-box">
              <h1 class="sidebar-title font">Hazel Pan</h1>
              <p class="sidebar-text font mt-4">
                A dreammaker and an altruist.
                
                <br>“ Life is a great big canvas, and you should throw all the paint on if you can ”
              </p>
            </div>
          </div>
        </nav>

        <main role="main" class="col-md-8 ml-sm-auto col-lg-8">
          <div class="d-flex justify-content-center flex-wrap flex-md-nowrap box">

             <!-- The style of min-width: 768px -->
            <div class="left ">
              <img class="left-img mb-3" :src="img1" alt="photo">
              <p class="content-title mt-4 font">Advantage & Personality</p>
              
                <ul class="content-text font align-items-center mt-3 ml-3 mr-3">
                <li>Willing to innovate good ideas to help people.</li>
                <li>Ability to work independently and within a team.</li>
                <li>Willing to learn about new processes and concepts with a strong sense of curiosity.</li>
                
              </ul>
              
            </div>

            <div class="right ">
              <p class="pt-5 content-text font">
                Hi, I am <strong class="name font">Hazel Pan</strong>, an easy-going individual. I can deal with colleagues harmoniously in most situations.
                Always have a strong sense of curiosity and a desire to know how things work.
                Love Traveling, painting and puzzle-solving.
              </p>
              <img class="right-img mt-5" :src="img2" alt="photo">
            </div>

            <!-- The style of max-width: 767px -->
            <div class="left-sm">


              <p class="content-title font mt-5">Hazel Pan</p>
              <p class="content-text font">
                "Life is a great big canvas, and you should throw all the paint on if you can"
              </p>
              <img class="left-img " :src="img1" alt="photo">
              <p class="mt-5 content-text font">
                Hi, I am <strong class="name font">Hazel Pan</strong>, an easy-going individual. I can deal with colleagues harmoniously in most situations.
                Always have a strong sense of curiosity and a desire to know how things work.
                Love Traveling, painting and puzzle-solving.
              </p>
            </div>

            <div>
              <hr>
            </div>
            

            <div class="right-sm">
              <img class="right-img mt-5" :src="img2" alt="photo">
              <p class="content-title mt-5 font">Advantage & Personality</p>
              
                <ul class="content-text font align-items-center mt-3 ml-3 mr-3">
                <li>Willing to innovate good ideas to help people.</li>
                <li>Ability to work independently and within a team.</li>
                <li>Willing to learn about new processes and concepts with a strong sense of curiosity.</li>
                
              </ul>
              
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.font{
  font-family: Noto, sans;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
  height: 100%;
  background-color: #2a4764;
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  text-align: center;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar-box {
  text-align: center;
}

.sidebar-title {
  color: white;
  font-weight: lighter;
  font-size: 5vw;
}

.sidebar-text {
  text-align: center;
  color: white;
  width: 22.5vw;
  line-height: 2vw;
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: white;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}



/*
 * Content
 */

[role="main"] {
   padding-top: 0%; /* Space for fixed navbar */
   margin-top: 0%;
  padding-left: 0%;
  padding-right: 0%;
}

@media (min-width: 768px) {
  [role="main"] {
     padding-top: 0%; /* Space for fixed navbar */
  }

  .left,
.right {
  float: left;
  width: 50%;
  padding: 0px;
}



.left-sm,
.right-sm {
  display: none;
}



}

@media (max-width: 767px) {
  .box{
    text-align: center;
  }
    .left,
    .right {
      display: none;
      float: center;
  }
.left-sm,
.right-sm {
  float: center;
  width: 70%;
}
  

  
}


.name{
  display: inline; 
  font-size: 2em;
  font-weight: normal;
}
.content-title{
  text-align: center;
  padding: 0%;
  font-size: 2em;
}
.content-text {
  padding: 0 3vw;
  text-align: left;
}

.left-img,
.right-img {
  width: 100%;

  text-align: center;
  margin: 0px;
  padding: 0pt;
}




</style>

<script>
export default {
  data() {
    return {
      img1: "static/images/head-1.png",
      img2: "static/images/head-2.jpg",
      
    };
  }
};
</script>