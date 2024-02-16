<template>
    <div class="box">
      <span class="text text-color">{{ skillName }}</span>
    </div>
</template>
<script>
export default {
  props: ['skillName']
}
</script>

<style scoped>
.box{
  display: grid;
  place-content: center;
  padding: 6px 18px;
  min-width: 70px;
  min-height: 35px;
  border-radius: 25px;
  background-color: #1e1e1e;
  transition: .6s ease;
}
.box:hover{
  background: #7F59D9;
}
.text{
  font-size: 14px;
  letter-spacing: 0.032px;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
