<template>
  <div>

   <!-- header -->
   <header>
      <NavBar/>
      </header>
      <br>
      <br>
     
    <main role="main ">
    
       <form class="form-signin">
      <img
        class="mb-4"
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        alt
        width="72"
        height="72"
      >
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus
      >
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required
      >
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

      <div class="login-or">
        <hr class="hr-or">
        <span class="span-or">or</span>
      </div>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Facebook</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
     </main>
     
   
 

   

    <!-- FOOTER -->
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

export default {
  name: "Login",
  data() {
    return {
      logo: "Welcome to Your Vue.js App"
    };
  },
  components:{
      NavBar,
      Footer,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.login-or {
    position: relative;
    color: #aaa;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    }
    
    .hr-or {
    height: 1px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
    }

    .span-or {
        background-color: #f5f5f5;
        display: block;
        position: absolute;
        left: 50%;
        top: -2px;
        margin-left: -25px;
        width: 50px;
        text-align: center;
        }
  
</style>
