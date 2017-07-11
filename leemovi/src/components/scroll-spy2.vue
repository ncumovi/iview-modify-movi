<template>
  <div>
    <!--<header id="site-header" class="nav is-fixed" style="position: fixed">-->
      <!--<div class="container">-->
        <scrollactive  active-class="active"
                      :offset="0"
                      :duration="800"
                      bezier-easing-value=".5,0,.35,1" style="position: fixed">
          <ul class="nav-center">
            <li><a href="#home" class="scrollactive-item nav-item">Home</a></li>
            <li><a href="#section-1" class="scrollactive-item nav-item">Section 1</a></li>
            <li><a href="#section-2" class="scrollactive-item nav-item">Section 2</a></li>
            <li><a href="#section-3" class="scrollactive-item nav-item">Section 3</a></li>
            <li><a href="#section-4" class="scrollactive-item nav-item">Section 4</a></li>
          </ul>
        </scrollactive>
      <!--</div>-->
    <!--</header>-->


    <header id="" class="nav is-fixed" style="position: fixed;right: 0;">
      <div class="container">
        <scrollactive  active-class="active"
                       :offset="0"
                       :duration="800"
                       bezier-easing-value=".5,0,.35,1">
          <ul class="nav-center">
            <li><a href="#section-5" class="scrollactive-item nav-item">Section 5</a></li>
            <li><a href="#section-6" class="scrollactive-item nav-item">Section 6</a></li>
            <li><a href="#section-7" class="scrollactive-item nav-item">Section 7</a></li>
            <li><a href="#section-8" class="scrollactive-item nav-item">Section 8</a></li>
          </ul>
        </scrollactive>
      </div>
    </header>
    <main style="height: 500px;overflow: scroll;background:pink;">
      <section id="home" class="section hero is-primary is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Home</h1>
        </div>
      </section>

      <section id="section-1" class="section hero is-info is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 1</h1>
        </div>
      </section>

      <section id="section-2" class="section hero is-danger is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 2</h1>
        </div>
      </section>

      <section id="section-3" class="">
        <div class="">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="">Section 3dd</h1>
        </div>
      </section>

      <section id="section-4" class="section hero is-success is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 4</h1>
        </div>
      </section>
    </main>
    <hr>

<main>
      <section id="section-5" class="section hero is-info is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 5</h1>
        </div>
      </section>

      <section id="section-6" class="section hero is-danger is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 6</h1>
        </div>
      </section>

      <section id="section-7" class="section hero is-success is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 7</h1>
        </div>
      </section>

      <section id="section-8" class="section hero is-success is-fullheight">
        <div class="container">
          <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>   <br>
          <h1 class="heading title is-1">Section 8</h1>
        </div>
      </section>
    </main>
    <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>  <br>

  </div>
</template>
<style>
.active{
  color: red;
}
</style>
<script>
  export default{
    data(){
      return{
        scrollPos: 0
      }
    }
  }
</script>
