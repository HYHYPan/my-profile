<template>
  <div>
    
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous"
        >

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" @click.prevent="homePage" >
                HAZELPAN
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">Work Experiences</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">Skills</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <button class="btn btn-secondary" role="button" @click="loginPage" > Login</button>
            
        </div>
      </nav>
   
   
    
  </div>
</template>

<script>
export default {
  name:'NavBar',
  methods:{
    homePage(){
      const vm = this;
      vm.$router.push('/');
    },
    loginPage(){
      const vm = this;
      vm.$router.push('/login');
    }
  }

}
</script>

