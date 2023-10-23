<template>
  <div class="frappe-base p-0 m-0 h-screen text-font-family-thin">
    <div class="flex flex-column h-full align-items-center justify-content-center">
      <div>

      </div>
      <div class="flex align-items-left text-xs">Welcome to</div>
      <div class="flex align-items-center text-align-center text-font-family-medium">
        <Typewriter class="lg:text-3xl sm:text-2xl">yaadata.dev</Typewriter>
      </div>

    </div>
  </div>
</template>

<script setup>
import Typewriter from "../components/Typewriter.vue";

</script>

<style scoped>
.frappe-base {
  background: var(--ctp-mocha-surface0);
}

</style>
