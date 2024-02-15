<template>
  <div class="social-media-container">
    <div class="buttons-wrap">
      <a href='https://github.com/Jheff8' target="_blank" class="btn social-media-btn" id="github">
        <img src="../../assets/github_icon.svg" alt="github icon" v-on:mouseenter="startAnimation" v-on:mouseleave="stopAnimation" class="animation">
      </a>
      <a href='https://www.linkedin.com/in/jhefferson-muzy-039389247/' target="_blank" class="btn social-media-btn" id="linkedin">
        <img src="../../assets/linkedin_icon.svg" alt="linkedin icon" v-on:mouseenter="startAnimation" v-on:mouseleave="stopAnimation" class="animation">
      </a>
      <a href='mailto:jheffersonmuzy46@gmail.com' target="_blank" class="btn social-media-btn" id="email">
        <img src="../../assets/email_icon.svg" alt="email icon" v-on:mouseenter="startAnimation" v-on:mouseleave="stopAnimation" class="animation">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      animation: null
    }
  },
  methods: {
    stopAnimation (event) {
      clearInterval(this.animation)
      event.target.classList.add('animation')
      event.target.parentNode.classList.remove('show-icon-name')
    },
    startAnimation (event) {
      event.target.parentNode.classList.add('show-icon-name')
      this.animation = setInterval(() => {
        event.target.classList.toggle('animation')
      }, 1200)
    }
  }
}
</script>
<style scoped>
.social-media-container{
  position: absolute;
  left: 25px;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  padding: 8px 4px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #1e1e1e;
  transition: .8s ease;
}
.buttons-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
a{
  position: relative;
}
img{
  width: 38px !important;
  height: 38px !important;
  transition: .6s ease;
}
img:hover{
  scale: 1.12;
}
.animation:hover{
  animation: shake .8s ease-in both;
}

.social-media-btn{
  display: flex;
  align-items: center;
  justify-content: start;
  width: 60px;
}
a::before{
  position: absolute;
  right: -125px;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 76px;
  padding: 4px 0;

  color: white;
  font-weight: 600;
  opacity: 0;
  border-radius: 4px;
  background-color: #1e1e1e;
  pointer-events: none;
  z-index: -9;
  transition: .3s linear;
}
#linkedin::before{
  content: 'Linkedin';
}
#github::before{
  content: 'Github';
}
#email::before{
  content: 'Email';
}
a.show-icon-name::before{
  opacity: 1;
}
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(2px, 0, 0);
  }
}

</style>
