<template>
  <div id="footer" class="grid flex-row-reverse sm:flex-row">
    <div class="col-12 md:col text-align-center">
      <div class="inline-block text-left text-xs">
        <div class="mt-3 mb-2">
          <a target="_blank" href="https://www.github.com/ydot19">
            <span>
              <font-awesome-icon :icon="['fab', 'github']" size="lg"/>
              Github
            </span>
          </a>
        </div>
        <div class="mt-2 mb-2">
          <a target="_blank" href="https://www.linkedin.com/in/yaadata-abdalhalim/">
            <span>
              <font-awesome-icon :icon="['fab', 'linkedin-in']" size="lg"/>
              LinkedIn
            </span>
          </a>
        </div>
        <div class="mt-2 mb-2">
          <a target="_blank" href="https://www.youtube.com/channel/UC4-AwdRSgLPI3NRhVl9vIlQ">
            <span>
              <font-awesome-icon :icon="['fab', 'youtube']" size="lg"/>
              YouTube
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 md:col md:text-sm text-xs text-align-center">
      <div class="grid  md:text-sm text-xs">
        <div class="col-12 md:col-12 sm:mt-3 pb-0">Created By: Yaadata M. Abdalhalim </div>
        <div class="col md:col-12 mt-0 pb-0">Copyright 2023 </div>
        <div class="col md:col-12 mt-0 pb-0">All Rights Reserved </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#footer {
  border-top: var(--font-color-light) outset thin;
  background-color: var(--accent);
  font-family: 'JetBrains Mono Thin', sans-serif;
}

a {
  text-decoration: none;
  color: var(--font-color-light)
}

@media(hover: hover) and (pointer: fine) {
  a:hover {
    color: var(--font-color-medium);
    font-size: medium;
    text-decoration-line: blink;
  }
}

</style>
<script setup lang="ts">
</script>
