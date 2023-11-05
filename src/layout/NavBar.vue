<template>
  <div class="card sticky" id="navbar">
    <Menubar :model="items" class="h-full">
      <template #start>
        <img alt="logo" src="/logo_clear.svg" height="35" class="mr-2" />
      </template>
      <template #item="{ label, item, props }">
          <router-link v-if="item.url" v-slot:default="routerProps" :to="item.url" >
            <a :href="routerProps.href" v-bind="props.action">
              <span v-bind="props.icon" />
              <p class="text-font-family-thin text-xs pb-0 pt-0 mt-0 mb-1"><span v-bind="props.label" class="pl-3">{{ label }}</span></p>
            </a>
          </router-link>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
  {
    label: 'Home',
    icon: 'fa-solid fa-house',
    url: '/'
  },
  {
    label: 'About',
    // icon: 'pi pi-fw pi-power-off',
    url: '/about'
  },
  {
    label: 'Blogs',
    // icon: 'pi pi-fw pi-power-off',
    url: '/blogs'
  }
]);
</script>

<style scoped>
#navbar {
  height: 30px;
  background-color: var(--accent);
  border-bottom: var(--font-color-medium) outset thin;
}
</style>
