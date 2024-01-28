
<template>

  <!-- Navbar -->
  <Navbar />

  <div class="p-6">
    <router-view></router-view>
  </div>

</template>

<script setup lang="ts">

import Navbar from './components/frontend/Navbar.vue'

// set color theme
let theme = localStorage.getItem('data-theme');
theme === 'dark' ?
  document.querySelector('html')?.classList.add('dark') :
  document.querySelector('html')?.classList.remove('dark') ;

</script>