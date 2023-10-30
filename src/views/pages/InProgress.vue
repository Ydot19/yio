<template>
  <div id="in-progress-div">
      <img id="in-progress-img" class="mb-4" src = "@/assets/images/in-progress.svg" alt="page still in-progress" />
  </div>
</template>

<style scoped>
#in-progress-div {
  height: 100%;
  display: flex;
  align-items: center;
}

#in-progress-img {
  max-width: 100%;
}


@media all and (min-width: 800px) {
  #in-progress-img {
    transform: scale(0.35);
  }
}

@media all and (max-width:800px) and (min-width: 500px) {
  #in-progress-img {
    transform: scale(0.50);
  }
}

@media all and (max-width: 500px) {
  #in-progress-img {
    transform: scale(0.75);
  }
}




</style>
<script setup lang="ts">
</script>
