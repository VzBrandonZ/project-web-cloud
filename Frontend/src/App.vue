<template>
  
  <home />
 
  
  <main class="container py-5">
    <router-view />
  </main>
  
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Home from "./components/Home.vue";


export default defineComponent({
  name: "App",
  components: {
    Home,
  
  },
});
</script>