<template>
    <div>
        <section class="about_me clearfix">
         
        </section>
    </div>
</template>

<style lang="scss" scoped>

h2 {
  margin-bottom: 75px;
  text-align: center;
  font-size: 40px;
  line-height: 50px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.col-left, .col-right {
  float: left;
  width: 50%;
  padding: 0 15px;
}

.personal-info h3 {
  font-size: 15px;
  letter-spacing: 2px;
  margin-bottom: 6px;
  text-transform: capitalize;
}

.personal-info p {
  color: #767676;
  line-height: 24px;
  text-align: justify;
}

.skill {
  margin: 30px auto;
}

.skill li {
  font-size: 15px;
  line-height: 35px;
  text-transform: capitalize;
}

.button-group .download_cv, .button-group .hire_me {
  display: inline-block;
}

.button-group .download_cv {
  margin-right: 18px;
}

.button-group a {
  display: block;
  color: #000;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px 38px;
  text-transform: capitalize;
}

.button-group a:hover {
  background: #000;
  color: #fff;
  -webkit-transition: all .4s linear;
  -moz-transition: all .4s linear;
  -ms-transition: all .4s linear;
  -o-transition: all .4s linear;
  transition: all .4s linear;
}
</style>

<script>
export default {
    name: "About",
    data(){
        return{
            aboutImg: "static/images/head-2.jpg",
        }
    }
}
</script>