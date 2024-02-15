<template>
  <header>
    <nav class="navbar">
      <img src="../../assets/logo.svg" alt="website logo" class="navbar-brand">
      <!-- this empty div guarantees that the desing will be correct -->
      <div class="navbar-brand"></div>
      <ul class="nav justify-items-center align-items-center text-color center">
        <li class="nav-item">
          <router-link to="/home" class="nav-link gradient-text-hover">home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link gradient-text-hover">about</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link gradient-text-hover">projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link gradient-text-hover">contact</router-link>
        </li>
      </ul>
      <button id="theme-changer" class="btn" type="button" v-on:mouseenter="rotateElement($event, false)" v-on:mouseleave="rotateElement($event, true)">
        <img src="../../assets/theme_changer-sun.svg" alt="sun icon">
      </button>
      <span id="language-changer" class="d-flex align-items-center justify-content-center">
        <button class="btn active">en</button>
        <span class="line"></span>
        <button class="btn">pt</button>
      </span>
    </nav>
  </header>

</template>
<script>
export default {
  methods: {
    rotateElement (event, isReverseRotate) {
      if (isReverseRotate) {
        event.target.style.transform = 'rotate(0deg)'
      } else {
        event.target.style.transform = 'rotate(180deg)'
      }
    }
  }
}
</script>

<style scoped>
ul{
  list-style: none;
}
header{
  padding-top: 10px;
}
#language-changer button{
  font-size: 22px;
  font-weight: 400;
  padding: 0px 8px;
  color: #ffffff;
  transition: .3s ease-in;
}
#language-changer button:not(.active){
  color: #ffffff55;
}
#language-changer button:not(.active):hover{
  color: #fff;
}
span.line{
  height: 25px;
  width: 2.5px;
  border-radius: 10px;
  background-color: #fff;
}

.btn:not(#theme-changer):hover{
  transform: scale(1.1);
}
#theme-changer{
  transition: 1s ease-out;
}

#theme-changer, router-link{
  cursor: pointer;
}
router-link, a{
  font-size: 20px;
  font-weight: 400;
  color: #fff;
}
.router-link-active{
  color: transparent;
  background: hsla(285, 80%, 72%, 1);
  background: linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  background: -moz-linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  background: -webkit-linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

</style>
