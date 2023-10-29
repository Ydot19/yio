<template>
  <div id="in-progress-div">
      <img id="in-progress-img" class="mb-4" src = "@/assets/images/in-progress.svg" alt="page still in-progress" />
  </div>
</template>

<style scoped>
#in-progress-img {
  transform: scale(0.25);
}

@media screen and (max-width: 500px) {
  #in-progress-img {
    transform: scale(0.50);
  }
}

@media screen and (max-width: 800px) {
  #in-progress-img {
    transform: scale(0.45);
  }
}

#in-progress-div {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
<script setup lang="ts">
</script>
