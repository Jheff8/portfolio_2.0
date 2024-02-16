<template>
  <h1 class="title gradient-text">About me</h1>
    <div class="content-wrapper d-flex justify-content-between align-items-start">
      <div class="about-me-text w-50 text-color">
        <h2 class="secondary-title">Get to know me!</h2>
        <p class="body-text top-margin">
          In the heart of the rainforest, where sunlight filtered through the dense canopy of trees, life pulsated in a symphony of colors and sounds. Each leaf swayed gently to the whisper of the wind, while vibrantly feathered birds danced among the branches, filling the air with their melodious songs. Beneath the golden rays of the sun, the flora displayed its exuberance, revealing a...
          <br><br>
          Amidst this spectacle of nature, a small trail meandered among the ancient trunks, inviting adventurers to explore the hidden secrets of the forest. Each step was a. As the sun dipped below the horizon, painting the sky in fiery hues, the forest assumed a new life. Shadows lengthened among the trees, and dusk cast a magical veil over the land.
      </p>
      </div>
      <div class="skills-content text-color">
        <h2 class="secondary-title">See my skills</h2>
        <div class="d-flex align-items-center flex-wrap top-margin">
          <skills-button v-for="skills in loadListOfSkills" :key="skills" :skillName="skills"> </skills-button>
        </div>
      </div>
  </div>

</template>
<script>
import SkillsButton from '../ui/SkillsButton.vue'
export default {
  components: {
    SkillsButton
  },
  data () {
    return {
      listOfSkills: ['vue', 'javascript', 'bootstrap', 'figma', 'github', 'git', 'responsive design', 'jQuery', 'python', 'firebase', 'html', 'css']
    }
  },
  computed: {
    loadListOfSkills () {
      return this.listOfSkills
    }
  }
}
</script>
<style scoped>
.d-flex{
  row-gap: 12px;
  column-gap: 15px;
  width: 100%;
}
.skills-content{
  width: 45%;
}
.top-margin{
  margin-top: 36px;
}
.title{
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
}
.content-wrapper{
  position: absolute;
  top: 58%;
  transform: translate(0%, -50%);
}
.secondary-title{
  font-size: 28px;
  font-weight: 500;
}
</style>
