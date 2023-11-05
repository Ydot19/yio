<template>
  <div class="p-0 m-0 h-screen main-div">
    <NavBar></NavBar>
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script>
export default {
  name: "app"
};
</script>

<script setup>
import NavBar from "@/layout/NavBar.vue";
import Footer from "@/layout/Footer.vue";
</script>

<style>

.main-div {
  background: var(--background);
}

p, div, li, ul {
  color: var(--font-color-light);
}
</style>
