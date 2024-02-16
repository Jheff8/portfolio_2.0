<template>
  <the-header></the-header>
  <aside>
    <social-media></social-media>
  </aside>
  <main>
    <!-- <router-view></router-view> -->
    <home-section></home-section>
  </main>
  <section>
    <about-section></about-section>
  </section>
</template>

<script>
import TheHeader from './components/ui/TheHeader.vue'
import SocialMedia from './components/ui/SocialMedia.vue'
import HomeSection from './components/sections/HomeSection.vue'
import AboutSection from './components/sections/AboutSection.vue'

export default {
  components: {
    TheHeader,
    SocialMedia,
    HomeSection,
    AboutSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  position: relative;
  height: 100vh;
  font-family: 'Outfit', sans-serif;
  background-image: url('../src/assets/black_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
}
main, section{
  height: 100vh;
}
section{
  position: relative;
  display: grid;
  place-content: center;
}

/* global classes */
.text-color {
  color: #fff !important;
}
.body-text{
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}
.title{
  font-size: 52px;
  font-weight: 900;
  line-height: 1.3;
  text-transform: capitalize;
}

.subtitle{
  font-size: 33.5px;
  font-weight: 100;
  text-transform: lowercase;
}
.gradient-text, .gradient-text-hover:hover{
  color: transparent;
  background: hsla(285, 80%, 72%, 1);
  background: linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  background: -moz-linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  background: -webkit-linear-gradient(0deg, hsla(285, 80%, 72%, 1) 0%, hsla(219, 85%, 68%, 1) 50%, hsla(258, 63%, 60%, 1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
}
.gradient-text-hover{
  transition: .5s ease;
}
.btn:focus-visible, .btn:focus{
  box-shadow: none;
  border: none;
  outline: none;
}
</style>
